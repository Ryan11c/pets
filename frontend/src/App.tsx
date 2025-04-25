import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pet {
  id: number;
  picture: string;
  name: string;
  category: string;
  date: string;
}

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get_pets/')
      .then(res => {
        //Checking the data through console log
        console.log('Response:', res.data); 
        //Extracting the pet_list array
        setPets(res.data.pet_list); 
      })
      .catch(error => console.error('error:', error));
  }, []);

  return (
    <div>
      <h1>Pet Wars</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
            <img
              src={`http://127.0.0.1:8000${pet.picture}`}
              alt={pet.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p><strong>Name:</strong> {pet.name}</p>
            <p><strong>Category:</strong> {pet.category}</p>
            <p><strong>Date:</strong> {pet.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
