"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SplashScreen from "@/components/splash-screen"
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
  Car,
  PawPrintIcon as Paw,
} from "lucide-react"


// Componente de carrusel
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
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function OesteGatitos() {
  const [showSplash, setShowSplash] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    if (!showSplash) {
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
    }
  }, [showSplash])

  const rescueImages = [
    "https://i.imgur.com/ruuD7jB.png",
    "https://i.imgur.com/SCi14Ab.png",
    "https://i.imgur.com/Z0YqRRU.png",
    "https://i.imgur.com/7QqutHs.png",
    "https://i.imgur.com/4dS67oP.png",
  ]

  const colonyImages = [
    "https://i.imgur.com/v7YuBpj.png",
    "https://i.imgur.com/d3gtDlu.png",
    "https://i.imgur.com/xxVpZXO.png",
  ]

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-white/95 via-orange-50/95 to-pink-50/95 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-orange-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="https://i.imgur.com/8gFuFe0.png"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  alt="Oeste Gatitos Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-cover transition-transform duration-300 hover:scale-110 hover: cursor-pointer"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Oeste Gatitos
              </h1>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex gap-6">
              <a href="#inicio" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Inicio
              </a>
              <a href="#nosotros" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Nosotros
              </a>
              <a href="#rescates" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Rescates
              </a>
              <a href="#colonia" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Colonia
              </a>
              <a href="#recorridos" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Recorridos
              </a>
              <a href="#castraciones" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Castraciones
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium">
                Contacto
              </a>
            </nav>

            {/* Botón Hamburguesa Mobile */}
            <button
              className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        {isMobileMenuOpen && (
          <div className="bg-white w-80 h-full ml-auto shadow-2xl border-l border-orange-200 mobile-menu-slide" onClick={(e) => e.stopPropagation()}>    <div className="bg-white w-80 h-full ml-auto shadow-2xl border-l border-orange-200" onClick={(e) => e.stopPropagation()}>
            <div className="p-8 pt-14">
              {/* Botón de cerrar */}
              <button
                className="absolute top- right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >

              </button>

              <nav className="flex flex-col gap-4">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#nosotros", label: "Nosotros" },
                  { href: "#rescates", label: "Rescates" },
                  { href: "#colonia", label: "Colonia" },
                  { href: "#recorridos", label: "Recorridos" },
                  { href: "#castraciones", label: "Castraciones" },
                  { href: "#contacto", label: "Contacto" }
                ].map((item) => (
                  <button
                    key={item.href}
                    className="text-left text-xl font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 py-3 border-b border-gray-200 hover:border-orange-400 hover:bg-orange-50 px-2 rounded"
                    onClick={() => {
                      if (item.href === "#inicio") {
                        // Para inicio, ir al top de la página
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      } else {
                        // Para las demás secciones, usar el comportamiento normal
                        const element = document.querySelector(item.href) as HTMLElement | null;
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.offsetTop;
                          const offsetPosition = elementPosition - headerOffset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

            </div>
          </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section relative py-32 px-4 overflow-hidden" style={{
        backgroundImage: "url('https://i.imgur.com/EeBnXUs.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="gsap-fade-up">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Invisibles a la vista
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              "Ahí, en el margen, viven silenciosos y olvidados. Pero cada gato callejero tiene una historia que vale la pena contar… y salvar."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  window.open("https://link.mercadopago.com.ar/oestegatitoss", "_blank");
                }}
              >

                <Image
                  src="https://i.imgur.com/FtP83BE.png"
                  alt="Mercado Pago Logo"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                Realizar Una Donación
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const lat = -34.64869;
                  const lng = -58.61637;

                  // Abrir Google Maps en una nueva pestaña
                  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
                }}
              >
                <MapPin className="mr-3 h-6 w-6" />
                Ubicación De La Colonia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-20 px-4 bg-gradient-to-r from-white/80 via-orange-50/80 to-pink-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent pt-2 pb-2 pr-1">
              ¿Quiénes Somos?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="gsap-slide-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Somos Nati, Juli y Mai, fundadoras de esta pequeña organización. Nos conocimos por la misma voluntad de ayudar a los gatitos que se encuentran en situación de vulnerabilidad
                y abandono. Desde hace varios años cada una sintió el interés de ayudar a su manera pero en 2023 decidimos unir fuerzas y crear Oeste Gatitos
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Con la suma de nuevas tareas como traslados, cuidados y castraciones, sumamos a nuevos integrantes como Virgi, Lean y Yanel, que contribuyeron al crecimiento
                y fortalecimiento de este grupo.
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
                src="https://i.imgur.com/hbMZvQS.png"
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
                    +150
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
                    +120
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
                    +15
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
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent px-1 py-1">
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
              Un hogar seguro donde cuidamos con amor a más de 40 gatitos
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-slide-left">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ubicación y Cuidado
              </h4>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cuidamos una colonia de gatos en Boatti al 46, en barrio oeste de Morón. Aquí proporcionamos alimentación diaria,
                atención veterinaria y refugio seguro para más de 40 gatos que han hecho de este lugar su hogar.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-800 font-medium">Zona Oeste - Morón</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                  <Heart className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-800 font-medium">Alimentación diaria garantizada</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                  <Star className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-800 font-medium">Seguimiento personalizado</span>
                </div>
              </div>
              <Button
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const lat = -34.64869;
                  const lng = -58.61637;

                  // Abrir Google Maps en una nueva pestaña
                  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
                }}
              >
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

      {/* Recorridos de Alimentación */}
      <section id="recorridos" className="py-20 px-4 bg-gradient-to-br from-orange-50/80 via-yellow-50/80 to-pink-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Ellos Nos Esperan
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cada día recorremos las calles de Morón llevando amor y alimento a los gatitos que nos esperan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-slide-left">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Nuestra Misión Diaria
              </h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Todos los días salimos a recorrer las calles de Morón con bolsas llenas de alimento.
                Conocemos cada rincón donde nos esperan nuestros amigos.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Sin embargo, no nos deja conformes que vivan en la calle y su destino sea incierto, por eso buscamos personas que quieran transitar para que la espera de una familia sea en un lugar digno</strong>
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Paw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Horarios Fijos</h5>
                    <p className="text-gray-600">Tarde: 15:00 HS | Noche: 21:00 HS</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Zona de Cobertura</h5>
                    <p className="text-gray-600">Morón: Rivadavia a Pellegrini (100-500)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Gatitos Alimentados</h5>
                    <p className="text-gray-600">Más de 40 gatitos diariamente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gsap-slide-right">
              <div className="bg-gradient-to-br from-white/90 to-orange-50/90 p-8 rounded-2xl shadow-2xl">
                <h4 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Mapa de Recorridos - Morón
                </h4>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Cada punto representa un lugar donde los gatitos nos esperan fielmente
                  </p>
                </div>

                {/* Mapa personalizado */}
                <div className="relative w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden border-4 border-orange-200">
                  {/* Calles principales */}
                  <div className="absolute inset-0">
                    {/* Rivadavia (horizontal superior) */}
                    <div className="absolute top-16 left-0 right-0 h-3 bg-gray-400 opacity-80"></div>
                    <div className="absolute top-12 left-4 text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded">
                      Av. Rivadavia
                    </div>

                    {/* Mitre (horizontal medio) */}
                    <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-400 opacity-80 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded">
                      Mitre
                    </div>

                    {/* Pellegrini (horizontal inferior) */}
                    <div className="absolute bottom-16 left-0 right-0 h-3 bg-gray-400 opacity-80"></div>
                    <div className="absolute bottom-12 left-4 text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded">
                      Pellegrini
                    </div>

                    {/* Calles verticales */}
                    <div className="absolute top-0 bottom-0 left-20 w-2 bg-gray-300 opacity-60"></div>
                    <div className="absolute top-0 bottom-0 left-32 w-2 bg-gray-300 opacity-60"></div>
                    <div className="absolute top-0 bottom-0 right-32 w-2 bg-gray-300 opacity-60"></div>
                    <div className="absolute top-0 bottom-0 right-20 w-2 bg-gray-300 opacity-60"></div>

                    {/* Números de calles */}
                    <div className="absolute top-2 left-16 text-xs font-medium text-gray-600 bg-white/70 px-1 rounded">
                      Yatay
                    </div>
                    <div className="absolute top-2 left-28 text-xs font-medium text-gray-600 bg-white/70 px-1 rounded">
                      Boatti
                    </div>
                    <div className="absolute top-2 right-28 text-xs font-medium text-gray-600 bg-white/70 px-1 rounded">
                    </div>
                    <div className="absolute top-2 right-16 text-xs font-medium text-gray-600 bg-white/70 px-1 rounded">

                    </div>
                  </div>

                  {/* Marcadores de gatitos */}
                  <div className="absolute top-24 left-24">
                    <div className="relative group cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Paw className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        al 200
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-32 right-28">
                    <div className="relative group cursor-pointer">
                      <div
                        className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <Paw className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        al 300
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-28 left-36">
                    <div className="relative group cursor-pointer">
                      <div
                        className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                        style={{ animationDelay: "1s" }}
                      >
                        <Paw className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        al 400
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-40 left-40">
                    <div className="relative group cursor-pointer">
                      <div
                        className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                        style={{ animationDelay: "1.5s" }}
                      >
                        <Paw className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        al 500
                      </div>
                    </div>
                  </div>

                  {/* Ruta de recorrido */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 96 96 Q 150 120 280 128 Q 320 140 144 160 Q 120 180 160 160"
                      stroke="url(#routeGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Leyenda */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Paw className="h-2 w-2 text-white" />
                      </div>
                      <span className="text-xs text-gray-700">Puntos de Alimentación</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded"></div>
                      <span className="text-xs text-gray-700">Ruta de Recorrido</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    ¿Te gustaría darles un techo hasta encontrar su familia soñada?
                  </p>
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const phone = "5491124861530";
                      const message = "Hola Estoy interesado en transitar, podrías darme mas información?";
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
                    }}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Quiero Transitar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Castraciones */}
      <section id="castraciones" className="py-20 px-4 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80">
        <div className="container mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Programa de Castraciones
            </h3>
            <p className="textext-xl text-gray-700 max-w-3xl mx-auto">
              Éste proceso es llevado a cabo por Yanel, quien coordina de forma eficáz la logística para que tanto los gatitos rescatados como a los que se estan transitando
              sean castrados en el centro veterinario "Zoonosis" de Morón
            </p>
          </div>

          {/* Video Section */}
          <div className="gsap-zoom mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white/90 to-blue-50/90 p-8 rounded-2xl shadow-2xl">
                <h4 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  En Zoonosis, La Castración Es Gratuita
                </h4>

                {/* Video Container */}
                <div className="relative w-full max-w-sm mx-auto h-96 md:h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg mb-6">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    id="castration-video"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%20de%20WhatsApp%202025-05-30%20a%20las%2012.03.47_923fdb22-8UFW693w8jOPFmSKsqfeQDjLHnDSWb.mp4" type="video/mp4" />
                  </video>

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-3">
                    <Button
                      size="icon"
                      className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
                      onClick={() => {
                        const video = document.getElementById('castration-video') as HTMLVideoElement;
                        if (video) {
                          video.muted = !video.muted;
                        }
                      }}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.5 13.5H2a1 1 0 01-1-1V7.5a1 1 0 011-1h2.5l3.883-3.316a1 1 0 011.617.816zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    </Button>
                    <Button
                      size="icon"
                      className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
                      onClick={() => {
                        const video = document.getElementById('castration-video') as HTMLVideoElement;
                        if (video) {
                          if (video.paused) {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </div>

                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  En este video vas a encontrar información con ubicación fechas y horarios disponibles.
                </p>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16 mt-12">
              <div className="gsap-slide-left">
                <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
                  ¿Como Nos Organizamos?
                </h4>

                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-white/90 to-blue-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                          <Car className="h-6 w-6 text-white" />
                        </div>
                        <h5 className="text-xl font-bold text-gray-800">Organizar el traslado</h5>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Primero se organiza su traslado. Si está en la calle o en la colonia, se lo lleva con cuidado a una jaula. En caso de que esté en tránsito, se coordina el procedimiento con su cuidador.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-white/90 to-green-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <h5 className="text-xl font-bold text-gray-800">Sacar turno</h5>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Se solicita un turno en el centro veterinario Zoonosis, respetando los pasos necesarios.
                        Se asegura el ayuno previo obligatorio para garantizar una intervención segura. Todo el proceso se lleva adelante con responsabilidad y compromiso.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-white/90 to-purple-50/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h5 className="text-xl font-bold text-gray-800">Devolución y recuperación</h5>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Finalizada la castración, el gato regresa a su cuidador, o la colonia para su recuperación. Desde ese momento, se inicia una campaña intensa para encontrarle un hogar a aquellos gatos dósiles.
                        En el caso de los ferales, siguen viviendo en la colonia pero evitamos la sobrepoblación de la misma.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="gsap-slide-right">
                <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-4">
                  Centro Veterinario Zoonosis
                </h4>

                {/* Photo Gallery */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="gsap-zoom">
                    <Image
                      src="https://i.imgur.com/c2c1hK9.png"
                      alt="Zoonosis Morón 1"
                      width={300}
                      height={200}
                      className="rounded-xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="gsap-zoom">
                    <Image
                      src="https://i.imgur.com/VOjuJS8.png"
                      alt="Zoonosis Morón 2"
                      width={300}
                      height={200}
                      className="rounded-xl shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="gsap-zoom col-span-2">
                    <Image
                      src="https://i.imgur.com/8lJO8vP.png"
                      alt="Zoonosis Morón 3"
                      width={600}
                      height={250}
                      className="rounded-xl shadow-lg w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Statistics */}
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <div className="text-left">
                      <h5 className="text-xl font-bold text-gray-800">Ubicación</h5>
                      <p className="text-lg text-gray-700">Curupaytí 1129, Morón</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div className="text-left">
                      <h5 className="text-xl font-bold text-gray-800">Contacto</h5>
                      <p className="text-lg text-gray-700">4645-2624</p>
                    </div>
                  </div>
                </div>
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
                  <Image
                    src="https://i.imgur.com/8gFuFe0.png"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                    alt="Oeste Gatitos Logo"
                    width={50}
                    height={50}
                    className="rounded-full object-cover transition-transform duration-300 hover:scale-110 hover: cursor-pointer"
                    priority
                  />
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
                  <span className="text-gray-200">+54 9 11 3824-1728</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <Instagram className="h-6 w-6 text-pink-400" />
                  <span className="text-gray-200">@oeste.gatitos</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-200">Morón, Buenos Aires</span>
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
            <p className="text-gray-400 text-lg">© 2025 Oeste Gatitos. Hecho con ❤️ para nuestros amigos felinos.</p>
          </div>
        </div>
      </footer>

      {/* Botones Flotantes */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => window.open("https://wa.me/5491138241728", "_blank")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => window.open("https://instagram.com/oeste.gatitos", "_blank")}
        >
          <Instagram className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
