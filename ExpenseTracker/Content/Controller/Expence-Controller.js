
app.controller("ExpenseTrackerController", function ($scope, ExpenseTrackerService)
{
   // debugger;
    GetAllUser();
   
    function GetAllUser() {
    //    debugger;
        var getUserdata = ExpenseTrackerService.getUser();
        getUserdata.then(function (user) {
            $scope.user = user.data;
        }, function () {
            alert("Error in getting User Records");
        });
    }

    //function GetShop()
    //{
    //    debugger;
    //    var getshopData = ExpenseTrackerService.getShopDetails();
    //    getshopData.then(function (shop) {
    //        $scope.shop = shop.data;
    //    }, function () {
    //        alert("Error in getting Shop Details");
    //    });
    //}


    $scope.AddUser = function ()
    {
      //  debugger;
        var user = {
            UserName: $scope.UserName,
            Address: $scope.Address,
            PhoneNo: $scope.PhoneNo,
            Email: $scope.Email,
            Remark:$scope.Remark
        };
       
        var ss = ExpenseTrackerService.AddUserData(user);
        ClearField();
    }


  

    $scope.AddorUpdateUser = function ()
    {
        
       // debugger;
        var user = {
            UserId: $scope.UserId,
            UserName: $scope.UserName,
            Address: $scope.Address,
            PhoneNo: $scope.PhoneNo,
            Email: $scope.Email,
            Remark: $scope.Remark

        };


        var getUseraction = $scope.Action;
        if(getUseraction=="Update")
        {
            //user.UserId = $scope.UserId;
            var updateUserData = ExpenseTrackerService.UpdateUser(user);
         //   debugger;
                  updateUserData.then(function (msg) {
                      GetAllUser();
                      ClearField();
                      var $modal = $('#myModal');
                      $modal.modal('hide');
                     alert(msg.data);
                      //toastr.success("User Updated Successfully");

                      $scope.Action = "Add";
                      $('#AddId').text('Add');
            }, function () {
                alert("Error in Updating User");
            });
        }
        else
        {
            var getUserdata = ExpenseTrackerService.AddUserData(user);
            getUserdata.then(function (msg) {
                GetAllUser();
                ClearField();
                var $modal = $('#myModal');
                $modal.modal('hide');
               // toastr.success("User Added Successfully");

               alert(msg.data);
            }, function () {
                alert("Error in adding User");
            });
        }
    }
    function ClearFieldUser()
    {
        $scope.UserName = "";
        $scope.Address = "";
        $scope.PhoneNo = "";
        $scope.Email = "";
        $scope.Remark = "";
    }
    

    $scope.deleteUser = function (user)
    {
      //  debugger;
        var dd = $scope.Action;
        var getuserData = ExpenseTrackerService.DeleteUser(user.UserId);
        getuserData.then(function (msg) {
            alert(msg.data);
           // toastr.success("User Deleted Successfully");

            GetAllUser();
        }, function () {
            alert("Error in deleting User");

        });
    }



    $scope.editUser = function (user) {
       debugger;

     //   var getUserDatas = ExpenseTrackerService.getUserbyId(user);
      //  getUserDatas.then(function (_user) {
        //    debugger;
        //$scope.user = _user.data;

            $('#AddId').text('Update');

            $scope.UserId = user.UserId;
            $scope.UserName = user.UserName;
            $scope.Address = user.Address;
            $scope.PhoneNo = user.PhoneNo;
            $scope.Email = user.Email;
            $scope.Remark = user.Remark;
            $scope.Action = "Update";
            $("#myModal").modal();
        //Check Function
            $scope.ClearFieldUser();
      //  },
       //// function () {
       //     alert("Error in getting Records");
       // });
    }


    //$scope.editUser = function (user) {
    //    debugger;
    //    var getUserDatas = ExpenseTrackerService.getUserbyId(user);
    //   debugger;
    //   $scope.UserName = getUserDatas.UserName;  
    //    $scope.Address = getUserDatas.Address;
    //    $scope.PhoneNo = getUserDatas.PhoneNo;
    //    $scope.Email = getUserDatas.Email;
    //    $scope.Remark = getUserDatas.Remark;
    //        $scope.Action = "Update";
    //        $("#myModal").modal();
    //    }     

});

