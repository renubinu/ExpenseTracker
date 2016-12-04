using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseTracker.Models;
namespace ExpenseTracker.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UserDetail()
        {
            return View();
        }

        public JsonResult GetAllUser()
        {
            ContextClass objContext = new ContextClass();
            var userdata = objContext.UserContext.ToList();
            return Json(userdata, JsonRequestBehavior.AllowGet);
        }

        public string AddUser(UserDetail user)
        {
            if (user != null)
            {
                ContextClass obj = new ContextClass();
                obj.UserContext.Add(user);
                obj.SaveChanges();
                return "New User Added Successfully";
            }
            else
            {
                return "Error in Adding User";
            }

        }

        public string UpdateUser(UserDetail user)
        {
            if(user!=null)
            {
                ContextClass obj = new ContextClass();
                int userId = Convert.ToInt32(user.UserId);
                UserDetail _userdetail = obj.UserContext.Where(u => u.UserId == userId).FirstOrDefault();
                _userdetail.UserName = user.UserName;
                _userdetail.Address = user.Address;
                _userdetail.PhoneNo = user.PhoneNo;
                _userdetail.Email = user.Email;
                _userdetail.Remark = user.Remark;
                obj.SaveChanges();
                return "User detail Update Successfully";
            }
            else
            {
                return "Invalid Records";
            }
        }

        public JsonResult  GetUserbyId(string userId)
        {
          
                    int _userId = Int32.Parse(userId);
                    ContextClass obj = new ContextClass();
                    var _userdata = obj.UserContext.Find(_userId);
                    return Json(_userdata, JsonRequestBehavior.AllowGet);
                
        }
        

        public string DeleteUser(string userId)
        {
            if (!string.IsNullOrEmpty(userId))
            {
                try
                {
                    int _userId = Int32.Parse(userId);
                    ContextClass obj = new ContextClass();
                    var _user = obj.UserContext.Find(_userId);
                    obj.UserContext.Remove(_user);
                    obj.SaveChanges();
                    return "User deleted Successfully";
                }
                catch (Exception)
                {
                    return "User Detail Not Found";
                }
            }
            else
            {
                return "Invalid Operation";
            }
        }


    }
}