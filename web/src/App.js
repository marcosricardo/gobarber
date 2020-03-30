import React, {  useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'Node.js']);

  return (
    <ul>
        {
            tech.map(t => (
             <li key={t}>{t}</li>
            ))
        }
    </ul>
  );
}

export default App;
