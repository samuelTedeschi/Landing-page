export default function Imoveis(){
    return(
        <div className="h-screen">
        <div>
          <h2 className="text-6xl p-8">Novos imoveis</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center p-8 container mx-auto">
          <div>
            <div className="py-48 border bg-black bg-[url('https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center grayscale shadow-lg"></div>
            <div className="space-y-2 pt-2">
              <p className="text-sm font-light">Casa Terrea</p>
              <p className="font-semibold text-lg">Avenida Alegre, 123</p>
              <p>4 quartos| 2 banheiro| 2 vagas </p>
            </div>
          </div>
          <div>
            <div className=" py-48 border bg-black bg-[url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center grayscale shadow-lg"></div>
            <div className="space-y-2 pt-2">
              <p className="text-sm font-light">Casa Terrea</p>
              <p className="font-semibold text-lg">Avenida Alegre, 123</p>
              <p>4 quartos | 2 banheiro| 2 vagas </p>
            </div>
          </div>
          <div>
            <div className="py-48 border bg-black bg-[url('https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center grayscale shadow-lg"></div>
            <div className="space-y-2 pt-2">
              <p className="text-sm font-light">Casa Terrea</p>
              <p className="font-semibold text-lg">Avenida Alegre, 123</p>
              <p>4 quartos|2 banheiro| 2 vagas </p>
            </div>
          </div>
        </div>
      </div>
    )
}