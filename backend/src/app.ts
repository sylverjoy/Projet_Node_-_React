import express from 'express';
import routes from './routes/routes'; // ajustez le chemin selon votre structure de dossiers
import { sequelize } from './config/database';

const app = express();

app.use(express.json());

async function testDB() {
  try {
    await sequelize.authenticate();
    console.log('DB connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testDB();

// Utiliser le router pour toutes les routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
