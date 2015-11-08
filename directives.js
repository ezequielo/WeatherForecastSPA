
// DIRECTIVES


weatherApp.directive('weatherInfo', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/weatherinfo.html',
        replace: true,
        scope: {
            weatherObject: '=',
            converToCelciusFnc: '&',
            converToDateFnc: '&'
        }
    }
})