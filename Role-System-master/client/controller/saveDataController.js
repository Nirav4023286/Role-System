myapp.controller('saveDataController', function($scope, resultService, headerService, indexService, $cookies, $cookieStore) {

    var self = this;

    var y = resultService.getInfo();

    if (typeof(Storage) !== "undefined") {
        var obj = localStorage.getItem('itemsArray');
    }
    $scope.roles = JSON.parse(obj);

    $scope.delete = function(index) {
        if (typeof(Storage) !== "undefined") {
            oldItems = JSON.parse(localStorage.getItem('itemsArray'));
            console.log('OldItems:' + oldItems[index]);

            console.log('position:', index);
            oldItems.splice(index, 1);
            console.log(oldItems);
            localStorage.setItem('itemsArray', JSON.stringify(oldItems));
            if (typeof(Storage) !== "undefined") {
                obj = localStorage.getItem('itemsArray');
            }
            $scope.roles = JSON.parse(obj);
        }
    }
    $scope.edit = function(index) {
        if (typeof(Storage) !== "undefined") {
            oldItems = JSON.parse(localStorage.getItem('itemsArray'));
            console.log('OldItems:' + oldItems[index]);
            resultService.setInfo(oldItems[index]);
            indexService.setIndexInfo(index);
            // var checked=oldItems[index].user.checks;
            // resultService.setInfo(checked);

            var access = oldItems[index].accessProperty;
            access.forEach(function(data) {
                if (data.action == "Edit") {
                    if (data.actor == "Approver") {
                        console.log('Edit : Approver');
                    }
                    if (data.actor == "Requester") {
                        console.log('Edit : Requester');
                    }
                    if (data.actor == "Viewer") {
                        console.log('Edit : Viewer');
                    }
                }

                if (data.action == "Save") {
                    if (data.actor == "Approver") {
                        console.log('Save : Approver');
                        self.saver = 'Approver';
                    }
                    if (data.actor == "Requester") {
                        console.log('Save : Requester');
                        self.saver = 'Requester';
                    }
                    if (data.actor == "Viewer") {
                        console.log('Save : Viewer');
                        self.saver = 'Viewer';
                    }
                }

                if (data.action == "Request") {
                    if (data.actor == "Approver") {
                        console.log('Request : Approver');
                    }
                    if (data.actor == "Requester") {
                        console.log('Request : Requester');
                    }
                    if (data.actor == "Viewer") {
                        console.log('Request : Viewer');
                    }
                }


                if (data.action == "Delete") {
                    if (data.actor == "Approver") {
                        console.log('Delete : Approver');
                    }
                    if (data.actor == "Requester") {
                        console.log('Delete : Requester');
                    }
                    if (data.actor == "Viewer") {
                        console.log('Delete : Viewer');
                    }
                }



            });

            console.log('position:', index);
        }
    }





    console.log(obj);
    // console.log(y);

});