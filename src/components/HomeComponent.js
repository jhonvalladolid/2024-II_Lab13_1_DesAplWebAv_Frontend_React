import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import ClienteService from '../services/ClienteService';
import ProductoService from '../services/ProductoService';

const HomeComponent = () => {
  const [dashboardData, setDashboardData] = useState({
    totalClientes: 0,
    totalProductos: 0,
    newClients: 0,
    NewProduct: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientesResponse = await ClienteService.getAllClientes();
        const productosResponse = await ProductoService.obtenerTodosLosProductos();

        setDashboardData({
          totalClientes: clientesResponse.data.length,
          totalProductos: productosResponse.data.length,
          newClients: clientesResponse.data.length,
          NewProduct: productosResponse.data.length,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#f4f6f8' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {dashboardData.totalClientes}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Total de Clientes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {dashboardData.totalProductos}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Total de Productos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#fff3e0' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {dashboardData.newClients}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Nuevos Usuarios
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#ffebee' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {dashboardData.NewProduct}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Visitantes Únicos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Ventas
              </Typography>
              <div style={{ height: '300px' }}>
                {/* Aquí puedes agregar una gráfica de ventas usando una librería como Chart.js o Recharts */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Visitantes
              </Typography>
              <div style={{ height: '300px' }}>
                {/* Aquí puedes agregar un mapa similar al de la imagen usando una librería como Leaflet */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeComponent;
