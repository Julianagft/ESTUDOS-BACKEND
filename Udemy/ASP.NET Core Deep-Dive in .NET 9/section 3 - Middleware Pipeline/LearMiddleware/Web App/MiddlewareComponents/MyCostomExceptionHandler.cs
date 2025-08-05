using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace Web_App.NovaPasta
{
    public class MyCostomExceptionHandler : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                context.Response.ContentType = "text/html";
                await next(context);
            }
            catch (Exception ex)
            {
                await context.Response.WriteAsync("<h2>Error: </h2>");
                await context.Response.WriteAsync($"<p>{ex.Message}</p>");
            }
        }
    }
}