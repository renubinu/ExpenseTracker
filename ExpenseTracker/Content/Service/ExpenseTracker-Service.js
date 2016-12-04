app.service("ExpenseTrackerService", function ($http) {

    app.service("ShopService", function ($http) {
        this.getShopDetails = function () {
            debugger;
            return $http.get("Shop/GetShopDetails");
        }




   
});