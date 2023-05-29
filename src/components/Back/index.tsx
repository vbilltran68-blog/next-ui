"use client"

import UnicodeIcon from "@components/UnicodeIcon"
import { useRouter } from "next/navigation"

type BackProps = { className: string }

const Back = ({ className }: BackProps) => {
  const router = useRouter()

  return (
    <div className={className} onClick={() => router.replace('/')}>
      <UnicodeIcon content="➜" rotateDeg={180} fontSize="16px" />
      back
    </div>
  )
}

export default Back
