"use client"

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// Fonction capsule (distance à un segment)
function capsule(px: number, py: number, ax: number, ay: number, cx: number, cy: number, w: number) {
  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
  const pax = px - ax
  const pay = py - ay
  const bax = cx - ax
  const bay = cy - ay
  const dotBaBa = bax * bax + bay * bay
  const dotPaBa = pax * bax + pay * bay
  const h = clamp(dotPaBa / dotBaBa, 0, 1)
  const dx = pax - bax * h
  const dy = pay - bay * h
  return Math.sqrt(dx * dx + dy * dy) - w
}

// Fonctions de distance pour chaque lettre (ajustées)
const letterDistanceFunctions: Record<string, (px: number, py: number, w: number, h: number) => number> = {
  F: (px, py, w, h) => {
    const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
    const top = capsule(px, py, 0, h/2, 0.16, h/2, w)
    const mid = capsule(px, py, 0, 0.1, 0.13, 0.1, w)
    return Math.min(vert, Math.min(top, mid))
  },
  A: (px, py, w, h) => {
    // Jambes resserrées pour un A plus compact
    const left = capsule(px, py, -0.12, -h/2, 0, h/2, w)
    const right = capsule(px, py, 0, h/2, 0.12, -h/2, w)
    const bar = capsule(px, py, -0.08, -0.02, 0.08, -0.02, w)
    return Math.min(left, Math.min(right, bar))
  },
  C: (px, py, w, h) => {
    const radius = h / 2.2
    const thickness = w * 2.5
    const centerX = 0.05
    const centerY = 0
    const dx = px - centerX
    const dy = py - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx)
    if (angle > -Math.PI * 0.25 && angle < Math.PI * 0.25) return 1000
    return Math.abs(dist - radius) - thickness / 2
  },
  I: (px, py, w, h) => {
    // i minuscule bien centré
    const stem = capsule(px, py, 0, -h/2, 0, h/5, w * 1.0)
    const dotCenterY = h / 2.5
    const dotRadius = w * 1.3
    const dx = px
    const dy = py - dotCenterY
    const dot = Math.sqrt(dx * dx + dy * dy) - dotRadius
    return Math.min(stem, dot)
  },
  L: (px, py, w, h) => {
    const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
    const bot = capsule(px, py, 0, -h/2, 0.14, -h/2, w)
    return Math.min(vert, bot)
  },
  E: (px, py, w, h) => {
    const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
    const top = capsule(px, py, 0, h/2, 0.14, h/2, w)
    const mid = capsule(px, py, 0, 0, 0.12, 0, w)
    const bot = capsule(px, py, 0, -h/2, 0.14, -h/2, w)
    return Math.min(vert, Math.min(top, Math.min(mid, bot)))
  },
  '-': (px, py, w) => {
    return capsule(px, py, -0.08, 0.05, 0.08, 0.05, w)
  },
}

interface ParticleData {
  originalX: number
  originalY: number
  originalZ: number
  velocityX: number
  velocityY: number
  velocityZ: number
}

