'use client'
import CadastroPrestadorForm from "@/components/cadastroPrestador";
import Header from "@/components/header";


export default function Home() {
  return (
    <main className="container">
      <Header/>
      <CadastroPrestadorForm/>
    </main>
  )
}
