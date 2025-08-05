
namespace Web_App.NovaPasta
{
    public class MyCostomMiddlewareClass : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            await context.Response.WriteAsync("My Costom middleware: Before calling next\r\n");

            await next(context);

            await context.Response.WriteAsync("My Costom middleware: After calling next\r\n");
        }
    }
}
