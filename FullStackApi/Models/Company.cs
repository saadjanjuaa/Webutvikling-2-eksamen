using System.ComponentModel.DataAnnotations;

namespace FullStackApi.Models;

public class Company
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public int PhoneNumber { get; set; }
    public Boolean International { get; set; }
    public string? Image { get; set; }

}