"use client"
import type React from "react"
import { useEffect, useRef } from "react"
import * as THREE from "three"

// Définition des lettres avec leurs fonctions de distance
const letters = [
  { char: 'F', distFn: (px: number, py: number, w: number, h: number) => {
      const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
      const top = capsule(px, py, 0, h/2, 0.18, h/2, w)
      const mid = capsule(px, py, 0, 0.1, 0.15, 0.1, w)
      return Math.min(vert, Math.min(top, mid))
    }
  },
  { char: 'A', distFn: (px: number, py: number, w: number, h: number) => {
      const left = capsule(px, py, -0.15, -h/2, 0, h/2, w)
      const right = capsule(px, py, 0, h/2, 0.15, -h/2, w)
      const bar = capsule(px, py, -0.1, 0, 0.1, 0, w)
      return Math.min(left, Math.min(right, bar))
    }
  },
  { char: 'C', distFn: (px: number, py: number, w: number, h: number) => {
      const radius = h / 2.2
      const thickness = w * 2.5  // Épaisseur réduite de la barre
      const centerX = 0
      const centerY = 0

      const dx = px - centerX
      const dy = py - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)

      // ✅ CORRECTION ICI : Exclure seulement la partie droite
      // Math.atan2 retourne des valeurs entre -π et π
      // On veut TOUT SAUF la zone de -45° à 45° (ouverture droite)
      let inArc = true
      if (angle > -Math.PI * 0.25 && angle < Math.PI * 0.25) {
        inArc = false  // Exclure de -45° à 45°
      }

      if (!inArc) {
        return 1000
      }

      // Distance au cercle moyen
      const distToRing = Math.abs(dist - radius)

      // Si on est proche du cercle (dans l'épaisseur), c'est bon
      return distToRing - thickness / 2
    }
  },
  { char: 'I', distFn: (px: number, py: number, w: number, h: number) => {
      // Corps : de -h/2 (bas) à h/6 (laisser espace pour le point)
      const stem = capsule(px, py, 0, -h/2, 0, h/6, w * 1.1)

      // Point : centré à h/2.8 (légèrement plus haut)
      const dotCenterY = h/2.8
      const dotRadius = w * 1.2  // Un peu plus gros pour visibilité
      const dx = px - 0
      const dy = py - dotCenterY
      const dotDist = Math.sqrt(dx * dx + dy * dy)
      const dot = dotDist - dotRadius

      return Math.min(stem, dot)
    }
  },
  { char: 'L', distFn: (px: number, py: number, w: number, h: number) => {
      const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
      const bot = capsule(px, py, 0, -h/2, 0.16, -h/2, w)
      return Math.min(vert, bot)
    }
  },
  { char: 'E', distFn: (px: number, py: number, w: number, h: number) => {
      const vert = capsule(px, py, 0, -h/2, 0, h/2, w)
      const top = capsule(px, py, 0, h/2, 0.16, h/2, w)
      const mid = capsule(px, py, 0, 0, 0.14, 0, w)
      const bot = capsule(px, py, 0, -h/2, 0.16, -h/2, w)
      return Math.min(vert, Math.min(top, Math.min(mid, bot)))
    }
  },
  { char: '-', distFn: (px: number, py: number, w: number, h: number) => {
      return capsule(px, py, -0.1, 0.05, 0.1, 0.05, w)
  }
  },
  { char: 'I', distFn: (px: number, py: number, w: number, h: number) => {
      // Corps : de -h/2 (bas) à h/6 (laisser espace pour le point)
      const stem = capsule(px, py, 0, -h/2, 0, h/6, w * 1.1)

      // Point : centré à h/2.8 (légèrement plus haut)
      const dotCenterY = h/2.8
      const dotRadius = w * 1.2  // Un peu plus gros pour visibilité
      const dx = px - 0
      const dy = py - dotCenterY
      const dotDist = Math.sqrt(dx * dx + dy * dy)
      const dot = dotDist - dotRadius

      return Math.min(stem, dot)
    }
  },
  { char: 'A', distFn: (px: number, py: number, w: number, h: number) => {
      const left = capsule(px, py, -0.15, -h/2, 0, h/2, w)
      const right = capsule(px, py, 0, h/2, 0.15, -h/2, w)
      const bar = capsule(px, py, -0.1, 0, 0.1, 0, w)
      return Math.min(left, Math.min(right, bar))
  }
  },
]

