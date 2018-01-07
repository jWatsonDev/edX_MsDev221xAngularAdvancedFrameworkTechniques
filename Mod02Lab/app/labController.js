angular.module('app')
.controller('LabController', [ 
    function () { 
        var vm = this; 
        vm.show = show; 
        vm.person = {
            name: 'Nina Watson', 
            penName: 'Hello Watson'
        };

        function show() {
            alert(JSON.stringify(vm.person));
        }
    } 
]);

