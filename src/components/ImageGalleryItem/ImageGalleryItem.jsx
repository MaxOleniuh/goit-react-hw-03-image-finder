import { ItemStyled, ImageStyled } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <ItemStyled className="gallery-item">
      <ImageStyled src={webformatURL} alt='' />
    </ItemStyled>
  );
};
export default ImageGalleryItem;
