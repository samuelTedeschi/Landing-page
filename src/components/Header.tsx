import Image from "next/image";

export default function Header() {
  return (
    <header className="h-screen">
      <div className="flex justify-between border-b border-b-zinc-900 m-8 pb-2">
        <p className="text-sm">Melhor imobiliaria do Brasil</p>
        <h2 className="font-bold text-lg">Grupo Philliper</h2>
        <div className="text-sm">Fale conosco</div>
      </div>

      <div className="float-right mr-8">
        <h1 className="text-6xl">
          Quer comprar ou <br /> vender um imóvel?
        </h1>
        <p className="mt-4 text-4xl">Voce veio ao lugar certo.</p>
      </div>

      <div className="m-8">
        <Image
          src="/"
          alt="casa"
          width={300}
          height={100}
          className="drop-shadow-lg grayscale object-fill w-[420px]"
        />
      </div>
    </header>
  );
}
