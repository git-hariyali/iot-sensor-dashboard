// pages/index.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('sensor-update', (newData) => {
      setData(prev => [...prev.slice(-19), newData]); // Keep last 20 readings
    });
  }, []);

  return (
    <div>
      <h1>IoT Sensor Dashboard</h1>
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d.timestamp}: 🌡️ {d.temperature}°C | 💧 {d.humidity}%</li>
        ))}
      </ul>
    </div>
  );
}
