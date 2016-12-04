
app.service("ExpenseTrackerService", function ($http) {
    this.getUser = function () {
        debugger;
        return $http.get("User/GetAllUser");
    }


    //this.getShopDetails = function () {
    //    debugger;
    //    return $http.get("Shop/GetShopDetails");
    //}


    this.AddUserData = function (user)
    {
        debugger;
        var response = $http({
            method: "post",
            url: "User/AddUser",
            data: JSON.stringify(user),
            dataType: "json"
        });
        return response;
    }

//Delete User details
    this.DeleteUser=function(userId)
    {
        debugger;
        var response = $http({
            method: "post",
            url: "User/DeleteUser",
            params:{ 
            userId: JSON.stringify(userId)
        }
           
        });
        return response;
 }
    
    // Get user by UserId
    this.getUserbyId=function(userId)
    {
        debugger;
        var response = $http({
            method: "post",
            url: "User/GetUserbyId",
            params: {
                userId: JSON.stringify(userId)
            }
        });
        return response;
    }

    this.UpdateUser=function(user)
    {
        debugger;
        var response = $http({
            method: "post",
            url: "User/UpdateUser",
            data: JSON.stringify(user),
            dataType:"json"

        });
        return response;
    }

    });

    
