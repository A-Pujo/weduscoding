'use client'

import { useEffect, useRef } from 'react'

export default function Kambing() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 600
    canvas.height = 400

    const spriteSheet = new Image()
    spriteSheet.src = '/animation/sprites/bergschaf-laufanimation-m.png'

    const frameSize = 63 // 252 / 4
    let frameX = 0
    let frameY = 0
    let posX = 100
    let posY = 100
    let direction = 'down'

    const animationSpeed = 200 // ms between sprite changes (5 fps)
    const moveSpeed = 0.4 // pixels per frame
    let lastFrameChange = 0
    let directionTimer = 0

    function getRandomDirection() {
      const dirs = ['down', 'left', 'right', 'up']
      return dirs[Math.floor(Math.random() * dirs.length)]
    }

    function moveGoat() {
      switch (direction) {
        case 'down':
          frameY = 0
          posY += moveSpeed
          break
        case 'left':
          frameY = 1
          posX -= moveSpeed
          break
        case 'right':
          frameY = 2
          posX += moveSpeed
          break
        case 'up':
          frameY = 3
          posY -= moveSpeed
          break
      }

      // keep inside canvas
      if (posX < 0) direction = 'right'
      if (posX > canvas.width - frameSize) direction = 'left'
      if (posY < 0) direction = 'down'
      if (posY > canvas.height - frameSize) direction = 'up'
    }

    function animate(timestamp) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ganti frame hanya setiap animationSpeed ms
      if (timestamp - lastFrameChange > animationSpeed) {
        frameX = (frameX + 1) % 4
        lastFrameChange = timestamp
      }

      moveGoat()

      ctx.drawImage(
        spriteSheet,
        frameX * frameSize, frameY * frameSize,
        frameSize, frameSize,
        posX, posY,
        frameSize, frameSize
      )

      directionTimer += 16 // estimasi frame tiap 60Hz (~16ms)
      if (directionTimer > 2500) {
        direction = getRandomDirection()
        directionTimer = 0
      }

      requestAnimationFrame(animate)
    }

    spriteSheet.onload = () => {
      requestAnimationFrame(animate)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <canvas ref={canvasRef} className="rounded-lg shadow-md border border-green-700" />
    </div>
  )
}
