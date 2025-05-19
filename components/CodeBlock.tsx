"use client"

import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="absolute right-2 top-2 z-10" onClick={copyToClipboard}>
        <Copy className="h-4 w-4 mr-2" />
        {copied ? "Copiado!" : "Copiar"}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: "0.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
