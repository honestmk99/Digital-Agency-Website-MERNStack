import './App.css';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.localStorage.count = 0;
  }, [])
  return (<></>
  );
}

export default App;
