using System.ComponentModel.DataAnnotations;

namespace WebApplication
{
    public class Employee_EnsureSalary: ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            var employee = validationContext.ObjectInstance as Employee;

            if (employee is not null && !string.IsNullOrWhiteSpace(employee.Position) && employee.Position.Equals("Manager", StringComparison.OrdinalIgnoreCase))
             {
                if (employee.Salary < 10000)
                {
                    return new ValidationResult("Manager salary must be at least 10,000.");
                }
            }

            return ValidationResult.Success;
        }
    }
}
