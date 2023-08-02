export default function Imoveis(){
    return(
        <div className="h-screen">
        <div>
          <h2 className="text-6xl p-8">Novos imoveis</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center p-8">
          <div>
            <div className="py-48 border bg-black"></div>
            <div>
              <p>Casa Terrea</p>
              <p>Avenida Alegre, 123</p>
              <p>4 quartos|2 banheiro|2vagas </p>
            </div>
          </div>
          <div>
            <div className="py-48 border bg-black"></div>
            <div>
              <p>Casa Terrea</p>
              <p>Avenida Alegre, 123</p>
              <p>4 quartos|2 banheiro|2vagas </p>
            </div>
          </div>
          <div>
            <div className="py-48 border bg-black"></div>
            <div>
              <p>Casa Terrea</p>
              <p>Avenida Alegre, 123</p>
              <p>4 quartos|2 banheiro|2vagas </p>
            </div>
          </div>
        </div>
      </div>
    )
}