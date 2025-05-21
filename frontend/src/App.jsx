import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/health/")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <h1>Hello Physio!</h1>;
}

export default App;
