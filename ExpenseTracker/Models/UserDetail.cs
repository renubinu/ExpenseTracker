using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace ExpenseTracker.Models
{
    public class UserDetail
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string UserName { get; set; }

        public string Address { get; set; }

        [Required]
        public string PhoneNo { get; set; }

        [Required]
        public string Email { get; set; }

        public string Remark { get; set; }
    }

    public class ShopDetails
    {
        [Key]
        public int ShopId { get; set; }

        [Required]
        public string ShopName { get; set; }

        //public string Location { get; set; }

        public string Description { get; set; }

    }

    public class ExpenseDetails
    {

        [Key]
        public int ExpenseId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public string BillNo { get; set; }

        public string Shop { get; set; }

        [Required]
        public string Amount { get; set; }

        public string Description { get; set; }
    }
}