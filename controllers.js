// CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'getCity', '$location', function($scope, getCity, $location){
    
    $scope.city = getCity.city;
    
    $scope.$watch('city', function(){
        getCity.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
    
}]);


weatherApp.controller('forecastController', ['$scope', '$routeParams', 'getCity', 'weatherService', function($scope, $routeParams, getCity, weatherService){
    
    $scope.city = getCity.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.converToCelcius = function(degK) {
        return Math.round(degK - 273.15);
    };
    
    $scope.converToDate = function(dt){
        return new Date(dt * 1000);
    };

}]);
