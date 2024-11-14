import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={16} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
