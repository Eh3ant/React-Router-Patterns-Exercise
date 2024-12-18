import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Colors from './Colors';
import AddColor from './AddColor';
import ColorDetails from './ColorDetails';

function App() {

  const [colors, setColors] = useState([
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
  ]);

  const addColor = (newColor) => {
    setColors((colors) => [newColor, ...colors]);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<Colors colors={colors} />} />
          <Route path='/colors/new' element={<AddColor addColor={addColor} />} />
          <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />


          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
