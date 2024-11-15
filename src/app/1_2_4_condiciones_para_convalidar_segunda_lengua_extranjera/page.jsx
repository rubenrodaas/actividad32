import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={9} />

      <div className="flex flex-col gap-4">

      <p>Para poder convalidar el módulo de Segunda Lengua Extranjera debe aportarse siempre estudios cursados y superados en la misma lengua que se desee convalidar. Es necesario acreditar alguna de las siguientes condiciones:</p>

      </div>
    </>
  );
}
