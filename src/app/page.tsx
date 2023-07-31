import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />

      <div className="h-screen bg-lime-950 flex justify-between">
        <div className="flex flex-col space-y-60">
          <h2 className="text-6xl text-gray-100 py-10 px-8">
            Conheça
            <br /> nossa equipe
          </h2>

          <div className="text-zinc-50 m-8 ">
            <div className="flex space-x-10">
              <div>
                <h3 className="text-xl">Joao Filipe</h3>
                <p className="text-sm">Fundador / Corretor</p>
              </div>
              <div>
                <h3 className="text-xl">Lucas Silva</h3>
                <p className="text-sm">Fundador / Corretor</p>
              </div>
            </div>

            <div className="flex space-x-10 mt-10">
              <div>
                <h3 className="text-xl">Maria Ana</h3>
                <p className="text-sm">Corretora de imoveis</p>
              </div>
              <div>
                <h3 className="text-xl">Jessica Silva</h3>
                <p className="text-sm">Corretora de Imoveis</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 m-12">
          <div className="bg-zinc-400 p-28 rounded-lg"></div>
          <div className="bg-zinc-400 p-28 rounded-lg"></div>
          <div className="bg-zinc-400 p-28 rounded-lg"></div>
          <div className="bg-zinc-400 p-28 rounded-lg"></div>
        </div>
      </div>

      <div className="h-screen">
        <div>
          <h2 className="text-6xl pt-10">Novos imoveis</h2>
        </div>
        <div>

        </div>
      </div>

      <div className="h-screen bg-zinc-950 text-white">
        <div>
          <h2 className="text-6xl pt-10">Agende uma Visita</h2>
        </div>
      </div>

      <div className="h-screen bg-lime-950 text-white">
        <div>
          <h2 className="text-6xl pt-10">Por que trabalhar <br/> conosco</h2>
        </div>
      </div>

      <div className="h-screen">
        <div>
          <h2 className="text-6xl pt-10">Depoimento</h2>
        </div>
      </div>

      <div className="h-screen bg-zinc-950 text-white">
        <div>
          <h2 className="text-6xl pt-10">Tem duvidas <br/> Entre em Contato</h2>
        </div>
      </div>
  
    </section>
  );
}
