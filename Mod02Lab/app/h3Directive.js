angular.module('app').directive('h3Directive', h3Directive);

function h3Directive() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            title: '@'
        },
        template: '<h3>{{title}}</h3>',
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.css('background-color', 'red')
            });

            element.bind('mouseleave', function () {
                element.css('background-color', 'silver')
            });
        }
    };
}
