myapp.controller('rolesController', function($scope, resultService, headerService, indexService, $cookies, $cookieStore) {
    $scope.edit = false;
    var resultArray = [];

    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


    $scope.checks = [{ id: 1, text: "Role1" },
        { id: 2, text: "Role2" },
        { id: 3, text: "Role3" },
        { id: 4, text: "Role4" },
        { id: 5, text: "Role5" },
        { id: 6, text: "Role6" }
    ];
    $scope.colHeaders = ["Requester", "Approver", "Viewer"];
    $scope.rowHeaders = ["Save", "Edit", "Delete"];
    $scope.rowCols = {
        colHeaders: $scope.colHeaders,
        rowHeaders: $scope.rowHeaders
    }
    headerService.setHeaderInfo($scope.rowCols);
    $scope.result = {};
    $scope.finalArray = [];
    $scope.accessObj = { action: "", actor: "", exists: false }
    $scope.init = function() {
        for (var i = 0; i < $scope.colHeaders.length; i++) {
            for (var j = 0; j < $scope.rowHeaders.length; j++) {
                $scope.accessObj = { action: "", actor: "", exists: false }
                $scope.accessObj.action = $scope.rowHeaders[j];
                $scope.accessObj.actor = $scope.colHeaders[i];
                $scope.finalArray.push($scope.accessObj);
            }
        }
        console.log($scope.finalArray);
        console.log(resultService.getInfo());
        if (resultService.getInfo() != null || '') {
            console.log('Edit Data');
            $scope.edit = true;
            $scope.result.status = resultService.getInfo().status;
            $scope.result.user.checks = resultService.getInfo().user.checks;
            $scope.result.accessProperty = resultService.getInfo().accessProperty;
        } else {
            $scope.result.status = '';
        }
    }

    $scope.getRowData = function(rowName) {
        var temp = [];
        for (var i = 0; i < $scope.finalArray.length; i++) {
            if ($scope.finalArray[i].action == rowName) {
                temp.push($scope.finalArray[i]);
            }
        }
        return temp;
    }
    $scope.result.user = {
        checks: []
    };



    $scope.result.accessProperty = [];
    $scope.result.status = '';
    $scope.submit = function() {
        oldItems.push($scope.result);
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
        }
    }
    $scope.submitEdit = function() {
        if (typeof(Storage) !== "undefined") {
            oldItems = JSON.parse(localStorage.getItem('itemsArray'));
            console.log('OldItems:', oldItems[indexService.getIndexInfo()]);

            console.log('position:', indexService.getIndexInfo());
            oldItems.splice(indexService.getIndexInfo(), 1);
            console.log(oldItems);
            oldItems.splice(indexService.getIndexInfo(), 0, $scope.result);
            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
        }
    }
});