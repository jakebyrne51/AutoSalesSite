using Microsoft.AspNetCore.Mvc;
using ContactFormBackend.Models;

namespace ContactFormBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactFormController : ControllerBase
    {
        // Handle preflight (OPTIONS) requests for CORS
        [HttpOptions]
        [Route("/api/contact")]
        public IActionResult Preflight()
        {
            return Ok();
        }

        // Handle form submission
        [HttpPost]
        [Route("/api/contact")]
        public IActionResult SubmitContactForm([FromBody] ContactFormSubmission submission)
        {
            if (submission == null || string.IsNullOrWhiteSpace(submission.Name))
            {
                return BadRequest("Invalid submission data");
            }

            // TODO: Save the submission to DynamoDB or other storage
            return Ok(new { message = "Form submitted successfully!" });
        }
    }
}
