import ImageGalleryItem from "components/ImageGallertItem/ImageGalleryItem";
const ImageGallery = ({images}) => {
  return (
    <ul>{images.map((({webformatURL, id}) => <ImageGalleryItem key={id} webformatURL={webformatURL} />))}
     </ul>
   )
}
export default ImageGallery;