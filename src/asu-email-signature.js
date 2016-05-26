angular.module('emailSignatureBranding', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name = 'Full Name';
    $scope.title = '';
    $scope.university = 'Arizona State University';
    $scope.unit = 'College of Liberal Arts and Sciences';
    $scope.address1 = 'P.O. Box 876505';
    $scope.address2 = '';
    $scope.address3 = 'Tempe, AZ 85287-6505';
    $scope.phone = '';
    $scope.mobile = '';

    $scope.checkMobile = function() {
      $scope.mobile = $scope.mobile_input != ''
        ? '| C: ' + $scope.mobile_input
        : '';

      if ($scope.phone == '') {
        $scope.mobile = $scope.mobile.replace(/^\| /, '');
      }
    }

    $scope.checkPhone = function() {
      $scope.phone = $scope.phone_input != ''
        ? 'P: ' + $scope.phone_input
        : '';
    }
  }]);
