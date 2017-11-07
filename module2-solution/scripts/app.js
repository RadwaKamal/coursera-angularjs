(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

   function ToBuyController(ShoppingListCheckOffService){
       var toBuy = this;

       toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
       toBuy.itemBought = function(itemIndex) {
           ShoppingListCheckOffService.moveToAlreadyBought(itemIndex);
        }  
    }

   function AlreadyBoughtController(ShoppingListCheckOffService){
       var alreadyBought = this;
       alreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();
   }

   function ShoppingListCheckOffService(){
       var service = this;

       var itemsToBuy = [
            {"name" : "cookies", "quantity": 10}, 
            {"name" : "pizza", "quantity": 5}, 
            {"name" : "fries", "quantity": 9}, 
            {"name" : "ketchup", "quantity": 8}, 
            {"name" : "juice", "quantity": 3},       
        ];
        var itemsAlreadyBought = [];

        service.moveToAlreadyBought = function(itemIndex) {
            itemsAlreadyBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        }

        service.getItemsToBuy = () => itemsToBuy;
        service.getItemsAlreadyBought = () => itemsAlreadyBought;        
   }

})();