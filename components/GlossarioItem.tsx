"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface GlossarioItemProps {
  termo: string
  definicao: string
}

const GlossarioItem: React.FC<GlossarioItemProps> = ({ termo, definicao }) => {
  const [expandido, setExpandido] = useState(false)

  return (
    <Card className="overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setExpandido(!expandido)}
      >
        <h3 className="font-semibold">{termo}</h3>
        {expandido ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      {expandido && (
        <CardContent className="pt-0 pb-4 border-t">
          <p className="text-muted-foreground">{definicao}</p>
        </CardContent>
      )}
    </Card>
  )
}

export default GlossarioItem
