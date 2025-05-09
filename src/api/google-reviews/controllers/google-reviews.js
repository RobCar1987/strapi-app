'use strict';
const axios = require('axios');

module.exports = {
  async getReviews(ctx) {
    try {
      const placeId = 'ChIJ30PIJC9XgkcRQ8xuj4zn6uc';
      const apiKey = process.env.GOOGLE_API_KEY;

      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
        params: {
          place_id: placeId,
          fields: 'reviews,rating,user_ratings_total',
          key: apiKey,
        },
      });

      ctx.send(response.data.result.reviews);
    } catch (error) {
      ctx.throw(500, 'Errore nel recupero delle recensioni');
    }
  },
};
