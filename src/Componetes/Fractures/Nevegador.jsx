import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nevegador = () => {
  const [estaLogueado, setEstaLogueado] = useState(false);

  useEffect(() => {
    const sesion = localStorage.getItem('sesionActiva') === 'true';
    setEstaLogueado(sesion);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
          </div>
          
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <h3 className="font-bold text-blue-600">Tu auto ya</h3>
          </div>

          <div className="flex items-center justify-end gap-3">
            {!estaLogueado ? (
              <>
                <Link 
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  to="/Register"
                >
                  Registrarse
                </Link>
                <Link 
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500"
                  to="/login"
                >
                  Login
                </Link>
              </>
            ) : (

              <Link 
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-150 hover:from-blue-500 hover:to-indigo-500 animate-fade-in"
                to="/Layout/Dashboard"
              >
                <span className="material-symbols-outlined text-sm mr-1.5">dashboard</span>
                Volver al Panel
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nevegador;