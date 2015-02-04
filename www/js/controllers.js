angular.module('starter.controllers', [])

.controller('AddUserCtrl', function($scope, Contacts,  $state, ngDialog) {
$scope.contacts= Contacts.all();
$scope.newContact={};
  $scope.addContact = function () {
    if($scope.newContact.name){
     //alert("2iii" + $scope.contacts.length);
     //alert("22ii" +JSON.stringify($scope.contacts[$scope.contacts.length-1]));
    $scope.newContact.id = $scope.contacts[$scope.contacts.length-1].id+1;
    $scope.newContact.url = 'img/profilepic2.png';
    //alert("3ii" + JSON.stringify($scope.newContact));
    $scope.contacts.push($scope.newContact);
    $scope.newContact={};
    $state.go('tab.contacts');
  }
  else{

     ngDialog.open({
                template: 'Contact Name is required.',
                scope: $scope,
                plain:true,
                className: 'ngdialog-theme-plain'

      });

  }
  }

  $scope.resetForm = function(){
     $scope.newContact={};
  }

})

.controller('ContactsCtrl', function($scope, Contacts,  $state) {
  $scope.contacts= Contacts.all();
  $scope.test = function(){
    var test = Contacts.all();
    alert(JSON.stringify(test));
  }
  
  $scope.remove = function(contact) {
    Contacts.remove(contact);
  }

  $scope.detailInfo = function(contact){
    alert("in fun");

        $state.go('tab.contact-detail');
  }
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts, ngDialog) {
  $scope.contact = Contacts.get($stateParams.contactId);
  $scope.editing = false;
  $scope.remove = function(contact) {
    //alert(JSON.stringify(contact));
    Contacts.remove(contact);

    ngDialog.open({
                template: 'Contact Removed',
                scope: $scope,
                plain:true,
                className: 'ngdialog-theme-plain'

      });
  }
   //alert("in contacts" + JSON.stringify($scope.contact));
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
