module.exports = ({ env }) => {
  console.log("App Keys: ", env.array('APP_KEYS'));

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    logger: {
      level: 'debug', // Set logging level here ('debug' or 'trace' for more verbose output)
    },
  };
};
