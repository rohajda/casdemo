(function() {
    'use strict';

    angular
        .module('casdemoApp')
        .controller('CityController', CityController);

    CityController.$inject = ['$scope', '$state', 'City'];

    function CityController ($scope, $state, City) {
        var vm = this;

        vm.cities = [];

        loadAll();

        function loadAll() {
            City.query(function(result) {
                vm.cities = result;
                vm.searchQuery = null;
            });
        }
    }
})();
