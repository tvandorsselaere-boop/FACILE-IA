import { Header } from "@/components/Header"
import { LabContent } from "@/components/sections/LabContent"

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <LabContent />
      </main>
    </>
  )
}
