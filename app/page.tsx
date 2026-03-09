"use client"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/header"
import Image from "next/image"
import { Hero } from "@/components/ui/hero-1"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Bug, Rat, Hammer, Building2, Building, Hospital, UtensilsCrossed, Phone, MessageCircle, MapPin, Clock, Mail, Shield, Award, Users, ThumbsUp } from "lucide-react"

export default function Page() {
  const whatsappNumber = "556592275627"
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const whatsappWithMessage = `${whatsappLink}?text=Solicito orçamento de dedetização!`

  return (
    <div>
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        eyebrow="Empresa em conformidade com a ANVISA"
        title="PragMato Dedetizadora"
        subtitle="Dedetização profissional em Cuiabá e Várzea Grande. Produtos certificados, equipe especializada e resultados garantidos."
        ctaLabel="(65) 9227-5627"
        ctaHref={whatsappWithMessage}
      />

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 tracking-tight">Nossos Serviços</h3>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Controle de pragas urbanas em Cuiabá e Várzea Grande
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Serviço 1 - Baratas */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Bug className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização de Baratas</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Eliminação completa de baratas com produtos aprovados pela ANVISA.
              </p>
            </div>

            {/* Serviço 2 - Ratos */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Rat className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização de Ratos</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Controle e eliminação de ratos com técnicas modernas e seguras.
              </p>
            </div>

            {/* Serviço 3 - Cupins */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Hammer className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização de Cupins</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Prevenção e controle contra cupins, preservando seu patrimônio.
              </p>
            </div>

            {/* Serviço 4 - Escorpiões */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <svg className="w-7 h-7 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização de Escorpiões</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Proteção contra escorpiões para sua família e seu ambiente.
              </p>
            </div>

            {/* Serviço 5 - Restaurantes */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <UtensilsCrossed className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização em Restaurantes</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Controle de pragas especializado para estabelecimentos alimentícios.
              </p>
            </div>

            {/* Serviço 6 - Empresas */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Building2 className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização em Empresas</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Soluções corporativas para manter seu ambiente de trabalho livre de pragas.
              </p>
            </div>

            {/* Serviço 7 - Condomínios */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Building className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização em Condomínios</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Proteção completa para áreas comuns e unidades residenciais.
              </p>
            </div>

            {/* Serviço 8 - Hospitais */}
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0E0E0] hover:border-[#2E7D32]/30 group">
              <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#2E7D32]/20 transition-colors border border-[#2E7D32]/20">
                <Hospital className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <h4 className="text-lg font-semibold text-[#333333] mb-3">Dedetização Hospitalar</h4>
              <p className="text-[#666666] text-sm leading-relaxed">
                Controle de pragas seguro para ambientes hospitalares e clínicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 tracking-tight">Por Que Escolher a PragMato?</h3>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Compromisso com qualidade, segurança e satisfação do cliente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Certificados ANVISA - Verde Limão */}
            <div className="bg-gradient-to-br from-[#A8D08D] to-[#8FBC6F] p-8 rounded-2xl card-hover-lift text-center flex flex-col items-center justify-center min-h-[300px] animate-float-up border border-[#A8D08D]/20 backdrop-blur-sm" style={{ boxShadow: '0 4px 12px rgba(168, 208, 141, 0.2)', animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 icon-container shadow-lg">
                <Award className="w-10 h-10 text-white drop-shadow-md" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3 tracking-tight">Certificados ANVISA</h4>
              <p className="text-[#555555] text-sm leading-relaxed">
                Produtos aprovados pela ANVISA e técnicos qualificados
              </p>
            </div>

            {/* Card 2 - Atendimento Rápido - Azul Escuro */}
            <div className="bg-gradient-to-br from-[#252D3B] to-[#1a2029] p-8 rounded-2xl card-hover-lift text-center flex flex-col items-center justify-center min-h-[300px] animate-float-up border border-white/10 backdrop-blur-sm" style={{ boxShadow: '0 4px 12px rgba(37, 45, 59, 0.3)', animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 icon-container shadow-lg">
                <Clock className="w-10 h-10 text-white drop-shadow-md" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Atendimento Rápido</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Estamos prontos para atender você rapidamente
              </p>
            </div>

            {/* Card 3 - Garantia de Serviço - Rosa Suave */}
            <div className="bg-gradient-to-br from-[#FFE9F0] to-[#FFD4E3] p-8 rounded-2xl card-hover-lift text-center flex flex-col items-center justify-center min-h-[300px] animate-float-up border border-[#FFE9F0]/30 backdrop-blur-sm" style={{ boxShadow: '0 4px 12px rgba(255, 233, 240, 0.4)', animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 icon-container shadow-lg">
                <Shield className="w-10 h-10 text-[#D81B60] drop-shadow-md" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3 tracking-tight">Garantia de Serviço</h4>
              <p className="text-[#555555] text-sm leading-relaxed">
                Todos os serviços com garantia de eficácia
              </p>
            </div>

            {/* Card 4 - Satisfação Garantida - Laranja */}
            <div className="bg-gradient-to-br from-[#FF7E29] to-[#E56A1F] p-8 rounded-2xl card-hover-lift text-center flex flex-col items-center justify-center min-h-[300px] animate-float-up border border-[#FF7E29]/20 backdrop-blur-sm" style={{ boxShadow: '0 4px 12px rgba(255, 126, 41, 0.3)', animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 icon-container shadow-lg">
                <ThumbsUp className="w-10 h-10 text-white drop-shadow-md" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Satisfação Garantida</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Produtos seguros para pessoas, pets e meio ambiente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 tracking-tight">Nosso Trabalho em Ação</h3>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Veja alguns dos nossos serviços de dedetização profissional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erde2-DVNmqFcrbJbupFBFi6NyZg7rZqeWYM.jpeg"
                alt="Dedetização Residencial"
                width={400}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6">Dedetização Residencial</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erde-1-k5gCN1ExJ3xTRV5Qe5tGKhxj0tZDfQ.jpeg"
                alt="Serviço Profissional"
                width={400}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6">Serviço Profissional</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erde-4-FNbpaGI5glEmEDNr48efslmfmNqit2.jpeg"
                alt="Controle de Pragas"
                width={400}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6">Controle de Pragas</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erde3-O9SIxYgjdIMO67nPcq1Ub3ufjqGaUg.jpeg"
                alt="Certificação ANVISA"
                width={400}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6">Certificação ANVISA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 tracking-tight">O Que Nossos Clientes Dizem</h3>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Veja os depoimentos de quem confia na PragMato para manter seus ambientes livres de pragas
            </p>
          </div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 tracking-tight">Nossa Localização</h3>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Atendemos Cuiabá e Várzea Grande com rapidez e eficiência
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509362025!2d-56.18492393750001!3d-15.601411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0a0f41a5d7b%3A0xa4c99e86be108f4a!2sCuiab%C3%A1%2C%20MT!5e0!3m2!1spt-BR!2sbr!4v1706900000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cuiabá, MT"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2E7D32]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Não Deixe as Pragas Tomarem Conta!</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Entre em contato agora e receba um orçamento gratuito. Atendemos Cuiabá e Várzea Grande.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <ShinyButton
              href="tel:+5565922756277"
              className="text-lg"
            >
              <Phone className="w-5 h-5" />
              (65) 9227-5627
            </ShinyButton>
            <ShinyButton
              href={whatsappWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#1B5E20] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/img-26-logo-pragmato.png"
                  alt="PragMato Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto object-contain text-left"
                />
                <h4 className="text-2xl font-bold text-white tracking-tight text-left">PragMato</h4>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Sua tranquilidade é nossa prioridade. Serviços profissionais de controle de pragas em Cuiabá e Várzea Grande.
              </p>
              <p className="text-[#FF9800] font-semibold text-sm">
                Empresa em conformidade com a ANVISA
              </p>
            </div>

            {/* Column 2 - Contact */}
            <div>
              <h5 className="text-lg font-bold mb-5 text-white text-left">Contato</h5>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3 hover:text-[#FF9800] transition-colors">
                  <Phone className="w-5 h-5 text-[#FF9800]" />
                  <a href="tel:+5565922756277" className="hover:underline">
                    (65) 9227-5627
                  </a>
                </li>
                <li className="flex items-center gap-3 hover:text-[#25d366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25d366]" />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF9800]" />
                  <span>Cuiabá - MT</span>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div className="text-left">
              <h5 className="text-lg font-bold mb-5 text-white text-left">Links Rápidos</h5>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#hero" className="hover:text-[#FF9800] transition-colors">Início</a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-[#FF9800] transition-colors">Serviços</a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#FF9800] transition-colors">Diferenciais</a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-[#FF9800] transition-colors">Depoimentos</a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Service Areas */}
            <div className="text-center">
              <h5 className="text-lg font-bold mb-5 text-white text-left">Áreas Atendidas</h5>
              <ul className="space-y-3 text-white/80 mb-6">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF9800]" />
                  Cuiabá - MT
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF9800]" />
                  Várzea Grande - MT
                </li>
              </ul>
              <ShinyButton
                href={whatsappWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                <Phone className="w-4 h-4" />
                Orçamento Grátis
              </ShinyButton>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-10 text-center text-white/70">
            <p>&copy; 2025 PragMato Dedetizadora. Todos os direitos reservados.</p>
            <p className="mt-2">
              Criado por{" "}
              <a 
                href="https://webmap.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FF9800] hover:text-[#FFB74D] transition-colors font-semibold"
              >
                WebStudio
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </div>
  )
}
