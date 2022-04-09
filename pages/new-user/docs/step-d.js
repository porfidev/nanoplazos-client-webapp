import { useRouter } from 'next/router';

export default function DocumentStepD() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/docs/step-success');
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
        <h3>Escanea el reverso de tu identificación</h3>

        <video width="180" height="320" controls>
          {/* <source src="movie.mp4" type="video/mp4"> */}
          {/*  <source src="movie.ogg" type="video/ogg"> */}
          Your browser does not support the video tag.
        </video>

        {/* <div>Escanea el frente de tu identificación</div> */}

        <button type="button" onClick={handleNavigationNext}>
          Continuar
        </button>
      </div>
    </div>
  );
}
