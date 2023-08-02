import Agende from "@/components/Agende";
import Avaliaçao from "@/components/Avaliaçao";
import Contato from "@/components/Contato";
import Depoimento from "@/components/Depoimento";
import Equipe from "@/components/Equipe";
import Header from "@/components/Header";
import Imoveis from "@/components/Imoveis";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />

      <Equipe/>

      <Imoveis/>

      <Agende/>

      <Avaliaçao/>

      <Depoimento/>

      <Contato/>
    </section>
  );
}