// Fonction capsule (ancienne fonction g)
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
export function LogoHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scenesRef = useRef<any[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scenes: any[] = []

    // Largeur totale divisée en 7 (au lieu de 9) pour plus d'espacement
    const totalWidth = container.clientWidth
    const cellWidth = totalWidth / 7  // Élargi de 9 à 7 divisions
    const cellHeight = container.clientHeight

    // Créer 9 canvas (un par lettre) avec espacement élargi
    letters.forEach((letter, index) => {
      const canvas = document.createElement('canvas')
      canvas.style.position = 'absolute'
      // Centrer le logo avec le nouvel espacement (7 divisions pour 9 lettres)
      const startOffset = (totalWidth - 9 * cellWidth) / 2
      canvas.style.left = `${startOffset + index * cellWidth}px`
      canvas.style.top = '0'
      canvas.style.width = `${cellWidth}px`
      canvas.style.height = `${cellHeight}px`
      canvas.width = cellWidth
      canvas.height = cellHeight
      container.appendChild(canvas)

      // Setup Three.js pour cette lettre
    const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, cellWidth / cellHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setSize(cellWidth, cellHeight)
      renderer.setClearColor(0x000000, 0)

      // Générer particules pour cette lettre UNIQUEMENT
      const numParticles = letter.char === 'I' ? 1200 : 2000  // Moins dense pour les i
      const thickness = 0.1
      const w = 0.04
      const h = 0.6

    const positions = new Float32Array(numParticles * 3)
    const colors = new Float32Array(numParticles * 3)
    let i = 0
      const maxAttempts = 100000

      // Zone de génération : centrée dans le cadre
      while (i < numParticles && i < maxAttempts) {
        const x = (Math.random() - 0.5) * 0.8  // ±0.4 (plus petit pour rester dans cadre)
        const y = (Math.random() - 0.5) * 1.0  // ±0.5
        const z = (Math.random() - 0.5) * thickness

        // Utiliser la fonction de distance de cette lettre
        if (letter.distFn(x, y, w, h) <= 0) {
        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
        colors[i * 3] = 1
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
        i++
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
        size: 0.01,  // Plus gros car cadre plus petit
      sizeAttenuation: true,
      vertexColors: true,
        transparent: true,
        opacity: 0.9,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)
      camera.position.set(0, 0, 1.0)

      // Stocker les positions originales et vélocités pour les animations
      const originalPositions = positions.slice()
      const velocities = new Float32Array(numParticles * 3)

      scenes.push({
        scene,
        camera,
        renderer,
        geometry,
        colors,
        particleCount: i,
        originalPositions,
        velocities
      })
    })

    scenesRef.current = scenes

    // Mouse interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let mouseIntersection: THREE.Vector3 | null = null

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      // Créer un plan pour l'intersection
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      const intersect = new THREE.Vector3()
      raycaster.setFromCamera(mouse, scenes[4].camera) // Utiliser la caméra du L (centre)
      if (raycaster.ray.intersectPlane(plane, intersect)) {
        mouseIntersection = intersect
      } else {
        mouseIntersection = null
      }
    }

    const handleResize = () => {
      const totalWidth = container.clientWidth
      const cellWidth = totalWidth / 9
      const cellHeight = container.clientHeight

      scenes.forEach((sceneData, index) => {
        const canvas = container.children[index] as HTMLCanvasElement
        canvas.width = cellWidth
        canvas.height = cellHeight
        canvas.style.width = `${cellWidth}px`
        canvas.style.height = `${cellHeight}px`

        sceneData.camera.aspect = cellWidth / cellHeight
        sceneData.camera.updateProjectionMatrix()
        sceneData.renderer.setSize(cellWidth, cellHeight)
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      const time = Date.now() * 0.001
      const isDark = document.documentElement.classList.contains('dark')

      scenes.forEach(sceneData => {
        const positions = sceneData.geometry.attributes.position.array as Float32Array
        const colors = sceneData.geometry.attributes.color.array

        // Mouse interaction
        if (mouseIntersection) {
          const mouseX = mouseIntersection.x
          const mouseY = mouseIntersection.y
          const mouseZ = mouseIntersection.z

          for (let i = 0; i < sceneData.particleCount; i++) {
          const i3 = i * 3
          const dx = positions[i3] - mouseX
          const dy = positions[i3 + 1] - mouseY
          const dz = positions[i3 + 2] - mouseZ
          const distSq = dx * dx + dy * dy + dz * dz
          const dist = Math.sqrt(distSq)
          const influenceRadius = 0.5

          if (dist < influenceRadius) {
            const force = (1 - dist / influenceRadius) * 0.01
              sceneData.velocities[i3] += dx / dist * force
              sceneData.velocities[i3 + 1] += dy / dist * force
              sceneData.velocities[i3 + 2] += dz / dist * force
          }
        }
      }

        // Appliquer la physique et retourner aux positions originales
        for (let i = 0; i < sceneData.particleCount; i++) {
        const i3 = i * 3
          const originalX = sceneData.originalPositions[i3]
          const originalY = sceneData.originalPositions[i3 + 1]
          const originalZ = sceneData.originalPositions[i3 + 2]

          // Force de retour vers la position originale
          const dx = originalX - positions[i3]
          const dy = originalY - positions[i3 + 1]
          const dz = originalZ - positions[i3 + 2]

          sceneData.velocities[i3] += dx * 0.02
          sceneData.velocities[i3 + 1] += dy * 0.02
          sceneData.velocities[i3 + 2] += dz * 0.02

          // Amortissement
          sceneData.velocities[i3] *= 0.95
          sceneData.velocities[i3 + 1] *= 0.95
          sceneData.velocities[i3 + 2] *= 0.95

          // Appliquer les vélocités
          positions[i3] += sceneData.velocities[i3]
          positions[i3 + 1] += sceneData.velocities[i3 + 1]
          positions[i3 + 2] += sceneData.velocities[i3 + 2]

          // Adapter couleurs au thème
          if (isDark) {
          colors[i3] = 1
          colors[i3 + 1] = 1
          colors[i3 + 2] = 1
          } else {
            colors[i3] = 0
            colors[i3 + 1] = 0
            colors[i3 + 2] = 0
        }
      }

        sceneData.geometry.attributes.position.needsUpdate = true
        sceneData.geometry.attributes.color.needsUpdate = true
        sceneData.renderer.render(sceneData.scene, sceneData.camera)
      })
    }

    animate()

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      scenes.forEach(sceneData => {
        sceneData.geometry.dispose()
        sceneData.renderer.dispose()
      })
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ pointerEvents: 'auto' }}
      />
  )
}
