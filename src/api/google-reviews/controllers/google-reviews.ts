// src/api/google-reviews/controllers/google-reviews.ts
import { Context } from 'koa'; // Aggiungi i tipi di Koa
import axios from 'axios';

const placeId = 'ChIJ30PIJC9XgkcRQ8xuj4zn6uc';
const apiKey = process.env.GOOGLE_API_KEY; // La tua API key di Google

export default {
  async getReviews(ctx: Context) {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
          place_id: placeId,
          fields: 'reviews,rating,user_ratings_total',
          key: apiKey,
        },
      });

      // Invia la risposta al client
      ctx.send(response.data.result.reviews);
    } catch (error) {
      console.error('Errore nel recupero delle recensioni:', error);
      ctx.throw(500, 'Errore nel recupero delle recensioni');
    }
  },
};
