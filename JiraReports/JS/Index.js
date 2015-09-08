
//****************Code to set height of body according to screen
$(document).ready(function () {
    var bodyHeight = $(window).height() - ($("#DVbanner").height() + $("#DvNavigator").height() + $("#dvFooter").height() + 5);
    $("#dvBody").css("min-height", bodyHeight + "px");
});

//**************Create a namespace for app *************************
var GlobalModule = angular.module('GlobalModule', ['ngRoute']);

//****************Configuration for navigator ************************************
GlobalModule.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../Views/Reports.html',
            controller: 'ReportsCtrl'
        });
});