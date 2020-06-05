const express = require("express");
const { default: AdminBro } = require("admin-bro");
const options = require("./admin.options");
const app = express();
const buildAdminRouter = require("./admin.router");

// app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
// });

const PORT = process.env.PORT || 3001;
const run = async () => {
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);

  app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
  });
};

module.exports = run;
