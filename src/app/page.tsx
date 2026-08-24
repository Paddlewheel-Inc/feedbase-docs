"use client"

import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Roadmap } from "@/components/roadmap"
import { SelfHost } from "@/components/selfhost"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { useState } from "react"

export default function Page() {

  return (
    <div className="min-h-screen text-foreground">
      <main>
        <Hero />
        <Stats />
        <Features />
        <Roadmap />
        <SelfHost />
        <Faq />
        <Cta />
      </main>
    </div>
  )
}
