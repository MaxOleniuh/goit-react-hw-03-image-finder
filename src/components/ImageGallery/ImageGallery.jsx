import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ListStyled } from './ImageGallery.styled';
const ImageGallery = ({images}) => {
  return (
    <ListStyled>{images.map((({webformatURL, id}) => <ImageGalleryItem key={id} webformatURL={webformatURL} />))}
     </ListStyled>
   )
}
export default ImageGallery;