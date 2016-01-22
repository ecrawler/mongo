/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'STRING',
    description: 'STRING',
    slug: 'STRING',
    topics : {
      collection: 'topic',
      via: 'categories'
    },
    links: {
      collection:'link',
      via:'category'
    }

  }
};
