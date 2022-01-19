using Microsoft.AspNetCore.Mvc;
using Mission3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Grade()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Grade(GradeModel model)
        {
            return View();
        }
    }
}
