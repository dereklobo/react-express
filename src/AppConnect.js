import React, { useState, useEffect } from 'react';
import ErrorText from './ErrorText';
import Photo from './Photo';
import './App.css';
import Header from './Components/Header';

function AppConnect() {

  const [data, setData] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch("http://localhost:9000/nasa")
                           .then(response => response.json())
                           // error handler
                          .catch((error) => {
                              setError(error)
                          })
        setData(result)
    }

    fetchData()
  }, [])

  return (
    <div className='App'>
      <Header />
      <header>
        <h1>Nasa Mars Images</h1>
      </header>

      <ErrorText error={error} />
      <Photo data={data}/>
    </div>
  )
}

export default AppConnect;
