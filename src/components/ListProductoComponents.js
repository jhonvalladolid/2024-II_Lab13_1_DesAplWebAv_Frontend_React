import React, { useEffect, useState } from 'react';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export const ListProductosComponent = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    listarProductos();
  }, []);

  const listarProductos = () => {
    ProductoService.obtenerTodosLosProductos().then(response => {
      setProductos(response.data);
      setFilteredProductos(response.data);
    }).catch(error => {
      console.log(error);
    });
  };

  const deleteProducto = (productoId) => {
    ProductoService.eliminarProducto(productoId).then(response => {
      listarProductos();
    }).catch(error => {
      console.log(error);
    });
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    if (searchValue === '') {
      setFilteredProductos(productos);
    } else {
      setFilteredProductos(
        productos.filter((producto) =>
          producto.nombre.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  return (
    <div className='container' style={{ marginTop: "80px" }}>
      <h2 className='text-center'>Listado de Productos</h2>

      <div className="d-flex justify-content-between mb-3">
        <Link to='/add-producto' className='btn btn-primary'>
          <FaPlus /> Agregar Producto
        </Link>
        <div className="input-group" style={{ width: '300px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto por nombre"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table className="table table-secondary table-hover" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Fecha de Creación</th>
            <th>Última Actualización</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredProductos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>{new Date(producto.fechaCreacion).toLocaleString()}</td>
                <td>{new Date(producto.ultimaActualizacion).toLocaleString()}</td>
                <td>
                  <Link className='btn btn-info' to={`/edit-producto/${producto.id}`} title="Actualizar">
                    <FaEdit />
                  </Link>
                  <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteProducto(producto.id)} title="Eliminar">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListProductosComponent;
