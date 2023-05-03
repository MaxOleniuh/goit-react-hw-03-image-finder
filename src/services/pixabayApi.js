import axios from 'axios';

export const getSearchedImagesApi = async (q, page = 1) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${q}&page=1&key=35259660-b4522dcf8b654a7c371bdf25f&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
