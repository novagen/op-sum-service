
import axios from "axios";

const [a, b] = process.argv.slice(2).map(Number);
if (isNaN(a) || isNaN(b)) {
  console.error("Invalid input. Provide two numbers.");
  process.exit(1);
}

axios.post("http://localhost:3000/sum", { a, b })
  .then(res => console.log("🎉 Result:", res.data.result))
  .catch(err => console.error("💥 Error:", err.message));
