export default function validarPublicacion(values) {
  let errores = {};

  if (!values.nombre) {
    errores.nombre = "El Nombre es Obligatorio";
  }

  if (!values.precio) {
    errores.precio = "El Precio es Obligatorio";
  }

  if (!values.descripcion) {
    errores.descripcion = "La Descripcion es obligatoria";
  }

  if (!values.foto) {
    errores.foto = "La foto es obligatoria";
  }

  if (!values.telefono) {
    errores.telefono = "El teléfono es obligatorio";
  }

  return errores;
}
