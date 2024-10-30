const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    
    <div className="container mx-auto max-w-5xl px-3 py-6">
      <p className="block font-bold text-xl font-opensans">Nasa <span className="text-primary">Images</span></p>
      <h1>Header</h1>
      <div className="my-14">
        <h2 className="font-bold text-xl max-w-xs mb-2">Mars Rover Photos</h2>
        <p className="font-light opacity-80 hidden md:inline-block">Photos captured by rover cameras</p>

        {/* {Form} */}
        
      </div>
    </div>
    
    </div>
  )
}

export default Header