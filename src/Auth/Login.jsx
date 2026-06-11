import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => {
  const [data, setData] = useState({
    Usuario: "",
    Contraseña: "",
  });

  const navigate = useNavigate(); 

  const capturar = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const enviar = (e) => {
    e.preventDefault(); // 
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const cuentaValida = usuarios.find(
      (user) => user.Usuario === data.Usuario && user.Contraseña === data.Contraseña
    );
    if (cuentaValida) {
      localStorage.setItem('sesionActiva', 'true');
      localStorage.setItem('usuarioLogueado', cuentaValida.Usuario);
      alert('¡Bienvenido al sistema!');
      navigate('/Layout/Dashboard'); //

    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <Link className="flex pb-120 text-blue-500 font-bold text-2xl gap-2.5" to="/">
        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
        volver
      </Link>
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">

        <form onSubmit={enviar} className="min-h-96 px-8 py-6 mt-4 text-left bg-white rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <p className="m-0 text-[16px] font-semibold ">Login tu cuenta</p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Ingresa tus credenciales para ingresar a la plataforma
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">Usuario</label>
              <input
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none"
                placeholder="Usuario"
                name="Usuario"
                onChange={capturar}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400 ">Contraseña</label>
            <input
              type="password" 
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none"
              placeholder="••••••••"
              name="Contraseña"
              onChange={capturar}
              required
            />
          </div>
          <div className="mt-5 justify-center flex flex-col ">
            <button type="submit" className="py-1 px-8 bg-blue-500 hover:bg-blue-800 text-white w-full text-center text-base font-semibold shadow-md rounded-lg cursor-pointer select-none">
              Entrar
            </button>
            <Link className="justify-center flex mt-4" to="/Register">
              No tengo cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;