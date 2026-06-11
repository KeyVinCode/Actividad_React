

const Dashboard = () => {
  return (
    <div className="space-y-6">
      

      <div className="bg-linear-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="text-blue-100 text-sm md:text-base max-w-md">
            Este es tu panel administrativo. Desde aquí puedes gestionar las secciones utilizando el menú de la izquierda.
          </p>
        </div>
      </div>

  
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Estado General</h2>
        <div className="flex items-center gap-2.5 text-emerald-600 font-medium text-sm">
  
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span>Todos los módulos están operando con normalidad</span>

        </div>
        <div className="flex items-center gap-2.5 text-amber-300 font-medium text-sm">

          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span>Creando nuevos modulos proximamente disponibles</span>
          
        </div>
      </div>

    </div>
  )
}

export default Dashboard
