'use strict';

/**
 * @ngdoc function
 * @name angApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angApp
 */
angular.module('angApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
     $scope.items = ['1', '2', '3', '2', '3', '2', '3', '2', '3', '2', '3', '2', '3'
     , '2', '3', '2', '3', '2', '3', '2', '3', '2', '3', '2', '3', '2', '3', '2', '3'
     , '2', '3', '2', '3'];


    $scope.pull = function(req, res, next){



	  	$http({
	  	method: 'GET',
	  	url: 'http://localhost:8001/about'
		}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available

	    	console.log(response.data);
	    	$scope.work = response.data;

	  	}, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  	});
	}

  });
