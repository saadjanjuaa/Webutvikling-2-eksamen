using System.ComponentModel.DataAnnotations;

namespace FullStackApi.Models;

public class Developer
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Role { get; set; }
    public Boolean Junior { get; set; }
    public string? Image { get; set; }

}