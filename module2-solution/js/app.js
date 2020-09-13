(function (){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buy = this;

        buy.items = ShoppingListCheckOffService.getToBuyItems();
        buy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }
    function ShoppingListCheckOffService(){
        var service=this;
        var buyList=[
        { name: "cookies", quantity: 10 },
        { name: "cokes", quantity: 2 },
        { name: "Ice Creams", quantity: 6 },
        { name: "apples", quantity: 4 },
        { name: "bananas", quantity: 7 }];
        var boughtList=[];
        service.buyItem= function (ind){
            var item=buyList[ind];
            boughtList.push(item);
            buyList.splice(ind,1);
        };
        service.getToBuyItems = function() {
            return buyList;
        };

        service.getAlreadyBoughtItems = function() {
            return boughtList;
        };
    }
})();