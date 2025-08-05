
namespace WebApi.Models
{
    public interface IEmployeesRepository
    {
        abstract void AddEmployee(Employee? employee);
        abstract bool DeleteEmployee(Employee? employee);
        abstract Employee? GetEmployeeById(int id);
        abstract List<Employee> GetEmployees();
        abstract bool UpdateEmployee(Employee? employee);
    }
}