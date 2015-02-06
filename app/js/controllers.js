angular.module('starter.controllers', [])

.controller('TabCtrl', function($scope, $stateParams, Contacts) {
$scope.contacts = Contacts.all();
        //alert("in contacts" + JSON.stringify($scope.contact));
})



.controller('AddUserCtrl', function($scope, Contacts, $state, ngDialog) {
    
    $scope.newContact = {};
    $scope.addContact = function() {
        if ($scope.newContact.name) {
            for(var i=0; i<$scope.contacts.length; i++){
                if(($scope.newContact.name).toLowerCase() == ($scope.contacts[i].name).toLowerCase()){
                      ngDialog.open({
                template: 'This contact already exists',
                scope: $scope,
                plain: true,
                className: 'ngdialog-theme-plain'

            });
            $scope.newContact = {};
            break;
                }


            }
            if ($scope.newContact.name) {
            //alert("2iii" + $scope.contacts.length);
            //alert("22ii" +JSON.stringify($scope.contacts[$scope.contacts.length-1]));
            $scope.newContact.id = ($scope.contacts.length > 0 ? ($scope.contacts[$scope.contacts.length - 1].id + 1):(0));
            $scope.newContact.url = 'img/profilepic2.png';
            //alert("3ii" + JSON.stringify($scope.newContact));
            $scope.contacts.push($scope.newContact);
            $scope.newContact = {};
            $state.go('tab.contacts');
        }
        } else {

        ngDialog.open({
                template: 'Contact Name is required.',
                scope: $scope,
                plain: true,
                className: 'ngdialog-theme-plain'

            });

        }
    }
    $scope.resetForm = function() {
        $scope.newContact = {};
    }


})

.controller('ContactsCtrl', function($scope) {
    // $scope.test = function() {
    //     var test = Contacts.all();
    //     alert(JSON.stringify(test));
    // }
    $scope.orderList = "name";
    $scope.remove = function(contact) {
        //Contacts.remove(contact);
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
    }

    // $scope.detailInfo = function(contact) {
    //     alert("in fun");

    //     $state.go('tab.contact-detail');
    // }
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts, ngDialog) {
    $scope.contact = Contacts.get($stateParams.contactId);
    $scope.editing = false;
    $scope.remove = function(contact) {
            //alert(JSON.stringify(contact));
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);

            ngDialog.open({
                template: 'Contact Removed',
                scope: $scope,
                plain: true,
                className: 'ngdialog-theme-plain'

            });
        }
        //alert("in contacts" + JSON.stringify($scope.contact));
})

