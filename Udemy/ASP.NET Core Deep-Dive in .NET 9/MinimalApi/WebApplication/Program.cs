using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGet("/", async (HttpContext context) =>
    {
        await context.Response.WriteAsync("Welcome to the home page.");
    });

    endpoints.MapGet("/people", (Person? p) =>
    {
        return $"Id is {p?.Id}; Name is {p?.Name}";
    });

    //endpoints.MapGet("/employees", async (HttpContext context) =>
    //{
    //    // Get all of the employees' information
    //    var employees = EmployeesRepository.GetEmployees();

    //    context.Response.ContentType = "text/html";
    //    await context.Response.WriteAsync("<h2>Employees</h2>");
    //    await context.Response.WriteAsync("<ul>");
    //    foreach (var employee in employees)
    //    {
    //        await context.Response.WriteAsync($"<li><b>{employee.Name}</b>: {employee.Position}</li>");
    //    }
    //    await context.Response.WriteAsync("</ul>");

    //});

    //endpoints.MapGet("/employees/{id:int}", ([AsParameters]GetEmployeeParameter param) =>
    //{
    //    // Get a particular employee's information
    //    var employee = EmployeesRepository.GetEmployeeById(param.Id);

    //    employee.Name = param.Name;
    //    employee.Position = param.Position;

    //    return employee;

    //});

    //endpoints.MapGet("/employees/", ([FromHeader]int id) =>
    //{
    //    object identityNumber = null;
    //    var employee = EmployeesRepository.GetEmployeeById(id);

    //    return employee;

    //});

    endpoints.MapGet("/employees", ([FromQuery(Name = "id")] int[] ids) =>
    {
        var employees = EmployeesRepository.GetEmployees();
        var emps = employees.Where(x => ids.Contains(x.Id)).ToList();

        return emps;
    });

    endpoints.MapPost("/employees", (Employee employee) =>
    {
        if (employee is null || employee.Id <= 0)
        {
            return "Employee is not provided or is not valid.";
        }

        EmployeesRepository.AddEmployee(employee);
        return "Employeee added successfully.";
        
    });

    endpoints.MapPut("/employees", async (HttpContext context) =>
    {
        using var reader = new StreamReader(context.Request.Body);
        var body = await reader.ReadToEndAsync();
        var employee = JsonSerializer.Deserialize<Employee>(body);

        var result = EmployeesRepository.UpdateEmployee(employee);
        if (result)
        {
            context.Response.StatusCode = 204;
            await context.Response.WriteAsync("Employee updated successfully.");
            return;
        }
        else
        {
            await context.Response.WriteAsync("Employee not found.");
        }
    });

    endpoints.MapDelete("/employees/{id}", async (HttpContext context) =>
    {

        var id = context.Request.RouteValues["id"];
        var employeeId = int.Parse(id.ToString());

        if (context.Request.Headers["Authorization"] == "frank")
        {
            var result = EmployeesRepository.DeleteEmployee(employeeId);

            if (result)
            {
                await context.Response.WriteAsync("Employee is deleted successfully.");
            }
            else
            {
                context.Response.StatusCode = 404;
                await context.Response.WriteAsync("Employee not found.");
            }
        }
        else
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("You are not authorized to delete.");
        }

    });

});

app.Run();

class Person
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public static ValueTask<Person?> BindAsync(HttpContext context)
    {
        var idStr = context.Request.Query["id"];
        var nameStr = context.Request.Query["name"];

        if (int.TryParse(idStr, out var id)) 
        {
            return new ValueTask<Person?>(new Person { Id = id, Name = nameStr });
        }

        return new ValueTask<Person?>(Task.FromResult<Person?>(null));
    }
}

public static class EmployeesRepository
{
    private static List<Employee> employees = new List<Employee>
{
    new Employee(1, "John Doe", "Engineer", 60000),
    new Employee(2, "Jane Smith", "Manager", 75000),
    new Employee(3, "Sam Brown", "Technician", 50000)
};

    public static List<Employee> GetEmployees() => employees;

    public static Employee? GetEmployeeById(int id)
    {
        return employees.FirstOrDefault(x => x.Id == id);
    }

    public static void AddEmployee(Employee? employee)
    {
        if (employee is not null)
        {
            employees.Add(employee);
        }
    }

    public static bool UpdateEmployee(Employee? employee)
    {
        if (employee is not null)
        {
            var emp = employees.FirstOrDefault(x => x.Id == employee.Id);
            if (emp is not null)
            {
                emp.Name = employee.Name;
                emp.Position = employee.Position;
                emp.Salary = employee.Salary;

                return true;
            }
        }

        return false;
    }

    public static bool DeleteEmployee(int id)
    {
        var employee = employees.FirstOrDefault(x => x.Id == id);
        if (employee is not null)
        {
            employees.Remove(employee);
            return true;
        }

        return false;
    }

}

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    [Required]
    [Range (5000, 20000)]
    public double Salary { get; set; }

    public Employee(int id, string name, string position, double salary)
    {
        Id = id;
        Name = name;
        Position = position;
        Salary = salary;
    }
}

struct GetEmployeeParameter
{
    [FromRoute]
    public int Id { get; set; }
    [FromQuery]
    public string? Name { get; set; }
    [FromHeader]
    public string? Position { get; set; }
}







