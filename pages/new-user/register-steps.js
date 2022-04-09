import Link from 'next/link';
import { useRouter } from 'next/router';

const flowSteps = [
  { number: 1, text: 'Carga de documentos' },
  { number: 2, text: 'Registro biométrico y financiero' },
  { number: 3, text: 'Datos de contacto' },
  { number: 4, text: 'Genera tu contraseña' },
  { number: 5, text: '¡Realiza tu compra!' },
];

export default function RegisterSteps() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/docs/step-a');
  };

  return (
    <div>
      <button type="button">back</button>
      <h2>
        Bienvenid@ a <br /> NANO PLAZOS
      </h2>

      <span>
        Para tu registro ten a la mano tu INE/IFE, este proceso solo tendrás que realizarlo una vez
      </span>

      {flowSteps.map((step, index) => (
        <>
          <div>Paso {step.number}</div>
          <div>{step.text}</div>
        </>
      ))}

      <button type="button" onClick={handleNavigationNext}>
        Continuar registro
      </button>

      <div>
        <span>¿Ya tienes cuenta?</span>
        <Link href="/">Inicia sesión</Link>
      </div>
    </div>
  );
}
