// Error Handling - Try-Catch-Finally

// try-catch-finally
try {
  const data = JSON.parse('{"name": "Alice"}');
  console.log(data.name);
  
  // This will throw an error
  const badData = JSON.parse("Not valid JSON");
  
} catch (error) {
  console.error("Error:", error.message);
   throw new Error("Cannot divide by zero");
} finally {
  console.log("Finally block executes");
}
