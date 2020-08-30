import axios from 'axios';

const URL = 'https://webcdn.17app.co/campaign/pretest/data.json';

/**
 * FETCH USERS
 */
export const getUsers = async () =>
  await axios.get(URL)
    .then(res => res)
    .catch(err => err);
