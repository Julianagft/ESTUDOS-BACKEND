var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapPut("/employees", async (HttpContext context) =>
    {
        await context.Response.WriteAsync("Update an employee");
    });

    endpoints.MapDelete("/employees/{id}", async (HttpContext context) =>
    {
        await context.Response.WriteAsync($"Delete the employee: {context.Request.RouteValues["id"]}");
    });

    //Modal Biding 

    endpoints.MapGet("/categories/{size=medium}", async (HttpContext context) =>
    {
        await context.Response.WriteAsync($"Get categories in size: {context.Request.RouteValues["size"]}");
    });

    endpoints.MapGet("/{category=shirts}/{size=medium}", async (HttpContext context) =>
    {
        await context.Response.WriteAsync($"Get categories {context.Request.RouteValues["category"]} in size: {context.Request.RouteValues["size"]}");
    });
    // Quando eu especifico mais de um elemento deafult eu n�o preciso especificar o segundo mas eu obrigatoriamente preciso especificar o primeiro. 
    
});

app.Run();
