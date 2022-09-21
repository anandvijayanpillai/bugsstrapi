module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["QNwDO28K/tUJ+Y6hv9Hafg==", "kdaaqE65wsIP2sTygdXPVA=="]),
  },
});
