import Image from "next/image"

export default function Contato(){
    return(
        <div className="h-screen w-full bg-zinc-950 text-white p-8">
        <div>
          <h2 className="text-6xl">
            Tem duvidas <br /> Entre em Contato
          </h2>
        </div>

        <div className="flex items-center space-x-4 pt-20">
          <Image
            src="/reuniao.jpg"
            alt="reuniao"
            width={700}
            height={200}
            className="grayscale"
          />

          <div className="space-y-10 p-4">
            <div>
              <p className="text-4xl">Telefone</p>
              <p className="text-xl pt-2">00 1234-5678</p>
            </div>
            <div>
              <p className="text-4xl">E-mail</p>
              <p className="text-xl pt-2">negocio@email.com</p>
            </div>
            <div>
              <p className="text-4xl">Social</p>
              <p className="pt-2 text-xl">@social</p>
            </div>
          </div>
        </div>
      </div>
    )
}