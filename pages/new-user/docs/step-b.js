import { useRouter } from 'next/router';
import Image from 'next/image';

export default function DocumentStepB() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/docs/step-c');
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

      <div style={{ backgroundColor: 'lightgray' }}>
        <h3>Alinea tu documento</h3>

        <Image
          src="https://via.placeholder.com/300?text=Scanner"
          width={150}
          height={300}
          onClick={handleNavigationNext}
        />
        <div>¡Ya casi! no te muevas</div>

        <div className="helpbutton">help</div>
      </div>
    </div>
  );
}
