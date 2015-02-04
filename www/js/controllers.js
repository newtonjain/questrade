angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Contacts,  $state) {
$scope.contacts= Contacts.all();
  $scope.addContact = function (name,email,phone,address) {
    var contact = {name,email,phone,address};
//    alert("2" + JSON.stringify(contact));
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
    $state.go('tab.contacts');
  };

})

.controller('ContactsCtrl', function($scope, Contacts,  $state) {
  $scope.contacts= Contacts.all();
  $scope.remove = function(contact) {
    Contacts.remove(contact);
  }

  $scope.detailInfo = function(contact){
    alert("in fun");

        $state.go('tab.contact-detail');
  }
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts, ngDialog) {
  // alert("in contacts");
  $scope.contact = Contacts.get($stateParams.contactId);

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
