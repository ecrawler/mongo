/**
* Place.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
       slug: 'STRING',
       title: 'STRING',
       description: 'STRING',
       latitue : 'DECIMAL',
       longitude: 'DECIMAL',
       url: 'STRING',
       content: 'TEXT',
       country: {
         model: 'country'
       },
       thumb: {
         model:'thumb'
       },
       photos: {
         collection: 'photo',
         via:'place'
       },
       topics: {
         collection:'topic',
         via: 'places'
       }
  }
};
