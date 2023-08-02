export default function Header() {
  return (
    <header className="h-screen mx-auto w-full p-8 ">
      <div className="flex justify-between border-b border-b-zinc-900 pb-2">
        <p className="text-sm">Melhor imobiliaria do Brasil</p>
        <h2 className="font-bold text-lg">Grupo Philliper</h2>
        <div className="text-sm">Fale conosco</div>
      </div>

      <div className="pt-7 space-y-8">
        <div>
          <h1 className="text-6xl font-bold text-center">
            Quer comprar ou vender um imóvel?
          </h1>
          <p className="text-4xl text-center">Voce veio ao lugar certo.</p>
        </div>
        <div>
          <div className="border p-48 bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')] bg-cover bg-center grayscale shadow-lg "></div>
        </div>
      </div>
    </header>
  );
}
