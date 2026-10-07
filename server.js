import app from "./app.js"
import { CONFIG } from "./src/config/env.config.js"

app.listen(CONFIG.PORT,()=>{
  console.log("Server running on port", CONFIG.PORT)
})