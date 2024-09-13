import React from 'react';

const datosDOFA = [
  {
    id: 1,
    type: "Debilidades",
    items: [
      { id: 1, description: "Dependencia de la participación activa de los usuarios" },
      { id: 2, description: "Problemas de calidad y verificación de libros" },
      { id: 3, description: "Falta de experiencia en comercio electrónico C2C" },
    ],
  },
  {
    id: 2,
    type: "Oportunidades",
    items: [
      { id: 1, description: "Crecimiento en la conciencia sobre sostenibilidad" },
      { id: 2, description: "Expansión a nuevos mercados y comunidades" },
      { id: 3, description: "Integración de tecnología avanzada, uso de IA para recomendar libros basado en tus gustos literarios." },
    ],
  },
  {
    id: 3,
    type: "Fortalezas",
    items: [
      { id: 1, description: "La plataforma está alineada con tendencias crecientes hacia la sostenibilidad y el consumo responsable" },
      { id: 2, description: "Diversidad en la oferta" },
      { id: 3, description: "Comunidad centrada en la lectura" },
    ],
  },
  {
    id: 4,
    type: "Amenazas",
    items: [
      { id: 1, description: "Competencia de grandes plataformas de libros" },
      { id: 2, description: "Problemas de seguridad y fraudes" },
      { id: 3, description: "Nuevas leyes y regulaciones sobre comercio electrónico, protección al consumidor y derechos de autor" },
    ],
  },
];

function Diagnostico() {
  return (
    <div className="p-9">
      <h1 className="text-2xl font-bold mb-4 font-poppins text-[#7e22ce]">1. DIAGNÓSTICO ACTUAL</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {datosDOFA.map((categoria) => (
          <div key={categoria.id} className="border border-[#c4b5fd] p-4 rounded">
            <h2 className="text-xl font-bold mb-2 font-poppins text-[#a78bfa]">{categoria.type}</h2>
            <ul>
              {categoria.items.map((item) => (
                <li key={item.id}>{item.id}. {item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diagnostico;
