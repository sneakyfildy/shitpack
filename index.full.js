const done = require('./dist/demo.bundle.js');
console.log(done === 'done');

// will trigger an error because angular doesn't have jquery
try {
    angular.element('.shitpack');
} catch (err) {
    console.error(err);
}

angular.module('shipack', ['ui.sortable'])
    .component('shipack', {
        template: `
<ul ui-sortable ng-model="$ctrl.items">
    <li ng-repeat="item in $ctrl.items">{{item}}</li>
</ul>`,
        controller: function() {
            this.items = [1, 2, 3, 4, 5];
        }
    });


angular.element(document).ready(function () {
    angular.bootstrap(document, ['shipack']);
});
