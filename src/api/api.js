import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID YvQYQMvRwoXYUEikCkp3f1X8h7mbf-BQ6JzwKp3s2CE"
      }
})