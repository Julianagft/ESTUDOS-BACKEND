using Web_App.NovaPasta;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<MyCostomMiddlewareClass>();
builder.Services.AddTransient<MyCostomExceptionHandler>();

var app = builder.Build();

app.UseMiddleware<MyCostomExceptionHandler>();

// Middleware #1
app.Use(async (HttpContext context, Func<Task> next) =>
{
    await context.Response.WriteAsync("Middleware #1: Before calling next\r\n");

    await next();

    //await context.Response.WriteAsync("MidAdleware #1: After calling next\r\n");
});

app.UseMiddleware<MyCostomMiddlewareClass>();

// Middleware #2
app.Use(async (HttpContext context, Func<Task> next) =>
{
    throw new ApplicationException("Exception for testing");
});

// Middleware #3
app.Use(async (HttpContext context, Func<Task> next) =>
{
    await context.Response.WriteAsync("Middleware #3: Before calling next\r\n");

    await next();

    await context.Response.WriteAsync("Middleware #3: After calling next\r\n");
});

app.Run();
