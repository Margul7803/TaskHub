const fs = require('fs')

// Endpoint pour télécharger une pièce jointe spécifique associée à une tâche
fastify.get('/api/attachments/:taskId/:attachmentId', async (request, reply) => {
    const { taskId, attachmentId } = request.params;
    const filePath = `./attachments/${taskId}/${attachmentId}`;
  
    if (fs.existsSync(filePath)) {
      reply.sendFile(filePath);
    } else {
      reply.code(404).send({ error: 'Fichier non trouvé' });
    }
  });
  
  // Endpoint pour téléverser une nouvelle pièce jointe pour une tâche spécifique
  fastify.post('/api/attachments/:taskId', async (request, reply) => {
    const { taskId } = request.params;
    const uploadDir = `./attachments/${taskId}`;
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  
    const data = await request.file();
    const fileName = `${uploadDir}/${data.filename}`;
  
    fs.writeFileSync(fileName, data.file);
  
    reply.send({ message: 'Téléversement réussi' });
  });