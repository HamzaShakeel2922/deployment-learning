import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([])
  console.log("VITE_API =", import.meta.env.VITE_API);

  useEffect(()=> {
    fetch(`${import.meta.env.VITE_API}/weather`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));

  },[])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>fine now !!</h1>
          <h3>{JSON.stringify(data)}</h3>
        </div>
      </section>
    </>
  )
}

export default App
