import Image from 'next/image';
import { useRouter } from 'next/router';

export default function DocumentStepSuccess() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user');
  };

  return (
    <div>
      <button type="button">back</button>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      <div style={{ backgroundColor: 'gray' }}>
        <Image
          src="https://via.placeholder.com/300?text=success"
          width={150}
          height={150}
          onClick={handleNavigationNext}
        />

        <h2>¡Éxito!</h2>
        <div>Hemos validado tu identificación correctamente</div>

        <button type="button" onClick={handleNavigationNext}>
          Continuar
        </button>
      </div>
    </div>
  );
}
