import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5202/api/products')
      .then(response => 
        setProduct(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Hello World</h1>
      <ul style={{listStyle: 'none'}}>
        {product.map(product => (
          <li style={{border: '1px solid black', margin: '10px', padding: '10px'}}
            key={product.id}>{product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
