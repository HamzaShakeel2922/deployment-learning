using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace weatherApi.Controllers
{
    [ApiController]
    [Route("weather")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly ILogger<WeatherForecastController> _logger;
        public WeatherForecastController(AppDbContext db, ILogger<WeatherForecastController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Employee>> Get(CancellationToken token)
        {
            return await _db.Employees.ToListAsync(token);
        }

        [HttpGet("Get-by-id")]
        public async Task<Employee?> GetById([FromQuery] int id)
        {
            return await _db.Employees.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
