"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

const links = [
  { name: "Início", href: "início" },
  { name: "Sobre Nós", href: "sobre-nós" },
  { name: "Serviços", href: "serviços" },
  { name: "Galeria", href: "galeria" },
  { name: "Contato", href: "contato" },
];

export const Footer = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = matches ? 60 : 108;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-apple-700 text-white">
      <div className="max-w-screen-xl mx-auto w-full py-10 sm:py-20 px-8 flex flex-col gap-10">
        <div className="flex gap-10 flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-[160px] sm:w-[180px] h-14 sm:h-16">
              <Image
                src={"/logo-branco.png"}
                alt={"logo jrv"}
                fill
                className="aspect-video w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <a href="https://www.instagram.com">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/5511987654321">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.facebook.com">
                <AiOutlineFacebook size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-base sm:text-xl font-bold">Navague</h1>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li
                    className="text-sm hover:cursor-pointer"
                    key={link.name}
                    onClick={() => scrollToSection(`${link.href}`)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base sm:text-xl font-bold">Contato</h1>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <a href="https://www.google.com/maps">
                  <p className="text-sm hover:cursor-pointer">
                    Rua das Flores, 123 - São Paulo
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+551112345678">
                  <p className="text-sm hover:cursor-pointer">
                    +55 11 1234-5678
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:jrv@gmail.com">
                  <p className="text-sm hover:cursor-pointer">jrv@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-medium text-center">
            2024 @{" "}
            <a className="underline" href="https://github.com/guibleone">
              Guilherme Leone
            </a>
          </h1>
          <p className="text-xs text-center">
            Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o
            seu Deus, estará com você por onde você andar
          </p>
        </div>
      </div>
    </footer>
  );
};