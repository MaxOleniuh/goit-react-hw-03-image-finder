import { ItemStyled, ImageStyled } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, openModal, tags, largeImageURL }) => {
  return (
    <ItemStyled onClick={() => openModal(largeImageURL, tags)}>
      <ImageStyled src={webformatURL} alt={tags} />
    </ItemStyled>
  );
};
export default ImageGalleryItem;
