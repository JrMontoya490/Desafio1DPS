"use client"
import React, { useState, useEffect } from 'react';
import Resumen from './components/ResumenPresupuesto';
import FormularioRegistro from './components/FormularioRegistroProyecto';
import ListaProyectos from './components/ListaProyectos.jsx';

// Función para cargar los proyectos del backend (o de la solución de gestión del estado)
const loadProjects = async () => {
  const response = await fetch('/api/projects');
  const data = await response.json();
  setProjects(data);
};

// Función para agregar un nuevo proyecto
const addProject = (project) => {
  // Implementar la lógica para enviar el proyecto al backend
  console.log('Nuevo proyecto:', project);
  // Agregar el proyecto a la lista local
  setProjects([...projects, project]);
};

function Page() {
  const [projects, setProjects] = useState([]); // Estado para la lista de proyectos

  // Efecto para cargar los proyectos al renderizar la página
  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="page">
      <header>
        <h1>ProjectPro</h1>
      </header>
      <main>
        <Resumen />
        <FormularioRegistro onAddProject={addProject}>
          <PajeForm>
            <label htmlFor="tipo-proyecto">Tipo de Proyecto:</label>
            <PajeSelect
              id="tipo-proyecto"
              name="tipo-proyecto"
              value={tipoProyecto}
              onChange={(e) => setTipoProyecto(e.target.value)}
            >
              <option value="no_ambiental">NO AMBIENTALES</option>
              <option value="ambiental">AMBIENTALES</option>
            </PajeSelect>

            <label htmlFor="categoria">Categoría:</label>
            <PajeSelect
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
            </PajeSelect>

            <label htmlFor="monto">Monto:</label>
            <PajeInput
              type="number"
              id="monto"
              name="monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />

            <label htmlFor="fecha">Fecha:</label>
            <PajeInput
              type="date"
              id="fecha"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />

            <label htmlFor="descripcion">Descripción:</label>
            <PajeInput
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            {/* Botón para enviar el formulario */}
            <PajeButton type="submit">Registrar Proyecto</PajeButton>
          </PajeForm>
        </FormularioRegistro>
        <ListaProyectos projects={projects} />
      </main>
    </div>
  );
}

export default Page;
