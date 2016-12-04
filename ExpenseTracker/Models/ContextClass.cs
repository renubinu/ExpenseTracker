using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
namespace ExpenseTracker.Models
{
    public class ContextClass : DbContext
    {
        public DbSet<UserDetail>UserContext { get; set; }

        public DbSet<ShopDetails> ShopContext { get; set; }

        public DbSet<ExpenseDetails> ExpenseContext { get; set; }
    }
}