import { Route, Routes } from "react-router-dom";
import Landin from "../Componetes/Landin";
import Error from "./Error";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Layout from "../Componetes/Admin/Layout";
import Autos from "../Componetes/Admin/Componetes/Autos";
import Dashboard from "../Componetes/Admin/Componetes/Dashboard";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Landin />} />
      <Route path="*" element={<Error />} />
      <Route path="/layout" element={<Layout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Autos" element={<Autos />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default Rutas;
