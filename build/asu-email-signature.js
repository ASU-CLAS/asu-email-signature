angular.module('emailSignatureBranding', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name       = 'Full Name';
    $scope.title      = '';
    $scope.university = 'Arizona State University';
    $scope.unit       = 'College of Liberal Arts and Sciences';
    $scope.address1   = 'P.O. Box 876505';
    $scope.address2   = '';
    $scope.address3   = 'Tempe, AZ 85287-6505';
    $scope.phone      = '';
    $scope.mobile     = '';

    $scope.checkMobile = function() {
      $scope.mobile = '';

      if ($scope.mobile_input) {
        $scope.mobile = '| C: ' + $scope.mobile_input;

        if ($scope.phone == undefined || $scope.phone == '') {
          $scope.mobile = $scope.mobile.replace(/^\| /, '');
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
    }
  }]);
