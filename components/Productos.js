import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { es } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import getEstatus from "../utilities/obtenerEstatus";
import { doc, setDoc } from "firebase/firestore";
import { FireContext } from "../fire";
import Link from "next/link";
import { getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
//
const ImgProducto = styled.img`
  width: 220px;
`;

export const Productos = ({ producto }) => {
  const { fire, usuario } = useContext(FireContext);
  const router = useRouter();
  const { estado } = producto;

  function actualizarEstado(e){
    const cityRef = doc(fire.db, 'productos', producto.id);
    setDoc(cityRef, { estado: e.target.value}, { merge: true });
  }

  const eliminarProducto = async () => {
    if (!usuario || producto.propetario.id !== usuario.uid) {
      return router.push("/login");
    }
    try {
      await deleteDoc(doc(fire.db, "productos", producto.id));
      router.push("/inicio");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="col-md-4 mb-5">
      <div className="card text-center">
        <div className="card-header">
          <p className="fw-bolder fs-5">{producto.nombre}</p>
          <label htmlFor="estatus">Estatus:</label>
          <select name="estatus" className="form-select" onChange={(e) => actualizarEstado(e)} value={producto.estado}>
            <option value="0">Disponible</option>
            <option value="1">En negociación</option>
            <option value="2">Vendido</option>
          </select>
        </div>
        <div className="card-body">
          <ImgProducto
            src={producto.urlImagen}
            className="card-img"
            alt={producto.nombre}
          />
        </div>
        <div className="card-footer text-bazapp">
          <p className="d-block text-muted fs-6">
            Publicado hace:{" "}
            {formatDistanceToNow(new Date(producto.creado), {
              locale: es,
            })}{" "}
          </p>{" "}
          <Link href="/productos/[id]" as={`productos/${producto.id}`}>
            <a className="card-link fw-bold">Detalles</a>
          </Link>
          <button
            onClick={eliminarProducto}
            className="btn btn-outline-danger ms-5 fw-bold">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productos;
