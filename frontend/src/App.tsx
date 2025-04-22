import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    axios.get<string[]>('http://127.0.0.1:8000/api/routes/')
      .then(res => setRoutes(res.data))
      .catch(error => console.error('Error fetching routes:', error));
  }, []);

  return (
    <div>
      <h1>Pet Wars API Routes</h1>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
