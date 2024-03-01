function FormularioRegistroProyecto() {
    const [tipoProyecto, setTipoProyecto] = useState("no_ambiental");
    const [categoria, setCategoria] = useState("");
    const [monto, setMonto] = useState(0);
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Aquí se debería enviar la información del proyecto a un servidor o API
  
      alert("Proyecto registrado correctamente!");
    };
  
    return (
      <div className="formulario-registro">
        <h2>Registrar Proyecto</h2>
  
        <form onSubmit={handleSubmit}>
          <label for="tipo-proyecto">Tipo de Proyecto:</label>
          <select
            id="tipo-proyecto"
            name="tipo-proyecto"
            value={tipoProyecto}
            onChange={(e) => setTipoProyecto(e.target.value)}
          >
            <option value="no_ambiental">NO AMBIENTALES</option>
            <option value="ambiental">AMBIENTALES</option>
          </select>
  
          <label for="categoria">Categoría:</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="alimentacion">Alimentación</option>
            <option value="vivienda">Vivienda</option>
            <option value="desarrollo_software">Desarrollo de software</option>
            <option value="campana_marketing">Campaña Marketing</option>
          </select>
  
          <label for="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            name="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
  
          <label for="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
  
          <label for="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
  
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
  
  export default FormularioRegistroProyecto;
  