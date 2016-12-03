app.controller("main-controller", function ($scope) {
    $scope.name = 'Milana Borsuk';

}).directive('bold', function () {

    function link(scope, element, attrs) {      

       
            element.css("color", "red");
       
    }

    return {
        link: link
    };
});