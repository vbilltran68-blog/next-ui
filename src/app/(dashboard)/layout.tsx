import Layout from "@components/Layout"
import { PropsWithChildren } from "react"

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
