const API_KEY = 'e3b983752b12d83fc621cccbbaf32602';

const data = {
  method: 'flickr.people.getPublicPhotos',
  api_key: API_KEY,
  user_id: '65789667@N06',
  per_page: '100',
  extras: 'owner_name,url_m',
  format: 'json',
  nojsoncallback: '1',
};

const parameters = new URLSearchParams(data);

export const flickr_url = `https://api.flickr.com/services/rest/?${parameters}`;
