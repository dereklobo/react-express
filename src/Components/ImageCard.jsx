const ImageCard = ({photo}) => {
  return (
    <div key={photo.id}>
        <h3 className="font-lato text-center">{ photo.camera.full_name + ' ' + photo.id}</h3>
        <img className="w-full rounded shadow-sm"  src={photo.img_src} alt={photo.rover.name + 'rover image of mars'}></img>
    </div>
  )
}

export default ImageCard