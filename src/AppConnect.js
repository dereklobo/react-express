import React, { useState, useEffect } from 'react';
import ErrorText from './ErrorText';
import Photo from './Components/Photo';
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
    <div className=''>
      <Header />

      <Photo data={data}/>
      <ErrorText error={error} />
    </div>
  )
}

export default AppConnect;
