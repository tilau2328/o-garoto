module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0970370bb6e560ed2733369cc3c181d9'),
  },
});
