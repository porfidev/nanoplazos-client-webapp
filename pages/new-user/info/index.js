import { useRouter } from 'next/router';

export default function Info() {
  const router = useRouter();

  const handleNavigationNext = () => {
    router.push('/new-user/address');
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
        <h3>Tu información </h3>

        <form>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="lastName">Apellido Paterno</label>
            <input type="text" id="lastName" />
          </div>
          <div>
            <label htmlFor="maidName">Apellido Materno</label>
            <input type="text" id="maidName" />
          </div>

          <div>
            <span>Fecha de nacimiento</span>
            <label htmlFor="day">Día</label>
            <input type="text" id="day" />
            <label htmlFor="month">Mes</label>
            <input type="text" id="month" />
            <label htmlFor="year">Año</label>
            <input type="text" id="year" />
          </div>

          <div>
            <label htmlFor="nationality">Nacionalidad</label>
            <input type="text" id="nationality" />
          </div>

          <div>
            <label htmlFor="country">País de nacimiento</label>
            <input type="text" id="country" />
          </div>

          <div>
            <label htmlFor="country2">País de nacimiento</label>
            <select id="country2">
              <option value={1}>MX</option>
              <option value={2}>ES</option>
            </select>
          </div>

          <div>
            <label htmlFor="curp">CURP</label>
            <input type="text" id="curp" />
          </div>

          <div>
            <label htmlFor="rfc">RFC</label>
            <input type="text" id="rfc" />
          </div>

          <button type="button" onClick={handleNavigationNext}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
