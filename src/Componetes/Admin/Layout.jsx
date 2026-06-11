import { Outlet, Navigate } from "react-router-dom";
import Navar from "./Componetes/Navar"; 

const Layout = () => {
  const estaLogueado = localStorage.getItem('sesionActiva') === 'true';
  if (!estaLogueado) {
    return <Navigate to="/Login" replace />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      <div className="w-64 shrink-0 hidden md:block">
        <Navar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;