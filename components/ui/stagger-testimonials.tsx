"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial: "Serviço impecável! Acabaram com as baratas em apenas uma aplicação.",
    by: "Altamir, Cuiabá",
    imgSrc: "/images/altamir.png",
  },
  {
    tempId: 1,
    testimonial: "Equipe profissional e produtos sem cheiro forte. Recomendo!",
    by: "Luciana, Várzea Grande",
    imgSrc: "/images/luciana.png",
  },
  {
    tempId: 2,
    testimonial: "Atendimento rápido salvou minha empresa. Problema resolvido rapidamente!",
    by: "Danilo, Cuiabá",
    imgSrc: "/images/danilo.png",
  },
  {
    tempId: 3,
    testimonial: "Melhor dedetizadora da região! Preço justo e resultado garantido.",
    by: "Márcia, Várzea Grande",
    imgSrc: "/images/marcia.png",
  },
  {
    tempId: 4,
    testimonial: "Acabaram com os cupins que estavam destruindo minha casa. Excelente trabalho!",
    by: "Sérgio, Cuiabá",
    imgSrc: "/images/sergio.png",
  },
  {
    tempId: 5,
    testimonial: "Produtos seguros para meus pets. Fiquei muito tranquila!",
    by: "Juliana, Várzea Grande",
    imgSrc: "/images/juliana.png",
  },
  {
    tempId: 6,
    testimonial: "Resolveram meu problema com escorpiões de forma definitiva. Muito obrigado!",
    by: "Marina, Cuiabá",
    imgSrc: "/images/marina.png",
  },
  {
    tempId: 7,
    testimonial: "Dedetização perfeita no meu restaurante. Aprovado pela vigilância!",
    by: "Diego, Cuiabá",
    imgSrc: "/images/diego.png",
  },
  {
    tempId: 8,
    testimonial: "Atendimento rápido e eficiente. Voltarei a contratar com certeza!",
    by: "Sueli, Várzea Grande",
    imgSrc: "/images/sueli.png",
  },
  {
    tempId: 9,
    testimonial: "Eliminaram os ratos do meu condomínio. Equipe muito educada!",
    by: "Euclides, Cuiabá",
    imgSrc: "/images/euclides.png",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer backdrop-blur-md p-8 transition-all duration-500 ease-in-out rounded-xl",
        isCenter
          ? "z-10 bg-white text-[#333333] border-2 border-[#2E7D32] shadow-xl"
          : "z-0 bg-white/80 text-[#666666] border-2 border-[#E0E0E0] hover:border-[#2E7D32]/30",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 12px 24px rgba(46, 125, 50, 0.15)" : "0px 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#2E7D32]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-[#F5F5F5] object-cover object-top rounded"
        style={{
          boxShadow: "3px 3px 0px rgba(46, 125, 50, 0.1)",
        }}
      />
      <h3
        className={cn("text-base sm:text-xl font-medium leading-relaxed", isCenter ? "text-[#333333]" : "text-[#666666]")}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-[#2E7D32]" : "text-[#666666]",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-[#F5F5F5]" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-lg",
            "bg-white backdrop-blur-md border-2 border-[#E0E0E0] hover:bg-[#F5F5F5] hover:border-[#2E7D32] text-[#666666] hover:text-[#2E7D32]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]",
          )}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-lg",
            "bg-white backdrop-blur-md border-2 border-[#E0E0E0] hover:bg-[#F5F5F5] hover:border-[#2E7D32] text-[#666666] hover:text-[#2E7D32]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]",
          )}
          aria-label="Próximo depoimento"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
