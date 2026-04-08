"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InfiniteRibbonProps {
  repeat?: number
  duration?: number
  reverse?: boolean
  rotation?: number
  children: React.ReactNode
  className?: string
}

export function InfiniteRibbon({
  repeat = 10,
  duration = 20,
  reverse = false,
  rotation = 0,
  children,
  className,
}: InfiniteRibbonProps) {
  const animationClass = reverse
    ? "animate-infinite-ribbon-reverse"
    : "animate-infinite-ribbon"

  return (
    <div
      className={cn(
        "max-w-full overflow-hidden py-4 text-xs font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={cn("flex whitespace-nowrap", animationClass)}
        style={{ "--ribbon-duration": `${duration}s` } as React.CSSProperties}
      >
        {Array.from({ length: repeat }, (_, index) => (
          <span key={index} className="mr-12 inline-flex items-center select-none gap-12">
            {children}
          </span>
        ))}
      </div>
    </div>
  )
}
