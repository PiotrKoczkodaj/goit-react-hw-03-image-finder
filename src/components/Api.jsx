import axios from "axios";

export const fetchData = async (inputValue) => {
    const API_KEY = '34989150-f6282d23d45a19c7980767166';
    const response = await axios.get(`https://pixabay.com/api/?q=${inputValue}&page=1&key=34989150-f6282d23d45a19c7980767166&image_type=photo&orientation=horizontal&per_page=12&safesearch=true`);
    return response
};

    