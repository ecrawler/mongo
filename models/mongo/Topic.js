/**
* Topic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'STRING'      

    },
    description: 'STRING',
    slug: 'STRING',
    feeds: {
       collection: 'feed',
       via: 'topics'
    },
    musics: {
       collection: 'music',
       via: 'topics'
    },
    news: {
       collection: 'news',
       via: 'topics'
    },
    movies: {
       collection: 'movie',
       via: 'topics'
    },
    places: {
       collection: 'place',
       via: 'topics'
    },
    products: {
       collection: 'product',
       via: 'topics'
    },
    books: {
       collection: 'book',
       via: 'topics'
    },
    clips: {
      collection:'clip',
      via: 'topics'
    },
    jobs: {
       collection: 'job',
       via: 'topics'
    },
    categories : {
      collection:'category',
      via: 'topics'
    }
  }
};
