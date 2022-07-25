import { toast } from 'react-toastify';

const API_KEY = "24186443-1921da3d98fb9233d7b210f5d";


export const API = (search, page) => {
    return fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
        .then(evt => {
            if (evt.ok) {
                return evt.json();
            } else {
                toast.error('sorry', {
                    duration: 2000
                })
            }
        })
        .then(evt => {
            const dates = evt.hits.map(e => {
                const data = {
                    id: e.id,
                    largeImageURL: e.largeImageURL,
                    webformatURL: e.webformatURL,
                };
                return data;
            });
            return dates;
        })
        .catch(error => {
            console.log(error);
        });

}