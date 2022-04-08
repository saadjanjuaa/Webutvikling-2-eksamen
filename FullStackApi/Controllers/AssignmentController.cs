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

}