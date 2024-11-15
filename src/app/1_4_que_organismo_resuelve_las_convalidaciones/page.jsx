import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Link from "next/link";


export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">
        <p>Las convalidaciones recogidas expresamente en los <b>diferentes Anexos del</b> <Link className="text-blue-600 underline" href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274"> RD 1085/2020, de 9 de diciembre</Link> las resuelve la dirección del centro donde esté matriculado el alumno/a. Se <b>resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados.</b></p>
      
        <p>Aquellas solicitudes que acrediten para convalidar <b>una titulación universitaria o un título de FP1 o FP2</b> las resuelve el <b>Ministerio de Educación y Formación Profesional.</b> Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio. <b className="underline">En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</b></p>
      
      </div>
    </>
  );
}
