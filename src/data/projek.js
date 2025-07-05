import projek1 from "../assets/project-1.png"
import projek2 from "../assets/project-2.png"
import projek3 from "../assets/project-3.png"
import projek4 from "../assets/project-4.png"
import projek5 from "../assets/project-5.png"
import projek6 from "../assets/project-6.png"
import projek7 from "../assets/project-7.png"
import projek8 from "../assets/project-8.png"

import { SiReact, SiTailwindcss, SiVite, SiPython, SiNetlify, SiGooglesheets } from "react-icons/si";

export const projects = [
  {
    title: "POS Simpel",
    description: "Website Front-End Point Of Sales yang digunakan untuk sebuah kafe dengan data dummy.",
    image: projek8,
    link: "https://posposan.netlify.app/",
    color: "text-blue-700",
    tech: [SiReact, SiTailwindcss, SiVite, SiGooglesheets]
  },
  {
    title: "KopiSop",
    description: "Website landing page sederhana yang dibuat untuk menampilkan informasi tentang kedai kopi.",
    image: projek5,
    link: "https://kopisopp.netlify.app/",
    color: "text-amber-900",
    tech: [SiReact, SiTailwindcss, SiVite, SiNetlify]
  },
  {
    title: "Healthify",
    description: "Website untuk validasi berita/informasi seputar kesehatan berdasarkan artikel ilmiah.",
    image: projek6,
    link: "https://healthifyif.netlify.app/",
    color: "text-green-700",
    tech: [SiReact, SiTailwindcss, SiVite, SiNetlify]
  },
  {
    title: "Simulasi Cermin dan Lensa",
    description: "Program simulasi cermin dan lensa berdasarkan ilmu fisika menggunakan Python.",
    image: projek7,
    tech: [SiPython]
  },
  {
    title: "Portfolio Website",
    description: "Membuat website portfolio pribadi menggunakan React JS, Tailwind CSS dan Vite.",
    image: projek1,
    link: "https://adtyrdhon.netlify.app/",
    color: "text-blue-800",
    tech: [SiReact, SiTailwindcss, SiVite, SiNetlify]
  },
  {
    title: "Landing Page Website",
    description: "Berkolaborasi membuat website landing page sebuah acara menggunakan React JS, Tailwind CSS dan Vite.",
    image: projek2,
    link: "https://pesona23.vercel.app/",
    color: "text-yellow-700",
    tech: [SiReact, SiTailwindcss, SiVite]
  },
  {
    title: "Are You A Cat or Human?",
    description: "Implementasi sederhana Teachable Machine untuk mengidentifikasi objek berupa kucing atau manusia berdasarkan kamera pengguna.",
    image: projek3,
    link: "https://areyouacat.netlify.app/",
    color: "text-red-700",
    tech: [SiReact]
  },
  {
    title: "Prototype Monitoring Kualitas Udara",
    description: "Prototype sederhana untuk monitoring kualitas udara di pabrik semen yang ditampilkan melalui LCD dan peringatan suara.",
    image: projek4
    // No tech stack
  }
]
