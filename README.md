🌡️ IoT Sensor Dashboard
A full-stack real-time dashboard that simulates IoT sensor data, streams it via Kafka, processes it with Node.js, and visualizes it using Next.js..

🚀 Tech Stack
Kafka – Event streaming backbone

Node.js – Kafka producer/consumer and WebSocket server

Next.js – Real-time frontend dashboard

Socket.IO – WebSocket communication

Docker – Containerized services

📦 Project Structure
Code
iot-sensor-dashboard/
├── kafka/
│   └── docker-compose.yml         # Kafka + Zookeeper setup
├── producer/
│   └── index.js                   # Simulated sensor data producer
├── backend/
│   └── server.js                  # Kafka consumer + WebSocket server
├── frontend/
│   └── pages/
│       └── index.js               # Next.js dashboard UI
└── README.md
🛠️ Setup Instructions
1. Clone the Repo
bash
git clone https://github.com/your-username/iot-sensor-dashboard.git
cd iot-sensor-dashboard
2. Start Kafka with Docker
bash
cd kafka
docker-compose up -d
3. Run the Sensor Producer
bash
cd producer
npm install
node index.js
4. Start Backend Server
bash
cd backend
npm install
node server.js
5. Launch Frontend Dashboard
bash
cd frontend
npm install
npm run dev
📊 Features
Simulates temperature and humidity sensors

Streams data to Kafka topic sensor-data

Real-time updates via WebSocket

Displays last 20 readings in dashboard

Easily extendable to support multiple sensors


![Node.js CI](https://github.com/git-hariyali/iot-sensor-dashboard/actions/workflows/node-ci.yml/badge.svg)
