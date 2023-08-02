export default function Equipe(){
    return(
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
    )
}