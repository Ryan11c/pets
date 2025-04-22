import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    axios.get<string[]>('http://127.0.0.1:8000/routes/')
      .then(res => setRoutes(res.data))
      .catch(error => console.error('Error fetching routes:', error));
  }, []);

  return (
    <div>
      <h1>Pet Wars API Rout</h1>
      <table>
        {routes.map((route, index) => (
          <th key={index}>{route}</th>
        ))}
      </table>
    </div>
  );
}

export default App;