export function LogoHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    if (width === 0 || height === 0) return

    // UN SEUL renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // UNE SEULE scène
    const scene = new THREE.Scene()

    // UNE SEULE caméra perspective
    const aspect = width / height
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
    camera.position.z = 0.9

    // ========== NOUVELLE CONFIGURATION AVEC LARGEURS INDIVIDUELLES ==========
    const letterConfig = [
      { char: 'F', width: 0.14, accent: false },
      { char: 'A', width: 0.13, accent: false },  // Légèrement réduit
      { char: 'C', width: 0.12, accent: false },
      { char: 'I', width: 0.07, accent: false },  // i minuscule - étroit
      { char: 'L', width: 0.11, accent: false },
      { char: 'E', width: 0.11, accent: false },
      { char: '-', width: 0.09, accent: false },  // tiret avec un peu d'espace
      { char: 'I', width: 0.07, accent: true },   // IA en accent
      { char: 'A', width: 0.13, accent: true },   // IA en accent
    ]

    const totalWidth = 4.0
    const gap = 0.03  // Espacement entre lettres
    const totalGaps = (letterConfig.length - 1) * gap
    const totalRelativeWidth = letterConfig.reduce((sum, l) => sum + l.width, 0)
    const scale = (totalWidth - totalGaps) / totalRelativeWidth

    // Calculer les positions de centre de chaque lettre
    let cumulativeX = -totalWidth / 2
    const letterPositions = letterConfig.map((letter, index) => {
      const scaledWidth = letter.width * scale
      const centerX = cumulativeX + scaledWidth / 2
      cumulativeX += scaledWidth + (index < letterConfig.length - 1 ? gap : 0)
      return { ...letter, centerX, scaledWidth }
    })

    // Créer un tableau des indices accent pour "IA"
    const accentIndices = letterConfig
      .map((letter, index) => letter.accent ? index : -1)
      .filter(i => i !== -1)
    // ========== FIN NOUVELLE CONFIGURATION ==========

    const allParticleData: ParticleData[][] = []
    const letterGroups: THREE.Points[] = []

    letterPositions.forEach((letterData) => {
      const { char, centerX, scaledWidth } = letterData
      const distFn = letterDistanceFunctions[char]
      if (!distFn) return

      // Adapter le nombre de particules à la taille visuelle
      const baseParticles = char === 'I' || char === '-' ? 4000 : 8000
      const numParticles = Math.round(baseParticles * (scaledWidth / 0.5))

      const positions: number[] = []
      const colors: number[] = []
      const particleData: ParticleData[] = []

      const w = 0.04
      const h = 0.6
      const thickness = 0.03

      let i = 0
      const maxAttempts = 100000

      while (i < numParticles && i < maxAttempts) {
        const localX = (Math.random() - 0.5) * 0.5
        const localY = (Math.random() - 0.5) * 1.2
        const localZ = (Math.random() - 0.5) * thickness

        if (distFn(localX, localY, w, h) <= 0) {
          // Utiliser scaledWidth pour le scaling horizontal
          const x = centerX + localX * scaledWidth * 1.6  // Facteur réduit de 2 à 1.6
          const y = localY
          const z = localZ

          positions.push(x, y, z)
          colors.push(1, 1, 1)

          particleData.push({
            originalX: x,
            originalY: y,
            originalZ: z,
            velocityX: 0,
            velocityY: 0,
            velocityZ: 0
          })
          i++
        }
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.003,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.95
      })

      const points = new THREE.Points(geometry, material)
      scene.add(points)
      letterGroups.push(points)
      allParticleData.push(particleData)
    })

    // Gestion de la souris
    const mouse = { x: 0, y: 0, active: false }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Resize handler
    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      if (newWidth === 0 || newHeight === 0) return

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      const isDark = document.documentElement.classList.contains('dark')

      letterGroups.forEach((points, groupIndex) => {
        const positions = points.geometry.attributes.position
        const colors = points.geometry.attributes.color
        const particleData = allParticleData[groupIndex]

        for (let i = 0; i < positions.count; i++) {
          const data = particleData[i]
          let x = positions.getX(i)
          let y = positions.getY(i)
          let z = positions.getZ(i)

          // Force de répulsion de la souris
          if (mouse.active) {
            const mouseWorldX = mouse.x * 2.0
            const mouseWorldY = mouse.y * 0.6
            const dx = x - mouseWorldX
            const dy = y - mouseWorldY
            const dist = Math.sqrt(dx * dx + dy * dy)
            const influenceRadius = 0.6

            if (dist < influenceRadius && dist > 0) {
              const force = (1 - dist / influenceRadius) * 0.006
              data.velocityX += (dx / dist) * force
              data.velocityY += (dy / dist) * force
            }
          }

          // Force de rappel vers position originale
          data.velocityX += (data.originalX - x) * 0.02
          data.velocityY += (data.originalY - y) * 0.02
          data.velocityZ += (data.originalZ - z) * 0.02

          // Friction
          data.velocityX *= 0.95
          data.velocityY *= 0.95
          data.velocityZ *= 0.95

          // Appliquer vélocité
          x += data.velocityX
          y += data.velocityY
          z += data.velocityZ

          positions.setXYZ(i, x, y, z)

          // Couleur selon le thème ET si c'est une lettre accent
          const isAccent = accentIndices.includes(groupIndex)

          if (isAccent) {
            // Couleur accent (#6366f1 = rgb(99, 102, 241))
            colors.setXYZ(i, 99/255, 102/255, 241/255)
          } else if (isDark) {
            colors.setXYZ(i, 1, 1, 1)
          } else {
            colors.setXYZ(i, 0, 0, 0)
          }
        }

        positions.needsUpdate = true
        colors.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)

      letterGroups.forEach((points) => {
        points.geometry.dispose()
        ;(points.material as THREE.Material).dispose()
      })

      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{ pointerEvents: 'auto' }}
    />
  )
}
