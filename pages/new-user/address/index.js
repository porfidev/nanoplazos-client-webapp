import { useRouter } from 'next/router';

export default function Address() {
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
        <h3>Tu domicilio</h3>

        <form>
          <div>
            <label htmlFor="street">Calle</label>
            <input type="text" id="street" />
          </div>
          <div>
            <label htmlFor="location">Colonia</label>
            <input type="text" id="location" />
          </div>
          <div>
            <label htmlFor="city">Ciudad</label>
            <input type="text" id="city" />
          </div>

          <div>
            <label htmlFor="state">Estado</label>
            <input type="text" id="state" />
          </div>

          <div>
            <label htmlFor="zipCode">Código Postal</label>
            <input type="text" id="zipCode" />
          </div>

          <div>
            <label htmlFor="acceptTerms">
              Acepto los <a href=".">Términos y condiciones</a>
              <hr />
              Estod de acuerdo con el <a href=".">Aviso de privacidad </a>
            </label>
            <input type="checkbox" id="acceptTerms" />
          </div>

          <button type="button" onClick={handleNavigationNext}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
