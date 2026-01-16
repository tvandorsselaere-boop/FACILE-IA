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
      const thickness = w * 2.5
      const centerX = 0
      const centerY = 0

      const dx = px - centerX
      const dy = py - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)

      let inArc = true
      if (angle > -Math.PI * 0.25 && angle < Math.PI * 0.25) {
        inArc = false
      }

      if (!inArc) {
        return 1000
      }

      const distToRing = Math.abs(dist - radius)
      return distToRing - thickness / 2
    }
  },
  { char: 'I', distFn: (px: number, py: number, w: number, h: number) => {
      const stem = capsule(px, py, 0, -h/2, 0, h/6, w * 1.1)
      const dotCenterY = h/2.8
      const dotRadius = w * 1.2
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
  { char: '-', distFn: (px: number, py: number, w: number) => {
      return capsule(px, py, -0.1, 0.05, 0.1, 0.05, w)
  }
  },
  { char: 'I', distFn: (px: number, py: number, w: number, h: number) => {
      const stem = capsule(px, py, 0, -h/2, 0, h/6, w * 1.1)
      const dotCenterY = h/2.8
      const dotRadius = w * 1.2
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

// Fonction capsule
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
  const scenesRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    geometry: THREE.BufferGeometry
    particleCount: number
    originalPositions: Float32Array
    velocities: Float32Array
  }[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scenes: typeof scenesRef.current = []

    // Calcul correct : totalWidth / nombre de lettres
    const totalWidth = container.clientWidth
    const totalLetters = letters.length // 9 lettres
    const cellWidth = totalWidth / totalLetters
    const cellHeight = container.clientHeight

    letters.forEach((letter, index) => {
      const canvas = document.createElement('canvas')
      canvas.style.position = 'absolute'
      canvas.style.left = `${index * cellWidth}px`
      canvas.style.top = '0'
      canvas.style.width = `${cellWidth}px`
      canvas.style.height = `${cellHeight}px`
      // Use device pixel ratio for sharper rendering
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(cellWidth * dpr)
      canvas.height = Math.floor(cellHeight * dpr)
      container.appendChild(canvas)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, cellWidth / cellHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false
      })
      renderer.setPixelRatio(dpr)
      renderer.setSize(cellWidth, cellHeight)
      renderer.setClearColor(0x000000, 0)

      const numParticles = letter.char === 'I' || letter.char === '-' ? 1500 : 3500
      const thickness = 0.1
      const w = 0.04
      const h = 0.6

    const positions = new Float32Array(numParticles * 3)
    const colors = new Float32Array(numParticles * 3)
    let i = 0
      const maxAttempts = 200000

      while (i < numParticles && i < maxAttempts) {
        const x = (Math.random() - 0.5) * 1.0
        const y = (Math.random() - 0.5) * 1.2
        const z = (Math.random() - 0.5) * thickness

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
        size: 0.015,
      sizeAttenuation: true,
      vertexColors: true,
        transparent: true,
        opacity: 0.95,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)
      camera.position.set(0, 0, 1.0)

      const originalPositions = positions.slice()
      const velocities = new Float32Array(numParticles * 3)

      scenes.push({
        scene,
        camera,
        renderer,
        geometry,
        particleCount: i,
        originalPositions,
        velocities
      })
    })

    scenesRef.current = scenes

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let mouseIntersection: THREE.Vector3 | null = null

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      const intersect = new THREE.Vector3()
      raycaster.setFromCamera(mouse, scenes[4].camera)
      if (raycaster.ray.intersectPlane(plane, intersect)) {
        mouseIntersection = intersect
      } else {
        mouseIntersection = null
      }
    }

    const handleResize = () => {
      const totalWidth = container.clientWidth
      const totalLetters = letters.length
      const cellWidth = totalWidth / totalLetters
      const cellHeight = container.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      scenes.forEach((sceneData, index) => {
        const canvas = container.children[index] as HTMLCanvasElement
        canvas.width = Math.floor(cellWidth * dpr)
        canvas.height = Math.floor(cellHeight * dpr)
        canvas.style.width = `${cellWidth}px`
        canvas.style.height = `${cellHeight}px`
        canvas.style.left = `${index * cellWidth}px`

        sceneData.camera.aspect = cellWidth / cellHeight
        sceneData.camera.updateProjectionMatrix()
        sceneData.renderer.setPixelRatio(dpr)
        sceneData.renderer.setSize(cellWidth, cellHeight)
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    const animate = () => {
      requestAnimationFrame(animate)
      const isDark = document.documentElement.classList.contains('dark')

      scenes.forEach(sceneData => {
        const positions = sceneData.geometry.attributes.position.array as Float32Array
        const colors = sceneData.geometry.attributes.color.array as Float32Array

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

        for (let i = 0; i < sceneData.particleCount; i++) {
        const i3 = i * 3
          const originalX = sceneData.originalPositions[i3]
          const originalY = sceneData.originalPositions[i3 + 1]
          const originalZ = sceneData.originalPositions[i3 + 2]

          const dx = originalX - positions[i3]
          const dy = originalY - positions[i3 + 1]
          const dz = originalZ - positions[i3 + 2]

          sceneData.velocities[i3] += dx * 0.02
          sceneData.velocities[i3 + 1] += dy * 0.02
          sceneData.velocities[i3 + 2] += dz * 0.02

          sceneData.velocities[i3] *= 0.95
          sceneData.velocities[i3 + 1] *= 0.95
          sceneData.velocities[i3 + 2] *= 0.95

          positions[i3] += sceneData.velocities[i3]
          positions[i3 + 1] += sceneData.velocities[i3 + 1]
          positions[i3 + 2] += sceneData.velocities[i3 + 2]

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
