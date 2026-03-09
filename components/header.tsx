"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/95 shadow-lg border-b border-[#E0E0E0]"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <Image
              src="/images/img-26-logo-pragmato.png"
              alt="PragMato Logo"
              width={50}
              height={50}
              className="h-12 w-auto object-contain"
            />
            <span className={`text-xl font-bold transition-colors hidden sm:inline text-sidebar-border ${isScrolled ? "text-[#2E7D32]" : "text-white"}`}>
              PragMato
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2E7D32] hover:scale-105 ${
                  isScrolled ? "text-[#333333]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ShinyButton
              href="https://wa.me/556592275627?text=Solicito orçamento de dedetização!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Orçamento Grátis
            </ShinyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-[#333333]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-[#333333]" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 border-t ${isScrolled ? "border-[#E0E0E0]" : "border-white/20"}`}>
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-[#2E7D32] ${
                    isScrolled ? "text-[#333333]" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <ShinyButton
                href="https://wa.me/556592275627?text=Solicito orçamento de dedetização!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Orçamento Grátis
              </ShinyButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
