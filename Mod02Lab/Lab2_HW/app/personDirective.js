app.directive('persons', personDirective);

function personDirective() {
    return {
        restrict: 'E', 
        replace: true,
        scope: {
            persons: '=', 
            action: '&' 
        },
        template: 
            `
            <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Nationality</th>
                    <th>Dates</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="person in persons"
                ng-mouseenter="hover=true" ng-mouseleave="hover=false" ng-class="{silver: hover}">
                    <td>{{person.name}}</td>
                    <td>{{person.nationality}}</td>
                    <td>{{person.date}}</td>
                    <td>
                        <button class="btn btn-primary"  ng-click="action({person: person})">
                            Details
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
            `
    }
}