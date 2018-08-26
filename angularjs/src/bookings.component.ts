import { ServiceBus } from './service-bus';

export const bookingsComponent: angular.IComponentOptions = {
    controller: ['serviceBus', '$scope', '$location', function(serviceBus: ServiceBus, $scope: angular.IScope, $location: angular.ILocationService) {
        const that = this;

        this.title = 'Your Bookings';

        this.bookings = [
            { id: '4711', from: 'Graz', to: 'New York', date: new Date() },
            { id: '4712', from: 'New York', to: 'Graz', date: new Date() }
        ];

        this.select = function(b) {
            const data = {
                domainEvent: 'booking-selected',
                booking: b
            }
            serviceBus.send({ type: 'message', data });
        }

        serviceBus.registerFor('appState', msg => {
            console.debug('got appState in AngularJS component', msg.data);
            that.title = msg.data.passenger.name + "'s Bookings";
            $scope.$digest();
        });

        $scope.$on('$locationChangeSuccess', () => {
            this.show = location.hash === '#/booking-list';
        });
        
        
    }],
    template: `
    <div style="border: dashed 5px gray; padding: 10px;" ng-if="$ctrl.show">

        <div style="margin-bottom:10px;">
            <img src="assets/img/angularjs.png" height="50">
        </div>

        <div class="card">

            <div class="header">
                <h2 class="title">{{$ctrl.title}}</h2>
            </div>
            <div class="content">
    
                <ul ng-repeat="b in $ctrl.bookings" class="list-group">
                    <li class="list-group-item">
                        <a ng-click="$ctrl.select(b)">{{b.id}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>        
    `
};