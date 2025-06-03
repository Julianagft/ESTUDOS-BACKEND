var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run(async (HttpContext context) =>
{
    await context.Response.WriteAsync($"The method is: {context.Request.Method}\r\n");
    await context.Response.WriteAsync($"The Url is: {context.Request.Path}\r\n");

    await context.Response.WriteAsync($"Headers");

    foreach (var key in context.Response.Headers.Keys)
    {
        context.Response.WriteAsync($"{key}: {context.Response.Headers[key]}");
    }

});

app.Run();
