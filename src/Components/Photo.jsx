import ImageCard from "./ImageCard"
import PhotoSkeleton from "./PhotoSkeleton"

const Photo = ({data, filterData, isLoading}) => {
  let photo = filterData && filterData.length ? filterData : data && data.length ? data : []
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="grid md:grid-cols-3 gap-4">
          {/* // iterate over images  */}
          { isLoading  ? <PhotoSkeleton items={3} /> : photo && photo.map((photo, index) =>
            <ImageCard photo={photo} key={index} />
          )}
          
      </div>
    </div>
  )
}

export default Photo