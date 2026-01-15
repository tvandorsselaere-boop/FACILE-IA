import { Header } from "@/components/Header"
import { LabContent } from "@/components/sections/LabContent"

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <LabContent />
      </main>
    </>
  )
}
