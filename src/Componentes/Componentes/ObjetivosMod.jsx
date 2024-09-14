import React from 'react';

const objetivos = [
  { id: 1000, goal: "Incrementar las ventas de libros usados en la plataforma.", target: 50000000, progress: 25000000, compliance: 50 },
  { id: 1001, goal: "Expandir la base de usuarios vendedores.", target: 10000000, progress: 500000, compliance: 5 },
  { id: 1002, goal: "Aumentar la cantidad de libros vendidos en el mes.", target: 10000000, progress: 9000000, compliance: 90 },
  { id: 1003, goal: "Lograr una tasa de retención del 100% de los vendedores activos.", target: 15000000, progress: 15000000, compliance: 100 },
  { id: 1004, goal: "Mejorar la experiencia de usuario en la plataforma.", target: 80000000, progress: 30000000, compliance: 37.5 },
];

function determinarEstado(compliance) {
  if (compliance >= 0 && compliance <= 35) {
    return { estado: "Crítico", color: "text-red-600" };
  } else if (compliance > 35 && compliance <= 75) {
    return { estado: "Aceptable", color: "text-orange-600" };
  } else if (compliance > 75 && compliance <= 100) {
    return { estado: "Exitoso", color: "text-green-600" };
  }
  return { estado: "Indefinido", color: "" };
}

function ObjetivosEstrategicos() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-poppins font-bold mb-4 text-[#7e22ce]">3. OBJETIVOS ESTRATÉGICOS</h1>

      <div className="overflow-x-auto">

      <table className="min-w-full border-collapse border border-[#c4b5fd]">
        <thead>
          <tr>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Código</th>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Objetivo</th>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Meta</th>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Avance</th>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Cumplimiento</th>
            <th className="border border-[#c4b5fd] p-2 font-poppins text-[#a78bfa]">Estado</th>
          </tr>
        </thead>
        <tbody>
          {objetivos.map((objetivo) => {
            const { estado, color } = determinarEstado(objetivo.compliance);

            return (
              <tr key={objetivo.id} className="text-center">
                <td className="border border-[#c4b5fd] p-2 font-poppins">{objetivo.id}</td>
                <td className="border border-[#c4b5fd] p-2 font-poppins">{objetivo.goal}</td>
                <td className="border border-[#c4b5fd] p-2 font-poppins">{objetivo.target.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
                <td className="border border-[#c4b5fd] p-2 font-poppins">{objetivo.progress.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
                <td className="border border-[#c4b5fd] p-2 font-poppins">{objetivo.compliance}%</td>
                <td className={`border border-[#c4b5fd] p-2 font-poppins font-bold ${color}`}>{estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default ObjetivosEstrategicos;
