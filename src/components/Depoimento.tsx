export default function Depoimento(){
    return(
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
    )
}