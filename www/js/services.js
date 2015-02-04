angular.module('starter.services', [])

.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  var contactList = [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'abc street'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: '007 street'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Baking pie street'},
    {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'xyz court'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'White house'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'CN tower'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Buckingham Palace'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Sherlock Homes street'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Hobbit Shaire'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Kingdom of dawfs'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Castle 223 runways'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: '6670 Young Street'},
  ];

  return {
    all: function() {
      return contactList;
    },
    remove: function(contact) {
      // alert(JSON.stringify(contact));
      contactList.splice(contactList.indexOf(contact), 1);
    },
    get: function(contactId) {
      for (var i = 0; i < contactList.length; i++) {
        if (contactList[i].id === parseInt(contactId)) {
          return contactList[i];
        }
      }
      return null;
    }
  }
})
