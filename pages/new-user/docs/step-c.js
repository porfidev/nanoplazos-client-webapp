import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getRandomProperty from '../../../utils/getRandomProperty';

const STEPS = {
  UPLOADING: 'UPLOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export default function DocumentStepC() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/docs/step-d');
  };

  const [statusUpload, setStatusUpload] = useState(STEPS.UPLOADING);

  useEffect(() => {
    const test = setInterval(() => {
      console.log('interval', getRandomProperty(STEPS));
      setStatusUpload(getRandomProperty(STEPS));
    }, 4000);

    return () => {
      clearInterval(test);
    };
  }, []);

  const renderStatusText = (status) => {
    switch (status) {
      case STEPS.UPLOADING:
        return 'Estamos procesando la imagen';
      case STEPS.SUCCESS:
        return 'Procesada con éxito';
      case STEPS.ERROR:
        return 'Ocurrió un error';
      default:
        return 'cargando...';
    }
  };

  const renderFakeUploadPercent = (status) => {
    switch (status) {
      case STEPS.UPLOADING:
        return 70;
      case STEPS.SUCCESS:
        return 100;
      case STEPS.ERROR:
        return 0;
      default:
        return 0;
    }
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
        <h3>{renderStatusText(statusUpload)}</h3>

        <Image
          src="https://via.placeholder.com/300?text=Imagen"
          width={150}
          height={300}
          onClick={handleNavigationNext}
        />
        <div>
          <span>Subiendo Imagen</span>
          <div>
            <progress id="file" max="100" value={renderFakeUploadPercent(statusUpload)}>
              {renderFakeUploadPercent(statusUpload)}%
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
}
