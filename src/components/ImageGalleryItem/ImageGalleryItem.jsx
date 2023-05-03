import { ItemStyled, ImageStyled } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, openModal }) => {
  return (
    <ItemStyled onClick={() => openModal({webformatURL})}>
      <ImageStyled src={webformatURL} alt='' />
    </ItemStyled>
  );
};
export default ImageGalleryItem;
