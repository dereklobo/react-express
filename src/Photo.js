function Photo({data}) {
    if(data && data.length)
    {
      return (
              data.map(photo => (
                <div key={photo.id}>
                  <h2>{ photo.camera.full_name + photo.id}</h2>
                  <img src={photo.img_src} width="100px" height="100px" alt={photo.rover.name + 'rover image of mars'}></img>
                </div>
              )
            ) 
          )
    } else {
      return(
        <div className="text-red-500'"> No images found</div>
      )
    }
    
}

export default Photo