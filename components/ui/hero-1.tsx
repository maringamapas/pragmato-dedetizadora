"use client"
import Image from "next/image"
import React from "react"

import { MessageCircle, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"
import { ShinyButton } from "@/components/ui/shiny-button"

interface HeroProps {
  eyebrow?: string
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

const services = [
  "Dedetização de Baratas",
  "Dedetização de Ratos",
  "Dedetização de Cupins",
  "Dedetização de Escorpiões",
  "Dedetização em Restaurantes",
  "Dedetização em Empresas",
  "Dedetização em Condomínios",
  "Dedetização Hospitalar",
]

export function Hero({
  eyebrow = "Atendimento Profissional",
  title,
  subtitle,
  ctaLabel = "Entre em Contato",
  ctaHref = "#",
}: HeroProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${formData.nome}. Telefone: ${formData.telefone}. Tenho interesse em: ${formData.servico}.`
    window.open(`https://wa.me/5565992275627?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section
      id="hero"
      className="relative mx-auto w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dedetizacao-mosquitos-o0JHwSsVCm22g1z2UpwqKetOORscp6.jpg"
          alt="Profissional de dedetização aplicando tratamento"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/95 via-[#2E7D32]/80 to-[#1B5E20]/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {eyebrow && (
              <div className="mb-8 animate-fade-in">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-primary-foreground">
              {title}
            </h1>

            <p className="animate-fade-in text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              {typeof subtitle === 'string' ? (
                <span dangerouslySetInnerHTML={{ __html: subtitle }} />
              ) : (
                subtitle
              )}
            </p>

            <div className="animate-fade-in flex flex-col sm:flex-row gap-4">
              <ShinyButton
                href="tel:+5565992275627"
                className="text-lg"
              >
                <Phone className="w-5 h-5" />
                (65) 99227-5627
              </ShinyButton>
              <ShinyButton
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </ShinyButton>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          
        </div>
      </div>
    </section>
  )
}
