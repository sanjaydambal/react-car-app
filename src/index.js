import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

const car_root = ReactDOM.createRoot(document.getElementById('car-root'));
car_root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);

