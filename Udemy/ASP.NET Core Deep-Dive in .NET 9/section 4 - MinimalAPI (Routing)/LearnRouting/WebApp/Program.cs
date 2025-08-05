
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRouting(options =>
{
    options.ConstraintMap.Add("pbs", typeof(PositionConstraint));
});

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
    // Quando eu especifico mais de um elemento deafult eu não preciso especificar o segundo mas eu obrigatoriamente preciso especificar o primeiro. 

    endpoints.MapGet("/employees/positions/{position:pos}", async (HttpContext context) =>
    {
        await context.Response.WriteAsync($"Get employess under position: {context.Request.RouteValues["position"]}");
    });

});

app.Run();

class PositionConstraint : IRouteConstraint
{
    public bool Match(HttpContext? httpContext, IRouter? route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
    {
        if (!values.ContainsKey(routeKey)) return false;
        if (values[routeKey] is null) return false;

        if (values[routeKey].ToString().Equals("manager", StringComparison.OrdinalIgnoreCase) || values[routeKey].ToString().Equals("developer", StringComparison.OrdinalIgnoreCase)) return true; 

        return false;

    }
}
