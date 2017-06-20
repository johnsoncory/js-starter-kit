import './index.css';
// jquery is required for bootstrap
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular';

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function($scope) {
  $scope.output = `You entered ${$scope.providers} providers and ${$scope.locations} locations!`;
}]);
