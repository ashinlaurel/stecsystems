const express = require("express");
const app = express();

// app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
