// Endpoint pour récupérer toutes les tâches
fastify.get('/api/tasks', (request, reply) => {
    // Code pour récupérer la liste complète de toutes les tâches
    reply.send('Liste complète de toutes les tâches');
  });
  
  // Endpoint pour récupérer une tâche par ID
  fastify.get('/api/tasks/:id', (request, reply) => {
    const taskId = request.params.id;
    // Code pour récupérer les détails d'une tâche spécifique en utilisant son identifiant
    reply.send(`Détails de la tâche avec l'ID ${taskId}`);
  });
  
  // Endpoint pour créer une nouvelle tâche
  fastify.post('/api/tasks', (request, reply) => {
    const taskDetails = request.body;
    // Code pour créer une nouvelle tâche avec les détails fournis dans le corps de la requête
    reply.send('Nouvelle tâche créée');
  });
  
  // Endpoint pour modifier une tâche par ID
  fastify.put('/api/tasks/:id', (request, reply) => {
    const taskId = request.params.id;
    const taskDetails = request.body;
    // Code pour modifier les détails d'une tâche spécifique en utilisant son identifiant
    reply.send(`Tâche avec l'ID ${taskId} modifiée`);
  });
  
  // Endpoint pour supprimer une tâche par ID
  fastify.delete('/api/tasks/:id', (request, reply) => {
    const taskId = request.params.id;
    // Code pour supprimer une tâche spécifique en utilisant son identifiant
    reply.send(`Tâche avec l'ID ${taskId} supprimée`);
  });