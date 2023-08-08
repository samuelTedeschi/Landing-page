export default function Agende(){
    return(
        <div className="h-screen bg-zinc-950 text-white">
        <div>
          <h2 className="text-6xl p-8">Agende uma Visita</h2>
        </div>
        <div className="flex p-8 items-center space-x-10 container mx-auto">
          <div className="p-60 bg-slate-500 bg-[url('https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
          <div className="p-10">
            <p className="text-3xl">
              Destaque serviços ou produtos específicos aqui. Pode ser um
              serviço de avaliação de propriedade ou algo exclusivamente seu. Dê
              espaço para que brilhe aqui.
            </p>
            <button className="mt-20 text-3xl border-b pb-4 hover:text-green-700 hover:border-b-green-700">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    )
}