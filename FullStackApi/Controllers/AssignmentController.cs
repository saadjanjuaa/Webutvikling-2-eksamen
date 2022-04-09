#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStackApi.Models;

namespace FullStackApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssignmentController : ControllerBase
{
    private readonly FullStackContext _context;

    public AssignmentController(FullStackContext context)
    {
        _context = context;
    }


    // HENTE ALLE ASSIGNMENTS
    [HttpGet]
    public async Task<ActionResult<List<Assignment>>> GetAssignments()
    {
        List<Assignment> assignments = await _context.Assignments.ToListAsync();
        return assignments;
    }


    // HENTE PÅ ID
    [HttpGet]
    [Route("[action]/{id}")]
    public async Task<Assignment> GetById(int id)
    {
        Assignment assignment = await _context.Assignments.FindAsync(id);
        return assignment;
    }


    // HENTE ASSIGNMENT UTIFRA KATEGORI
    [HttpGet]
    [Route("[action]/{category}")]
    public async Task<List<Assignment>> GetByCategory(string category)
    {
        List<Assignment> assignments = await _context.Assignments.Where( _assignment => _assignment.Category.ToLower() == category.ToLower()).ToListAsync();

        return assignments;
    }
    

}