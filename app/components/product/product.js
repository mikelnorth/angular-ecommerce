angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function () {
       

    },
    controllerAs: 'productCtrl',
    // there are 4 ways of binding
    // < one way bindng, = two way binding, @ string binding, & action binding
    bindings: {
        product: "<",
        buttonLabel: '@',
        buttonAction: '&'
    }
})