
const Photo = () => {
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="grid md:grid-cols-5 gap-4">
          {/* // iterate over images  */}
      </div>
    </div>
  )
}

export default Photo




// function Photo({data}) {
//     if(data && data.length)
//     {
//       return (
//               data.map(photo => (
//                 <div key={photo.id}>
//                   <h2>{ photo.camera.full_name + photo.id}</h2>
//                   <img src={photo.img_src} width="100px" height="100px" alt={photo.rover.name + 'rover image of mars'}></img>
//                 </div>
//               )
//             ) 
//           )
//     } else {
//       return(
//         <div className="text-red-500'"> No images found</div>
//       )
//     }
    
// }

// export default Photo