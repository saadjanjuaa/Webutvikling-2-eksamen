using System.ComponentModel.DataAnnotations;

namespace FullStackApi.Models;

public class Assignment
{
    [Key]
    public int Id { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
    public string? Company { get; set; }

}