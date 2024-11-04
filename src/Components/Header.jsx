import { useState } from "react"

const Header = ({data,setFilterData, isLoading}) => {
  const [inputValue, setInputValue] = useState('');
  const filterPhotosByCameraIdOrName = (data) =>  data && data.length ? data.filter((item) => 
    { 
      return item.id.toString().includes(inputValue) 
    } 
  )
      : [] 
  
  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()

    if(inputValue!=='') {
      setFilterData(filterPhotosByCameraIdOrName(data))
    } else {
      setFilterData(data)
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    
    <div className="container mx-auto max-w-5xl px-3 py-6">
      <p className="block font-bold text-xl font-opensans">Nasa <span className="text-primary">Images</span></p>
      <h1>Header</h1>
      <div className="my-14">
        <h2 className="font-bold text-xl max-w-xs mb-2">Mars Rover Photos</h2>
        <p className="font-light opacity-80 hidden md:inline-block">Photos captured by rover cameras</p>

        {/* {Form} */}
        <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
          <input onInput={handleInputChange} value={inputValue} className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50
          w-full md:max-w-md focus:ring-primary outline-none focus:ring-2
          " placeholder="Search camera id, camera name" type="text"/>

          <button type="submit" className="absolute bottom-3.5 right-2.5 bg-primary text-white
          p-1 rounded-sm text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </button>
        </form>
      </div>
    </div>
    
    </div>
  )
}

export default Header