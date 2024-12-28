using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ContactFormBackend.Services;
using Amazon.DynamoDBv2;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Register DynamoDbService and AWS SDK
builder.Services.AddSingleton<DynamoDbService>();
builder.Services.AddAWSService<IAmazonDynamoDB>();

// Add CORS policy for frontend integration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Replace with your frontend's URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Ensure CORS is applied before mapping controllers
app.UseCors("AllowSpecificOrigin");

// Enable routing and controller mapping
app.UseRouting();
app.UseAuthorization(); // Add if you plan to secure API
app.MapControllers();

app.Run();
