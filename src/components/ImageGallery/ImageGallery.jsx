import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ListStyled} from './ImageGallery.styled';
const ImageGallery = ({images, openModal}) => {
  return (

         <ListStyled>{images.map((({ webformatURL, id }) => <ImageGalleryItem key={id} webformatURL={webformatURL} openModal={openModal} />))}
     </ListStyled>

   )
}
export default ImageGallery;