import { useState, useEffect } from "react";

const Card = () => {
  const [carros, setCarros] = useState([]);
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('carros')) || [];
    setCarros(guardados);
  }, []);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Revisa nuestro catálogo con las mejores ofertas disponibles.
          </p>
        </div>  

        {/* <-- Projects Grid --> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {carros.length === 0 ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-lg font-medium">No hay autos en exhibición en este momento.</p>
              <p className="text-sm text-gray-400">Registra algunos desde el panel de administración.</p>
            </div>
          ) : (
            carros.map((carro, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  {/* Contenedor de la Imagen */}
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={carro.imagen}
                      alt={carro.nombre}
                      className="h-full w-full object-cover"
                      onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Auto+Sin+Foto"; }}
                    />
                  </div>
                  
                  {/* Información del Carro */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {carro.nombre}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      {carro.descripcion}
                    </p>
                    
                    {/* Etiquetas (Badges) */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        Modelo {carro.modelo}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase ${
                        carro.estado === 'nuevo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {carro.estado}
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>
            ))
          )}
        
        </div>
      </div>
    </section>
  );
};

export default Card;