"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { PawPrintIcon as Paw } from "lucide-react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Importar GSAP dinámicamente
    import("gsap").then((gsap) => {
      const tl = gsap.default.timeline({
        onComplete: () => {
          setTimeout(() => {
            setIsVisible(false)
            onComplete()
          }, 500)
        },
      })

      // Animación de entrada del logo
      tl.fromTo(
        ".splash-logo",
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
      )

      // Animación del texto principal
      tl.fromTo(
        ".splash-title",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )

      // Animación del subtítulo
      tl.fromTo(
        ".splash-subtitle",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )

      // Animación de las huellas flotantes
      tl.fromTo(
        ".floating-paw",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 0.6,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4",
      )

      // Pausa antes de salir
      tl.to({}, { duration: 1.5 })

      // Animación de salida
      tl.to(".splash-content", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      })

      tl.to(
        ".splash-background",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3",
      )
    })
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="splash-background fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 via-pink-200/50 to-purple-300/50 animate-pulse"></div>

      {/* Huellas flotantes decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-paw absolute top-20 left-20 text-orange-300/30">
          <Paw className="h-8 w-8 animate-float" />
        </div>
        <div className="floating-paw absolute top-32 right-32 text-pink-300/30">
          <Paw className="h-6 w-6 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="floating-paw absolute bottom-40 left-32 text-purple-300/30">
          <Paw className="h-10 w-10 animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="floating-paw absolute bottom-20 right-20 text-orange-300/30">
          <Paw className="h-7 w-7 animate-float" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="floating-paw absolute top-1/2 left-10 text-pink-300/30">
          <Paw className="h-5 w-5 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="floating-paw absolute top-1/3 right-10 text-purple-300/30">
          <Paw className="h-9 w-9 animate-float" style={{ animationDelay: "2.5s" }} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="splash-content relative z-10 text-center">
        {/* Logo principal */}
        <div className="splash-logo mb-8 relative flex justify-center">
          <Image
            src="https://i.imgur.com/8gFuFe0.png"
            alt="Oeste Gatitos Logo"
            width={320}
            height={320}
            className="w-80 h-80 object-contain"
            priority
          />
        </div>

        {/* Título */}
        <h1 className="splash-title text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Oeste Gatitos
        </h1>

        {/* Subtítulo */}
        <p className="splash-subtitle text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
          Rescatando, cuidando y alimentando desde 2019
        </p>

        {/* Indicador de carga */}
        <div className="mt-12">
          <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
