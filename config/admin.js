module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bee95e46ed0396bf970bd44a7129af78'),
  },
});
