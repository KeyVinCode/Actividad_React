import { NavLink, Link, useNavigate } from "react-router-dom";

const Navar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/Layout/Dashboard' },
    { name: 'Autos', icon: 'add_ad', path: '/Layout/Autos'  },
  ];


  const usuarioActual = localStorage.getItem('usuarioLogueado') || "Admin";

  const cerrarSesion = () => {
    localStorage.setItem('sesionActiva', 'false');
    localStorage.removeItem('usuarioLogueado'); 
    navigate('/');
  };

  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col justify-between shadow-xl md:flex h-screen">
      <div>
        <div className="p-6 text-xl font-bold tracking-wider flex items-center gap-3 border-b border-blue-700">
          <span className="material-symbols-outlined text-blue-300">admin_panel_settings</span>
          <span>MiPanel Admin</span>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`material-symbols-outlined ${isActive ? 'text-white' : 'text-blue-300 group-hover:text-white'}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>


      <div className="p-4 border-t border-blue-700 bg-blue-900/40 flex flex-col gap-3">
        

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white uppercase text-sm">
              {usuarioActual.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold leading-none truncate max-w-[110px]">{usuarioActual}</p>
              <span className="text-xs text-blue-300">Administrador</span>
            </div>
          </div>
          
          <button 
            onClick={cerrarSesion}
            className="text-blue-300 hover:text-white transition-colors duration-150"
            title="Cerrar Sesión"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
          </button>
        </div>

        <Link 
          to="/" 
          className="w-full text-center bg-blue-700 hover:bg-blue-600 text-white text-xs py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-1 shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a la Landing
        </Link>

      </div>
    </div>
  );
};

export default Navar;