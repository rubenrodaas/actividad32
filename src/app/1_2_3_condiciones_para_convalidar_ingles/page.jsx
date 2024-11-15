import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">

      <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>

      </div>
    </>
  );
}
