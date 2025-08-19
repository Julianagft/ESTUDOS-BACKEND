using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    
    public class DepartmentsController
    {
            
        public string Index()
        {
            return "These are the departments.";
        }

        [Route("/departments/{id?}")]
        public string Details(int id)
        {
            return $"Department info: {id}";
        }

        [HttpPost]
        public object Create(Department? department)
        {
            return department?? new Department();
        }

        [HttpPost]
        public string Delete(int? id)
        {
            return $"Deleted department: {id}";
        }

        [HttpPost]
        public string Edit(int? id)
        {
            return $"Updated department: {id}";
        }
      
    }
}
