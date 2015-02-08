angular.module('starter.controllers', [])

//Hard coded contacts are loaded from a factory called Contacts. 
.controller('TabCtrl', function($scope, $stateParams, Contacts) {
    $scope.contacts = Contacts.all();
    //alert("in contacts" + JSON.stringify($scope.contact));
})



.controller('AddUserCtrl', function($scope, Contacts, $state, ngDialog) {

    $scope.newContact = {};
    // addContact adds new contact to the list. 
    $scope.addContact = function() {
        // newContact.name is the minimum input required to create a successful new entry.
        if ($scope.newContact.name) {
            for (var i = 0; i < $scope.contacts.length; i++) {

                if (($scope.newContact.name).toLowerCase() == ($scope.contacts[i].name).toLowerCase()) {
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
                // The first contact is assigned a newContact.id = 0 and rest of the new contact ids are incremented by one.
                // This way ids are not repeated even when the contacts are deleted and new ones are added after that. 
                $scope.newContact.id = ($scope.contacts.length > 0 ? ($scope.contacts[$scope.contacts.length - 1].id + 1) : (0));
                $scope.newContact.url = 'img/profilepic2.png';
                $scope.contacts.push($scope.newContact);
                $scope.newContact = {};
                $state.go('tab.contacts');
            }
        } else {
            //Alert the user to add a new Contact name.
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

    $scope.orderList = "name";
    //Remove a specific contact from the list.
    $scope.remove = function(contact) {
        if (contact) {
            $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
        }
    }

})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts, ngDialog) {
    $scope.contact = Contacts.get($stateParams.contactId);
    $scope.editing = false;

    //Remove a specific contact from the list with a confirmation message. 
    $scope.remove = function(contact) {
        if(contact){
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);

        ngDialog.open({
            template: 'Contact Removed',
            scope: $scope,
            plain: true,
            className: 'ngdialog-theme-plain'

        });
        }
    }
})