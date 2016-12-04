app.controller('ShopControllers', function ($scope, ShopService)
    //{
    //app.controller('ShopControllers',['$scope','$ShopService',function($scope,$ShopService)
{
    // debugger;
    GetShop();

    function GetShop()
    {
        //  debugger;
        var shopdata = ShopService.getShopDetails();
        shopdata.then(function (shop) {
            $scope.shop = shop.data;
        }, function () {
            alert("Error in getting Shop Details");
        });
    }
    function ClearField()
    {
        $scope.ShopName = "";
        $scope.Description = "";
    }

    $scope.editShop = function (shop)
    {
        debugger;
        
        $scope.shopId = shop.ShopId;
        $scope.shopname = shop.ShopName;
        $scope.description = shop.Description;
        $("#shopModal").modal();
        $scope.action = "Update";
        $("#AddShopId").text('Update');
        $scope.ClearField();
        // var modalId = $("#shopModal");
        // modalId.modal('hide');
    }

   

    $scope.AddorUpdateShop=function()
    {
        debugger;
        var shop = {
            ShopId:$scope.shopId,
            ShopName: $scope.shopname,
            Description: $scope.description
        };
        var action = $scope.action;
        if(action=="Update")
        {
            debugger;
            var response = ShopService.UpdateShop(shop);
            response.then(function (msg) {
                GetShop();
                ClearField();
                var modalId = $("#shopModal");
                modalId.modal('hide');
                alert(msg.data);
               // toastr.success("Shop Updated Successfully");
                $("#AddShopId").text('Add');
               
            });
           
        }
        else
        {
            var response = ShopService.AddShopData(shop);

            response.then(function (msg) {
            
               ClearField();
                GetShop();
                
               // toastr.success("Shop Added Successfully");
                var $modal = $('#shopModal');
                $modal.modal('hide');
                alert(msg.data);

            });
        }
    }
    $scope.deleteShop = function (x)
    {
        debugger;
        var shopData = ShopService.DeleteShop(x.ShopId);
        shopData.then(function (msg) {
            //toastr.success("Shop Deleted Successfully");
           alert(msg.data);
            GetShop();
        },function()
        {
            alert("Error in deleting User");
        
        });
    }


    //$scope.deleteShop = function (x) {

    //    toastr.success("Delete all?", "<br /><br /><button type='button' class='btn clear'>Yes</button>", {
    //        closeButton: false,

    //        onClick: function () {
    //          //  var nodeData = scope.$modelValue;
    //            //if (nodeData.nodes.length > 0) {
    //            //    toastr.error('Cant delete Sub levels available :', 'Warning', {
    //            //        closeButton: true
    //            //    });
    //            //} else {
    //                debugger;
    //             //   var shopData = ShopService.DeleteShop(x.ShopId);

    //                ShopService.DeleteShop(x.ShopId).success(function (data) {
    //                    scope.remove();
    //                    toastr.success(data.message, 'Message', {
    //                        closeButton: true
    //                    });
    //                }).error(function (err) {
    //                    toastr.error(err, 'Warning', {
    //                        closeButton: true
    //                    });
    //                });
    //           // }
    //        }
    //    })
    //}
});

  