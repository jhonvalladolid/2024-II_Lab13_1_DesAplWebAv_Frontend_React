import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const HomeComponent = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#f4f6f8' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                150
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Nuevas Ordenes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                53%
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Tasa de Rebote
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ backgroundColor: '#fff3e0' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                44
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
                65
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Visitantes Unicos
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
