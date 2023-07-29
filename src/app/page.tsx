import Image from "next/image";

export default function Home() {
  return (
    <section>
      <header className="flex justify-between border-b border-b-zinc-900 m-8 pb-2">
        <p className="text-sm">Melhor imobiliaria do Brasil</p>
        <h2 className="font-bold text-lg">Grupo Philliper</h2>
        <div className="text-sm">Fale conosco</div>
      </header>
      <div className="justify-start ml-[800px]">
        <h1 className="text-6xl">Quer comprar ou <br/> vender um imóvel?</h1>
        <p className="mt-4 text-4xl">Voce veio ao lugar certo.</p>
      </div>
    </section>
  );
}
