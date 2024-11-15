import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={13} />
      <div className="flex gap-4">
      <div className="flex flex-col gap-4">
      <p><strong>Salvo el módulo de Formación en Centros de Trabajo</strong> (las "prácticas"), <strong>la respuesta es no.</strong> En general, <strong>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral.</strong></p>
      
      <p>Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, debe acreditar la posesión de esas unidades de competencia bien mediante un <strong>certificado de profesionalidad</strong> o bien porque ha participado en un <Link className="text-blue-600 underline" href="http://todofp.es/acreditacion-de-competencias.html"> procedimiento de acreditación de competencias profesionales</Link> y así se lo han reconocido, <span classname="underline">no a través de un certificado de vida laboral.</span> <strong>Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación u otros documentos justificativos distintos de los indicados.</strong> Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).</p>
      
      <p>Por tanto, <b>las unidades de competencia debidamente acreditadas pueden ser aportadas para solicitar la convalidación de módulos profesionales según lo regulado en el anexo V.A del Real Decreto</b> que regula cada título siempre que se aporte el <b>certificado de profesionalidad</b> o la <b>certificación oficial de la acreditación de la Unidad de Competencia.</b></p>
  
      </div>
        <Image src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg" 
        width={500} 
        height={280}/>
      </div>
    </>
  );
}
