import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={7} />

      <div className="flex flex-col gap-4">

        <p>Para poder convalidar el módulo de <b>Empresa e Iniciativa Emprendedora</b> es necesario acreditar alguna de las siguientes condiciones:</p>
        <ItemLista>Tener <b>aprobado el módulo de Empresa e Iniciativa Emprendedora de otro ciclo formativo,</b> cualquiera que sea el grado, incluso en grados cruzados -medio o superior-.</ItemLista>
        <ItemLista>Tener <b>aprobado el módulo de Administración, gestión y comercialización en la pequeña empresa</b> (o con una denominación similar).</ItemLista>
        <ItemLista><b>Poseer el Título de Técnico en Gestión administrativa o Técnico superior en Administración y finanzas.</b></ItemLista>



      </div>
    </>
  );
}
