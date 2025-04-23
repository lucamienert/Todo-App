using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api")]
public class TodoController(TodoContext context) : ControllerBase
{
    [HttpGet("GetTodos")]
    public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodos()
    {
        return await context.TodoItems.ToListAsync();
    }

    [HttpPost("AddTodo")]
    public async Task<ActionResult<TodoItem>> AddTodo(TodoItem item)
    {
        context.TodoItems.Add(item);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTodos), new { id = item.Id }, item);
    }

    [HttpPut("UpdateTodo/{id}")]
    public async Task<IActionResult> UpdateTodo(int id, TodoItem item)
    {
        if (id != item.Id) 
            return BadRequest();

        context.Entry(item).State = EntityState.Modified;
        await context.SaveChangesAsync();
        
        return NoContent();
    }

    [HttpDelete("DeleteTodo/{id}")]
    public async Task<IActionResult> DeleteTodo(int id)
    {
        var todo = await context.TodoItems.FindAsync(id);
        
        if (todo == null) 
            return NotFound();

        context.TodoItems.Remove(todo);
        await context.SaveChangesAsync();

        return NoContent();
    }
}
