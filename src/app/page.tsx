import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto w-full">
      <Header />

      <div className="h-screen bg-lime-950 flex items-center justify-around">
        <div className="flex flex-col ">
          <h2 className="text-7xl text-gray-100  p-8">
            Conheça
            <br /> nossa equipe
          </h2>

          <div className="text-zinc-50 p-8">
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
          <div className="bg-zinc-400 p-28"></div>
          <div className="bg-zinc-400 p-28"></div>
          <div className="bg-zinc-400 p-28"></div>
          <div className="bg-zinc-400 p-28"></div>
        </div>
      </div>

      <div className="h-screen">
        <div>
          <h2 className="text-6xl pt-10">Novos imoveis</h2>
        </div>
        <div></div>
      </div>

      <div className="h-screen bg-zinc-950 text-white">
        <div>
          <h2 className="text-6xl pt-10">Agende uma Visita</h2>
        </div>
      </div>

      <div className="h-screen bg-lime-950 text-white">
        <div>
          <h2 className="text-6xl p-8">
            Por que trabalhar <br /> conosco
          </h2>
        </div>
      </div>

      <div className="h-screen p-8">
        <div>
          <h2 className="text-6xl">Depoimento</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-20">

          <div className="p-6 border space-y-4">
            <p className="leading-relaxed ">
              Aumente a credibilidade do seu produto ou serviço inserindo
              depoimentos dos seus clientes. Todo mundo adora recomendações,
              então o depoimento de outros clientes é inestimável.
            </p>
            <p>- Jean e Juliana Medeiros</p>
          </div>

          <div className="p-6 border space-y-4">
            <p className="leading-relaxed ">
              Aumente a credibilidade do seu produto ou serviço inserindo
              depoimentos dos seus clientes. Todo mundo adora recomendações,
              então o depoimento de outros clientes é inestimável. Aumente a
              credibilidade do seu produto ou serviço inserindo depoimentos dos
              seus clientes.
            </p>
            <p>- Helena Pinheiro</p>
          </div>
          
          <div className="p-6 border space-y-4">
            <p className="leading-relaxed ">
              Aumente a credibilidade do seu produto ou serviço inserindo
              depoimentos dos seus clientes.
            </p>
            <p>- Roberto Gusmão</p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-zinc-950 text-white p-8">
        <div>
          <h2 className="text-6xl">
            Tem duvidas <br /> Entre em Contato
          </h2>
        </div>

        <div className="flex items-center space-x-4 pt-20">
          <Image
            src="/reuniao.jpg"
            alt="reuniao"
            width={700}
            height={200}
            className="grayscale"
          />

          <div className="space-y-8 p-4">
            <div>
              <p className="text-xl">Telefone</p>
              <p>00 1234-5678</p>
            </div>
            <div>
              <p className="text-xl">E-mail</p>
              <p>negocio@email.com</p>
            </div>
            <div>
              <p className="text-xl">Social</p>
              <p>@social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
