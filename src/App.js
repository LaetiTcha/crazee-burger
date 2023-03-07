import { useState } from "react";

function App() {
  // state (état, données)
  const [name, setName] = useState("Laetitia");
  const [count, setCount] = useState(1);


  // comportements
  const handleClick = () => {
    setCount(count + 1);
  }

  // affichage (render)
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Incrementer</button>
    </div>
    
  );
}

export default App;
