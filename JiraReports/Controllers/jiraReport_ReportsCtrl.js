GlobalModule.controller('ReportsCtrl', function ($scope, $http) {
    //*************************model

    //*****************************************
    // 1 for report by bugs
    // 2 for report by activity types
    //*******************************************
    $scope.reportBy = 1;

    //****************** Events
    $scope.test = function () { alert($scope.reportBy); };
});