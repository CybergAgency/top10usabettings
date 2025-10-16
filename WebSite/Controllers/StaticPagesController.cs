using Microsoft.AspNetCore.Mvc;

namespace WebSite.Controllers
{
    public class StaticPagesController : Controller
    {
        [Route("oregon")]
        public IActionResult Oregon()
        {
            return View();
        }

        [Route("indiana")]
        public IActionResult Indiana()
        {
            return View();
        }
        [Route("virginia")]
        public IActionResult Virginia()
        {
            return View();
        }
        [Route("kentucky")]
        public IActionResult Kentucky()
        {
            return View();
        }
        [Route("pennsylvania")]
        public IActionResult PA()
        {
            return View();
        }
        [Route("illinois")]
        public IActionResult Illinois()
        {
            return View();
        }
        [Route("arizona")]
        public IActionResult Arizona()
        {
            return View();
        }
        [Route("massachusetts")]
        public IActionResult Massachusetts()
        {
            return View();
        }
    }
}