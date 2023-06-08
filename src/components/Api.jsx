import axios from 'axios';

export const fetchData = async (inputValue, page, quantityElements) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=34989150-f6282d23d45a19c7980767166&image_type=photo&orientation=horizontal&per_page=${quantityElements}&safesearch=true`
  );
  return response;
};
