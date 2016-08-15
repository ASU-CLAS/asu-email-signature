angular.module('emailSignatureBranding', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name       = 'Full Name';
    $scope.title      = 'Title';
    $scope.phone      = '';
    $scope.mobile     = '';
    $scope.fax     = '';
    $scope.selectables = [
        { label: 'Alameda', value: 'alameda.gif'},
        { label:'Brookside', value:'brookside.gif'},
        { label:'Riverbend', value:'riverbend.gif'}

    ];

    $scope.checkMobile = function() {
      $scope.mobile = '';

      if ($scope.mobile_input) {
        $scope.mobile = '| C: ' + $scope.mobile_input;

        if ($scope.phone == undefined || $scope.phone == '') {
          $scope.mobile = $scope.mobile.replace(/^\| /, '');
        }
      }
    }
    
    $scope.checkFax = function() {
      $scope.fax = '';

      if ($scope.fax_input) {
        $scope.fax = '| F: ' + $scope.fax_input;

        if ($scope.fax == undefined || $scope.fax == '') {
          $scope.fax = $scope.fax.replace(/^\| /, '');
        }
      }
    }

    $scope.checkPhone = function() {
      $scope.phone = '';

      if ($scope.phone_input) {
        $scope.phone = 'P: ' + $scope.phone_input;
      }
    }

    $scope.checkPhoneNumbers = function() {
      $scope.checkPhone();
      $scope.checkMobile();
      $scope.checkFax();
    }
    
    
  }]);



