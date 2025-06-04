using Microsoft.AspNetCore.DataProtection.KeyManagement;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run(async (HttpContext context) =>
{
    if (context.Request.Method == "GET")
    {
        if (context.Request.Path.StartsWithSegments("/"))
        {
            await context.Response.WriteAsync($"The method is: {context.Request.Method}.\r\n");
            await context.Response.WriteAsync($"The Url is: {context.Request.Path}.\r\n");
            await context.Response.WriteAsync("\r\nHeaders:\r\n");

            foreach (var key in context.Request.Headers.Keys)
            {
                await context.Response.WriteAsync($"{key}: {context.Request.Headers[key]}\r\n");
            }
        }
        else if (context.Request.Path.StartsWithSegments("/employees"))
        {
            var employees = EmployeesRepository.GetAllEmployees();

            foreach (var employee in employees)
            {
                await context.Response.WriteAsync($"{employee.Name}: {employee.Position}\r\n");
            }
        }
    }
    
   



});

app.Run();

static class EmployeesRepository
{
    private static List<Employee> employees = new List<Employee>
    {
        new Employee(1, "John Doe", "Developer", 60000),
        new Employee(2, "Bob", "Designer", 55000),
        new Employee(3, "Charlie", "Manager", 70000)
    };

    public static List<Employee> GetAllEmployees() => employees;

}

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public double Salary { get; set; }

    public Employee(int id, string name, string position, double salary)
    {
        Id = id;
        Name = name;
        Position = position;
        Salary = salary;
    }
}
