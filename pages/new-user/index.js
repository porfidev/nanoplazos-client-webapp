import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NewUser() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/register-steps');
  };

  return (
    <div>
      <button type="button">back</button>
      <h2>
        Bienvenid@ a <br /> NANO PLAZOS
      </h2>
      <span>Registrarse como</span>
      <Image src="https://i.pravatar.cc/200" width={200} height={200} />
      <span>Nombre</span>
      <span>Email</span>

      <div>
        <span>¿No eres tu?</span>
        <Link href="/">cambiar correo</Link>
      </div>

      <button type="button" onClick={handleNavigationNext}>
        Continuar
      </button>

      <div>
        <span>¿Ya tienes cuenta?</span>
        <Link href="/">Inicia sesión</Link>
      </div>
    </div>
  );
}
