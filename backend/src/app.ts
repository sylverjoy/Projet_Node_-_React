import express from 'express';
import routes from './routes/routes'; // ajustez le chemin selon votre structure de dossiers

const app = express();

app.use(express.json());

// Utiliser le router pour toutes les routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
