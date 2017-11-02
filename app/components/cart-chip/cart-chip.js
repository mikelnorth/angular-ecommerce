angular.module('ecommerce').component('cartChip', {
    template: "{{chipCtrl.getItems()}}",

    controller: function(cartSrvc){
        this.getItems = cartSrvc.getNumberItems
    },

    controllerAs: "chipCtrl"
})