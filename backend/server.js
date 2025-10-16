const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Kafka } = require('kafkajs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const kafka = new Kafka({ clientId: 'sensor-consumer', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'dashboard-group' });

io.on('connection', socket => {
  console.log('Client connected');
});

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'sensor-data', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const data = JSON.parse(message.value.toString());
      io.emit('sensor-update', data);
    }
  });
}
startConsumer();
server.listen(4000);