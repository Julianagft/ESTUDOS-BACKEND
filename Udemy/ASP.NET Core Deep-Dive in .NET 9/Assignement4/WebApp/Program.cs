using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGet("/register", (Registration reg) =>
    {
        return $"User {reg.Email} registered successfully!";
    });

    endpoints.MapPost("/register", ([FromBody] Registration reg) =>
    {
        return $"User {reg.Email} registered successfully!";
    });
});

app.Run();

public class Registration
{
    [Required]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    public string? Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be at least 8 characters long.")]
    public string? Password { get; set; } 

    [Required(ErrorMessage = "Confirm password is required.")]
    [Compare("Password", ErrorMessage = "Passwords do not match.")]
    public string? ConfirmPassword { get; set; }

    public static ValueTask<Registration?> BindAsync(HttpContext context)
    {
        var email = context.Request.Query["email"];
        var password = context.Request.Query["password"];
        var confirmPassword = context.Request.Query["confirmPassword"];

        return new ValueTask<Registration?>(new Registration
        {
            Email = email,
            Password = password,
            ConfirmPassword = confirmPassword
        });
    }
}
