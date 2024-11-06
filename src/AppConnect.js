import React, { useState, useEffect } from 'react';
import ErrorText from './ErrorText';
import Photo from './Components/Photo';
import './App.css';
import Header from './Components/Header';

function AppConnect() {

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async() => {
      await fetch("http://localhost:9000/nasa")
                .then(response => {
                  return response.json()
                })
                .then( data => {
                  setData(data)
                  setIsLoading(false)
                })
                // error handler
              .catch((error) => {
                  setError(error)
              })
                          
    }

    fetchData()
  }, [])

  return (
    <div className=''>
      <Header isLoading={isLoading} data={data} setFilterData={setFilterData} setIsLoading={setIsLoading} />

      <Photo data={data} filterData={filterData} isLoading={isLoading}/>

      <ErrorText error={error} />
    </div>
  )
}

export default AppConnect;
