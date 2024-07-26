const app = require('./app');
const { syncDB } = require('./models');

const PORT = 4000;

const startServer = async () => {
  try {
    await syncDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

startServer();
