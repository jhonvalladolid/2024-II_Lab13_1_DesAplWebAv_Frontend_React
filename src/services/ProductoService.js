import axios from 'axios';

const PRODUCTO_BASE_REST_API_URL = "http://localhost:8080/api/v1/productos";

class ProductoService {

    obtenerTodosLosProductos() {
        return axios.get(PRODUCTO_BASE_REST_API_URL);
    }

    obtenerProductoPorId(id) {
        return axios.get(`${PRODUCTO_BASE_REST_API_URL}/${id}`);
    }

    guardarProducto(producto) {
        return axios.post(PRODUCTO_BASE_REST_API_URL, producto);
    }

    actualizarProducto(id, productoDetalles) {
        return axios.put(`${PRODUCTO_BASE_REST_API_URL}/${id}`, productoDetalles);
    }

    eliminarProducto(id) {
        return axios.delete(`${PRODUCTO_BASE_REST_API_URL}/${id}`);
    }
}

export default new ProductoService();
