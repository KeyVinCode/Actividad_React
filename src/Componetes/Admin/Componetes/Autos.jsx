import { useState } from "react";

const Autos = () => {
  const [form, setForm] = useState({
    nombre: '',
    modelo: '',
    descripcion:'',
    estado: 'nuevo',
    imagen: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,       
      [name]: value  
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carrosExistentes = JSON.parse(localStorage.getItem('carros')) || [];
    const listaActualizada = [form, ...carrosExistentes];
    localStorage.setItem('carros', JSON.stringify(listaActualizada));
    
    setForm({
      nombre: '',
      modelo: '',
      descripcion:'',
      estado: 'nuevo', 
      imagen: ''
    });
    
    alert('Auto Registrado con éxito');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Registrar Carro</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre / Marca</label>
          <input
            type="text"
            name="nombre" 
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. Toyota Corolla"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Modelo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Modelo (Año)</label>
          <input
            type="number"
            name="modelo" 
            value={form.modelo} 
            onChange={handleChange}
            placeholder="Ej. 2024"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
         {/* descripcion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripcion</label>
          <input
            type="text"
            name="descripcion" 
            value={form.descripcion} 
            onChange={handleChange}
            placeholder="Ej. Auto en buenas condiciones..."
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Condición */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Condición</label>
          <select
            name="estado" 
            value={form.estado}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        {/* Imagen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enlace (URL) de la Imagen</label>
          <input
            type="text"
            name="imagen" 
            value={form.imagen} 
            onChange={handleChange}
            placeholder="Pegar el link de la foto aquí"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition-colors"
        >
          Guardar Vehículo
        </button>
      </form>
    </div>
  )
}

export default Autos;