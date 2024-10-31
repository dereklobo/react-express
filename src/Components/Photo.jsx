import ImageCard from "./ImageCard"
import PhotoSkeleton from "./PhotoSkeleton"

const Photo = ({data, isLoading}) => {
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="grid md:grid-cols-3 gap-4">
          {/* // iterate over images  */}
          { !isLoading && !data ? <PhotoSkeleton items={3} /> : data && data.map((photo, index) =>
            <ImageCard photo={photo} key={index} />
          )}
          
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