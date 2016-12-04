app.service("ShopService", function ($http) {
    this.getShopDetails = function()
    {
     //   debugger;
        return $http.get("Shop/GetShopDetails");
    }
    this.AddShopData = function (shop) {
        debugger;
        var response = $http({
            method: "post",
            url: "Shop/AddShop",
            data: JSON.stringify(shop),
            dataType: "json"
        });
        return response;
    }

    this.UpdateShop= function (shop)
    {
        var response = $http({
            method: "post",
            url: "Shop/UpdateShop",
            data: JSON.stringify(shop),
            dataType: "json"
        });
        return response;
    }

    this.DeleteShop=function(shopId)
    {
        debugger;
        var response = $http({
            method: "post",
            url: "Shop/DeleteShop",
            params: {
                shopId: JSON.stringify(shopId)
            }
        });
        return response;
    }

   
});

