export default function Avaliaçao(){
    return(
        <div className="h-screen bg-lime-950 text-white">
        <div>
          <h2 className="text-7xl p-8">
            Por que trabalhar <br /> conosco
          </h2>
        </div>

        <div className="flex items-center justify-end container mx-auto ">
        

        <div className="flex flex-col p-8 ">
          <div className="flex space-x-6">
            <div className="p-8">
              <p className="text-8xl">N.º 1</p>
              <p className="text-md pt-4">A melhor imobiliária de <br/> Salgueiro entre 2022 e 2025</p>
            </div>
            <div className="p-8">
              <p className="text-8xl">+ de 18</p>
              <p className="text-md pt-4">Anos de experiência<br/> imobiliária</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="p-8">
              <p className="text-8xl">10</p>
              <p className="text-md pt-4">Corretores de imóveis<br/> credenciados</p>
            </div>
            <div className="p-8">
              <p className="text-8xl">R$ 1.000</p>
              <p className="text-md pt-4">Média de economia<br/> comprando conosco</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}