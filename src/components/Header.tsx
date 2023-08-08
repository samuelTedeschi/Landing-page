export default function Header() {
  return (
    <header className="mx-auto w-full min-h-screen">
      <div className="flex justify-between border-b border-b-zinc-900 p-2 container mx-auto">
        <p className="text-sm">Melhor imobiliaria do Brasil</p>
        <h2 className="font-bold text-lg text-center">Grupo Philliper</h2>
        <div className="text-sm">Fale conosco</div>
      </div>

      <div className="pt-7 space-y-10 container mx-auto">
        <div>
          <h1 className="text-6xl font-semibold">
            Quer comprar ou vender um imóvel?
          </h1>
          <p className="text-4xl">Voce veio ao lugar certo.</p>
        </div>
        <div className="pb-3">
          <div className="border p-48 h-full bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')] bg-cover bg-center grayscale shadow-lg "></div>
        </div>
      </div>
    </header>
  );
}
