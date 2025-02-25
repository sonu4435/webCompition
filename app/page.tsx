"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CoursesSection from "./components/CoursesSection"
import SkillsSection from "./components/SkillsSection"
import SubjectsSection from "./components/SubjectsSection"

// Import Locomotive Scroll type only (not the library itself)
import type LocomotiveScrollType from "locomotive-scroll"

export default function Home() {
  const [scrollInstance, setScrollInstance] = useState<LocomotiveScrollType | null>(null)

  useEffect(() => {
    let scroll: LocomotiveScrollType | null = null

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const container = document.querySelector("[data-scroll-container]") as HTMLElement | null
      if (!container) return

      scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true, breakpoint: 1024 },
      })

      setScrollInstance(scroll)
      console.log("Locomotive Scroll Initialized")
    }

    initLocomotiveScroll()

    return () => {
      if (scroll) {
        scroll.destroy()
        console.log("Locomotive Scroll Destroyed")
      }
    }
  }, [])

  return (
    <main data-scroll-container className="bg-[#ffff]">
      <Header />
      <div data-scroll-section>
        <HeroSection />
        <CoursesSection />
        <SkillsSection />
        <SubjectsSection />
      </div>
    </main>
  )
}