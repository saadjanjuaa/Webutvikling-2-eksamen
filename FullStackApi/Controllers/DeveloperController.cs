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


    // HENTE PÅ NAVN
    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<List<Developer>> GetByName(string name)
    {
        List<Developer> developers = await _context.Developers.Where( _developer => _developer.Name.ToLower() == name.ToLower()).ToListAsync();
        return developers;
    }
    

    // HENTE DEVELOPERS UTIFRA ROLLE
    [HttpGet]
    [Route("[action]/{role}")]
    public async Task<List<Developer>> GetByRole(string role)
    {
        List<Developer> developers = await _context.Developers.Where( _developer => _developer.Role.ToLower() == role.ToLower()).ToListAsync();
        return developers;
    }

    // HENTE DEVELOPERS UTIFRA JUNIOR ELLER IKKE
    /*
    [HttpGet]
    [Route("[action]")]
    public async Task<List<Developer>> GetJuniors()
    {
        List<Developer> developers = await _context.Developers.Where( _developer => _developer.Junior == true).ToListAsync();
        return developers;
    }*/


}