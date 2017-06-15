using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using People.Data;

namespace WebApplication10.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult People()
        {
            return View();
        }

        public ActionResult GetPeople()
        {
            PeopleRepository repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            return Json(repo.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Add(person);
        }

        [HttpPost]
        public void UpdatePerson(Person person)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Update(person);
        }

        [HttpPost]
        public void DeletePerson(int personId)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Delete(personId);
        }

        public void DeleteAll(List<int> personIds)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            personIds.ForEach(repo.Delete);
        }

    }
}