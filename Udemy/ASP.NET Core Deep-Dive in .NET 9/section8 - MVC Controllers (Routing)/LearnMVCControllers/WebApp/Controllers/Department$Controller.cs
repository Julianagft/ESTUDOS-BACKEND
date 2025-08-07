using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    public class DepartmentsController
    {
        [HttpGet]
        [Route("/departments")]
        public string GetDepartments() => "Departments!";

        [HttpGet]
        [Route("/departments/{id}")]
        public string GetDepartmentById(int id)
        {
            return $"Department with ID: {id}";
        }
    }
}
