angular.module('app').directive('staticMessageDirective', staticMessageDirective);

function staticMessageDirective() {
    return {
        restrict: 'EA',
        template: '<h2>This is from a directive</h2>'
    };
}