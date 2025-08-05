using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Endpoint b�sico
app.MapGet("/", () => "Hello World!");

// GET /employees - Lista todos os funcion�rios
app.MapGet("/employees", async context =>
{
    var employees = EmployeesRepository.GetAllEmployees();
    context.Response.ContentType = "text/plain";

    foreach (var employee in employees)
    {
        await context.Response.WriteAsync($"{employee.Name}: {employee.Position}\r\n");
    }
});

// POST /employees - Adiciona um novo funcion�rio
app.MapPost("/employees", async context =>
{
    using var reader = new StreamReader(context.Request.Body);
    var body = await reader.ReadToEndAsync();
    var employee = JsonSerializer.Deserialize<Employee>(body);

    EmployeesRepository.AddEmployee(employee);
    await context.Response.WriteAsync("Employee added successfully.");
});

// PUT /employees - Atualiza um funcion�rio
app.MapPut("/employees", async context =>
{
    using var reader = new StreamReader(context.Request.Body);
    var body = await reader.ReadToEndAsync();
    var employee = JsonSerializer.Deserialize<Employee>(body);

    var result = EmployeesRepository.UpdateEmployee(employee);

    if (result)
    {
        await context.Response.WriteAsync("Employee updated successfully.");
    }
    else
    {
        await context.Response.WriteAsync("Employee not found.");
    }
});

// DELETE /employees?id=1 - Deleta um funcion�rio (com verifica��o de autoriza��o)
app.MapDelete("/employees", async context =>
{
    if (!context.Request.Query.ContainsKey("id"))
    {
        await context.Response.WriteAsync("Employee ID is required.");
        return;
    }

    var id = context.Request.Query["id"];
    if (!int.TryParse(id, out int employeeId))
    {
        await context.Response.WriteAsync("Invalid employee ID.");
        return;
    }

    if (context.Request.Headers["Authorization"] != "frank")
    {
        await context.Response.WriteAsync("You are not authorized to delete.");
        return;
    }

    var result = EmployeesRepository.DeleteEmployee(employeeId);
    if (result)
    {
        await context.Response.WriteAsync("Employee is deleted successfully.");
    }
    else
    {
        await context.Response.WriteAsync("Employee not found.");
    }
});

app.Run();


// ===============================
// MODELO DE DADOS E REPOSIT�RIO
// ===============================

static class EmployeesRepository
{
    private static List<Employee> employees = new List<Employee>
    {
        new Employee(1, "John Doe", "Developer", 60000),
        new Employee(2, "Bob", "Designer", 55000),
        new Employee(3, "Charlie", "Manager", 70000)
    };

    public static List<Employee> GetAllEmployees() => employees;

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
    public double Salary { get; set; }

    public Employee(int id, string name, string position, double salary)
    {
        Id = id;
        Name = name;
        Position = position;
        Salary = salary;
    }

    // Necess�rio para deserializa��o JSON
    public Employee() { }
}
