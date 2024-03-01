function ResumenPresupuesto() {
    const [presupuestoTotal, setPresupuestoTotal] = useState(600);
    const [presupuestoAmbiental, setPresupuestoAmbiental] = useState(200);
    const [presupuestoNoAmbiental, setPresupuestoNoAmbiental] = useState(400);
  
    useEffect(() => {
      setPresupuestoTotal(presupuestoAmbiental + presupuestoNoAmbiental);
    }, [presupuestoAmbiental, presupuestoNoAmbiental]);
  
    return (
      <div className="resumen-presupuesto">
        <h2>Presupuesto Proyectos</h2>
        <p className="monto-total">{presupuestoTotal.toFixed(2)}€</p>
  
        <div className="tipo-proyecto">
          <h3>NO AMBIENTALES</h3>
          <p className="monto">{presupuestoNoAmbiental.toFixed(2)}€</p>
        </div>
  
        <div className="tipo-proyecto">
          <h3>AMBIENTALES</h3>
          <p className="monto">{presupuestoAmbiental.toFixed(2)}€</p>
        </div>
      </div>
    );
  }
  
  export default ResumenPresupuesto;
  