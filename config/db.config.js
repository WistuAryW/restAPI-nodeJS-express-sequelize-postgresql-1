module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '123456',
  DB: 'express_dev',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
