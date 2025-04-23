using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class TodoContext(DbContextOptions<TodoContext> options) : DbContext(options)
{
    public DbSet<TodoItem> TodoItems => Set<TodoItem>();
}