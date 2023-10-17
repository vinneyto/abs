import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/trainingDataDb');

mongoose.connection.on('open', async () => {
  const collections = await mongoose.connection.db.listCollections().toArray();

  for (let collection of collections) {
    await mongoose.connection.db.dropCollection(collection.name);
    console.log(`Dropped collection ${collection.name}`);
  }

  mongoose.connection.close();
});
