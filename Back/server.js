const fastify = require('fastify')();

// Démarrer le serveur Fastify
fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Serveur Fastify démarré sur le port 3000');
});
