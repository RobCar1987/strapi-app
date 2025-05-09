'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/google-reviews',
      handler: 'google-reviews.getReviews',
      config: {
        policies: [],
        auth: false, // o true se vuoi proteggerla
      },
    },
  ],
};
