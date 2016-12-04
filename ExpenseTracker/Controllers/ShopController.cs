using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseTracker.Models;

namespace ExpenseTracker.Controllers
{
    public class ShopController : Controller
    {
        //
        // GET: /Shop/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ShopDetail()
        {
            return View();
        }

        public JsonResult GetShopDetails()
        {
            ContextClass obj = new ContextClass();
            var data = obj.ShopContext.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);

        }
        public string AddShop(ShopDetails objShopDet)
        {
            if(objShopDet!=null)
            {
                ContextClass objContext = new ContextClass();
                objContext.ShopContext.Add(objShopDet);
                objContext.SaveChanges();
                return "Shop Details Added Successfully";
            }
            else
            {
                return "Error in adding shop details";
            }
        }

        public string UpdateShop(ShopDetails objShop)
        {
            if(objShop!=null)
            {
                ContextClass objContext = new ContextClass();
                var ShopId = objShop.ShopId;

                                ShopDetails _Shop = objContext.ShopContext.Where(u => u.ShopId == ShopId).FirstOrDefault();
                                _Shop.ShopId = objShop.ShopId;
                                _Shop.ShopName = objShop.ShopName;
                                _Shop.Description = objShop.Description;
                                objContext.SaveChanges();
                                return "Shop Updated Successfully";
            }
            else
            {
                return "Error in Updating Shop Details";
            }
        }
        public string DeleteShop(string shopId)
        {
            if(!string.IsNullOrEmpty(shopId))
            {
                try
                {
                    int _shopId = Int32.Parse(shopId);
                    ContextClass obj = new ContextClass();
                    var _shop = obj.ShopContext.Find(_shopId);
                    obj.ShopContext.Remove(_shop);
                    obj.SaveChanges();
                  return "Shop Deleted Successfully";
                    

                }
                catch (Exception ex)
                {
                    return "Invalid Shop Details";
                }
            }
            else
            {
                return "Error in deleting Shop";
            }
           
        }
	}
}