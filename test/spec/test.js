/*global describe, it */
'use strict';

(function () {

////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////
describe('AddUserCtrl', function() {
 
  beforeEach(angular.mock.module('starter.controllers'));
    var $scope, ngDialog, $state;
    var controller;


 beforeEach(angular.mock.module(function ($provide) {
    $provide.value('$state', {
        //someVariable: 1
    });
  }));

 beforeEach(angular.mock.module(function ($provide) {
    $provide.value('ngDialog', {
        //someVariable: 1
    });
  }));

    describe('$scope.addContact', function() {
    var $scope, controller, Contacts, $state;


     beforeEach(inject(function($rootScope, $controller) {
      $scope = {};
      ngDialog = {
      open: function () {
       
      }
    };
    spyOn(ngDialog, 'open');

    $state = {
      go: function () {
       
      }
    };
    spyOn($state, 'go');

    // Create a new scope that's a child of the $rootScope
    $scope = $rootScope.$new();
    // Create the controller
    controller = $controller('AddUserCtrl', { $scope: $scope, Contacts:Contacts, ngDialog:ngDialog, $state: $state});


    $scope.contacts= [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'abc street'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: '007 street'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Baking pie street'},
    
  ];

  }));


    it('Name is entered', function() {
      var len = $scope.contacts.length;

      $scope.newContact.name = 'longerthaneightchars';
      $scope.addContact();
      expect($scope.contacts.length).toEqual(len +1);
    });

    it('Name is not entered', function() {
      var len = $scope.contacts.length;

      $scope.newContact.name = '';
      $scope.addContact();
      expect($scope.contacts.length).toEqual(len);
    });

  //In this case if the same name is enetered twice then the 
  //second function call should not increment the contact list.
    it('Same name is entered twice', function() {
      var len = $scope.contacts.length;

      $scope.newContact.name = 'Kevin Kam';
      $scope.addContact();
      $scope.newContact.name = 'Kevin Kam';
      $scope.addContact();
      expect($scope.contacts.length).toEqual(len+1);
    });
  });

});
///////////////////////////////////////////////
describe('ContactsCtrl', function() {
 
  beforeEach(angular.mock.module('starter.controllers'));
    var $scope;
    var controller;


    describe('$scope.remove', function() {
    var $scope, controller;


     beforeEach(inject(function($rootScope, $controller) {
      $scope = {};

    // Create a new scope that's a child of the $rootScope
    $scope = $rootScope.$new();
    // Create the controller
    controller = $controller('ContactsCtrl', { $scope: $scope});

    $scope.contacts= [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'abc street'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: '007 street'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'img/profilepic2.png', address: 'Baking pie street'},
    
  ];

  }));

    it('Contact to be deleted', function() {
      var len = $scope.contacts.length;
     console.log($scope.contacts.length);
      $scope.remove($scope.contacts[1]);
      console.log($scope.contacts.length);
      expect($scope.contacts.length).toEqual(len-1);
    });


  });

});

///////////////////////////////////////////////
})();

