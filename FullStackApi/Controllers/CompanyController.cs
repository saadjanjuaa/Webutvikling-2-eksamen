#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStackApi.Models;

namespace FullStackApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    private readonly FullStackContext _context;

    public CompanyController(FullStackContext context)
    {
        _context = context;
    }


    // HENTE ALLE COMPANIES
    [HttpGet]
    public async Task<ActionResult<List<Company>>> GetCompanies()
    {
        List<Company> companies = await _context.Companies.ToListAsync();
        return companies;
    }


    // HENTE PÅ ID
    [HttpGet]
    [Route("[action]/{id}")]
    public async Task<Company> GetById(int id)
    {
        Company company = await _context.Companies.FindAsync(id);
        return company;
    }


    // POSTE NYTT FIRMA
    [HttpPost]
    public async Task<ActionResult<Company>> Post(Company newCompany)
    {
        _context.Companies.Add(newCompany);

        await _context.SaveChangesAsync();

        return newCompany;
    }
    
}