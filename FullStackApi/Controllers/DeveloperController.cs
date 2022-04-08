#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStackApi.Models;

namespace FullStackApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DeveloperController : ControllerBase
{
    private readonly FullStackContext _context;

    public DeveloperController(FullStackContext context)
    {
        _context = context;
    }


    // HENTE ALLE DEVELOPERS
    [HttpGet]
    public async Task<ActionResult<List<Developer>>> GetDevelopers()
    {
        List<Developer> developers = await _context.Developers.ToListAsync();
        return developers;
    }
}