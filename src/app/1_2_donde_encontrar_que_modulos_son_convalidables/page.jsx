import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.2.- ¿Dónde encontrar qué módulos son convalidables?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={5} />

      <div className="flex flex-col gap-4">
        <p>Son dos los documentos que debes consultar:</p>
        <ItemLista>Por un lado, los diferentes Anexos del Real Decreto 1085/2020, de 9 de diciembre, por el que se establecen convalidaciones de módulos profesionales de los títulos de Formación Profesional del sistema educativo español y las medidas para su aplicación, y se modifica el Real Decreto 1147/2011, de 29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo. Aquí puedes consultar las tablas de convalidaciones del Real decreto 1085/2020, de 9 de diciembre (tablas de convalidación).</ItemLista>
      </div>
    </>
  );
}
