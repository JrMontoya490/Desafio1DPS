function ListaProyectos() {
    const proyectos = [
      {
        tipo: "ambiental",
        categoria: "alimentacion",
        monto: 270,
        fecha: "16/02/2024",
      },
      {
        tipo: "ambiental",
        categoria: "vivienda",
        monto: 130,
        fecha: "17/02/2024",
      },
      {
        tipo: "no_ambiental",
        categoria: "desarrollo_software",
        monto: 100,
        fecha: "10/02/2024",
      },
      {
        tipo: "no_ambiental",
        categoria: "campana_marketing",
        monto: 400,
        fecha: "08/02/2024",
      },
    ];
  
    return (
      <div className="lista-proyectos">
        <h2>Proyectos</h2>
  
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto">
            <h3>{proyecto.categoria}</h3>
            <p className="monto">{proyecto.monto.toFixed(2)}€</p>
            <p className="fecha">{proyecto.fecha}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ListaProyectos;
  