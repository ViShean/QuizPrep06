const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello OWASP!"));
app.listen(3350, () => console.log("Server running on port 3000"));
