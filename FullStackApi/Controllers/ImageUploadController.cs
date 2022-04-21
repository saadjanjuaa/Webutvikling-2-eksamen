#nullable disable

using Microsoft.AspNetCore.Mvc;

namespace FullStackApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageUploadController : ControllerBase 
{
    private readonly IWebHostEnvironment _hosting;

    public ImageUploadController(IWebHostEnvironment hosting)
    {
        _hosting = hosting;
    }

    [HttpPost]
    [Route("[action]")]
    public IActionResult PostImage(IFormFile file) 
    {
        if(file != null)
        {

            string webRootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                try
                {
                    file.CopyTo(fileStream);
                }
                catch
                {
                    return StatusCode(500);
                }
            }

            return StatusCode(200);
        }
        else
        {
            return StatusCode(500);
        }
    }


}