"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Target,
  Eye,
  PawPrintIcon as Paw,
} from "lucide-react"

// Hook para GSAP animations
function useGSAPAnimations() {
  useEffect(() => {
    // Importar GSAP dinámicamente
    import("gsap").then((gsap) => {
      import("gsap/ScrollTrigger").then((ScrollTrigger) => {
        gsap.default.registerPlugin(ScrollTrigger.ScrollTrigger)

        // Animación para elementos que aparecen desde abajo
        gsap.default.fromTo(
          ".gsap-fade-up",
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".gsap-fade-up",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animación para elementos que aparecen desde la izquierda
        gsap.default.fromTo(
          ".gsap-slide-left",
          {
            opacity: 0,
            x: -80,
            rotation: -5,
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-slide-left",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animación para elementos que aparecen desde la derecha
        gsap.default.fromTo(
          ".gsap-slide-right",
          {
            opacity: 0,
            x: 80,
            rotation: 5,
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-slide-right",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animación para imágenes con efecto zoom
        gsap.default.fromTo(
          ".gsap-zoom",
          {
            opacity: 0,
            scale: 0.7,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-zoom",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animación para tarjetas con efecto flotante
        gsap.default.fromTo(
          ".gsap-float",
          {
            opacity: 0,
            y: 40,
            rotationX: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".gsap-float",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animación para el hero con efecto parallax
        gsap.default.to(".hero-bg", {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    })
  }, [])
}

// Componente de carrusel mejorado
function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image src={image || "/placeholder.svg"} alt={`Rescate ${index + 1}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm border-0 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm border-0 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function OesteGatitos() {
  useGSAPAnimations()

  const rescueImages = [
    "/placeholder.svg?height=320&width=480",
    "/placeholder.svg?height=320&width=480",
    "/placeholder.svg?height=320&width=480",
    "/placeholder.svg?height=320&width=480",
    "/placeholder.svg?height=320&width=480",
  ]

  const colonyImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-white/95 via-orange-50/95 to-pink-50/95 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-orange-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Paw className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Oeste Gatitos
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#inicio" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Inicio
              </a>
              <a
                href="#nosotros"
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium"
              >
                Nosotros
              </a>
              <a
                href="#rescates"
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium"
              >
                Rescates
              </a>
              <a
                href="#colonia"
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium"
              >
                Colonia
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section relative py-32 px-4 overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="gsap-fade-up">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Salvando Vidas Felinas
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Somos un grupo de amigas dedicadas al rescate, cuidado y protección de gatitos en situación de
              vulnerabilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="mr-3 h-6 w-6" />
                Conoce Nuestros Rescates
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Visita Nuestra Colonia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-20 px-4 bg-gradient-to-r from-white/80 via-orange-50/80 to-pink-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              ¿Quiénes Somos?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="gsap-slide-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Somos un grupo de amigas apasionadas por el bienestar animal que decidimos unir fuerzas para hacer la
                diferencia en la vida de los gatitos más vulnerables de nuestra comunidad.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Comenzamos rescatando gatitos abandonados y heridos, y poco a poco fuimos creciendo hasta convertirnos
                en una pequeña organización dedicada al rescate, rehabilitación y búsqueda de hogares amorosos.
              </p>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl shadow-lg">
                <Users className="h-10 w-10 text-orange-600" />
                <span className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Un equipo unido por el amor a los felinos
                </span>
              </div>
            </div>
            <div className="gsap-zoom">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Nuestro equipo"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50/80 via-purple-50/80 to-orange-50/80">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="gsap-slide-left bg-gradient-to-br from-white/90 to-orange-50/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Nuestra Misión
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Rescatar, rehabilitar y encontrar hogares amorosos para gatitos en situación de abandono o peligro,
                  promoviendo la tenencia responsable y la esterilización para controlar la sobrepoblación felina.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-slide-right bg-gradient-to-br from-white/90 to-pink-50/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Nuestra Visión
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ser reconocidas como una organización líder en el rescate felino, creando una comunidad donde todos
                  los gatos tengan la oportunidad de vivir una vida digna, saludable y llena de amor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestros Rescates */}
      <section id="rescates" className="py-20 px-4 bg-gradient-to-r from-white/80 via-pink-50/80 to-purple-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Nuestros Rescates
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cada gatito tiene una historia única de superación y amor
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="gsap-zoom mb-12">
              <Carousel images={rescueImages} />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gsap-float bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h5 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    150+
                  </h5>
                  <p className="text-gray-700 font-medium">Gatitos Rescatados</p>
                </CardContent>
              </Card>
              <Card className="gsap-float bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h5 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    120+
                  </h5>
                  <p className="text-gray-700 font-medium">Adopciones Exitosas</p>
                </CardContent>
              </Card>
              <Card className="gsap-float bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Paw className="h-10 w-10 text-white" />
                  </div>
                  <h5 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    30+
                  </h5>
                  <p className="text-gray-700 font-medium">En Cuidado Temporal</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Nuestras Recomendaciones
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Consejos esenciales para el cuidado responsable de gatitos rescatados
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gsap-float bg-gradient-to-br from-white/90 to-orange-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 text-sm font-medium">
                  Alimentación
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Comida de Calidad</h5>
                <p className="text-gray-600 leading-relaxed">
                  Recomendamos alimento premium sin colorantes artificiales. Marcas como Royal Canin, Hills o Pro Plan
                  son excelentes opciones.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-float bg-gradient-to-br from-white/90 to-blue-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 text-sm font-medium">
                  Salud
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Esterilización</h5>
                <p className="text-gray-600 leading-relaxed">
                  La esterilización es fundamental para controlar la población y prevenir enfermedades. Consulta con tu
                  veterinario de confianza.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-float bg-gradient-to-br from-white/90 to-green-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 text-sm font-medium">
                  Cuidado
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Vacunación</h5>
                <p className="text-gray-600 leading-relaxed">
                  Mantén al día las vacunas: triple felina, leucemia y rabia. Un calendario de vacunación protege su
                  salud.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-float bg-gradient-to-br from-white/90 to-purple-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 text-sm font-medium">
                  Bienestar
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Enriquecimiento</h5>
                <p className="text-gray-600 leading-relaxed">
                  Proporciona juguetes, rascadores y espacios verticales. Los gatos necesitan estimulación mental y
                  física.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-float bg-gradient-to-br from-white/90 to-pink-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 text-sm font-medium">
                  Higiene
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Arenero Limpio</h5>
                <p className="text-gray-600 leading-relaxed">
                  Limpia el arenero diariamente y cámbialo completamente cada semana. Usa arena de buena calidad sin
                  perfume.
                </p>
              </CardContent>
            </Card>

            <Card className="gsap-float bg-gradient-to-br from-white/90 to-yellow-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-medium">
                  Emergencias
                </Badge>
                <h5 className="text-xl font-bold mb-4 text-gray-800">Veterinario 24h</h5>
                <p className="text-gray-600 leading-relaxed">
                  Ten siempre a mano el contacto de una clínica veterinaria de emergencias. La atención rápida puede
                  salvar vidas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Colonia de Gatos */}
      <section id="colonia" className="py-20 px-4 bg-gradient-to-r from-white/80 via-purple-50/80 to-pink-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Nuestra Colonia
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un hogar seguro donde cuidamos con amor a más de 25 gatitos
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-slide-left">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ubicación y Cuidado
              </h4>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cuidamos una colonia de gatos en el barrio oeste de la ciudad. Aquí proporcionamos alimentación diaria,
                atención veterinaria y refugio seguro para más de 25 gatos que han hecho de este lugar su hogar.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-800 font-medium">Barrio Oeste - Zona Segura</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                  <Heart className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-800 font-medium">Alimentación diaria garantizada</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                  <Star className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-800 font-medium">Atención veterinaria regular</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <MapPin className="mr-3 h-5 w-5" />
                Ver Ubicación
              </Button>
            </div>
            <div className="gsap-slide-right">
              <div className="grid grid-cols-2 gap-6">
                {colonyImages.map((image, index) => (
                  <div key={index} className={`gsap-zoom ${index === 0 ? "col-span-2" : ""}`}>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Colonia ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="gsap-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Paw className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Oeste Gatitos
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Dedicadas al rescate y cuidado de gatitos en situación de vulnerabilidad. Cada vida felina importa y
                merece una segunda oportunidad.
              </p>
            </div>

            <div className="gsap-fade-up">
              <h5 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Contacto
              </h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <Phone className="h-6 w-6 text-orange-400" />
                  <span className="text-gray-200">+54 9 11 1234-5678</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <Instagram className="h-6 w-6 text-pink-400" />
                  <span className="text-gray-200">@oestegatitos</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-200">Zona Oeste, Buenos Aires</span>
                </div>
              </div>
            </div>

            <div className="gsap-fade-up">
              <h5 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cómo Ayudar
              </h5>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-pink-400" />
                  Adopta un gatito
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-orange-400" />
                  Dona alimento o medicamentos
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-purple-400" />
                  Comparte nuestras publicaciones
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-blue-400" />
                  Voluntariado en la colonia
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-green-400" />
                  Hogar de tránsito temporal
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2024 Oeste Gatitos. Hecho con ❤️ para nuestros amigos felinos.</p>
          </div>
        </div>
      </footer>

      {/* Botones Flotantes */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => window.open("https://wa.me/5491112345678", "_blank")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => window.open("https://instagram.com/oestegatitos", "_blank")}
        >
          <Instagram className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
