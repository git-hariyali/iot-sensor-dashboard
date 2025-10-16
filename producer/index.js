const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'sensor-sim',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function sendSensorData() {
  await producer.connect();
  setInterval(async () => {
    const data = {
      sensorId: 'sensor-1',
      temperature: (20 + Math.random() * 10).toFixed(2),
      humidity: (30 + Math.random() * 20).toFixed(2),
      timestamp: new Date().toISOString()
    };
    await producer.send({
      topic: 'sensor-data',
      messages: [{ value: JSON.stringify(data) }]
    });
    console.log('Sent:', data);
  }, 2000);
}

sendSensorData();
