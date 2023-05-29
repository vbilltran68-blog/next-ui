import PostLayout from "@components/PostLayout"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
  return <PostLayout>{children}</PostLayout>
}
