const exp = require("express");
const app = exp();
require("dotenv").config();
const mongoClient = require("mongodb").MongoClient;
const path = require("path");

app.use(exp.static(path.join(__dirname, "../client/build")));
app.use(exp.json());

mongoClient
  .connect(process.env.DB_URL)
  .then((client) => {
    const blogdb = client.db("BlogDB");
    const userscollection = blogdb.collection("UsersCollection");
    const articlescollection = blogdb.collection("ArticlesCollection");
    const authorscollection = blogdb.collection("AuthorsCollection");
    app.set("userscollection", userscollection);
    app.set("articlescollection", articlescollection);
    app.set("authorscollection", authorscollection);
    console.log("DB connection success");
  })
  .catch((err) => console.log("Err in DB connection", err));

const userApp = require("./APIs/user-api");
const authorApp = require("./APIs/author-api");
const adminApp = require("./APIs/admin-api");

app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use((err, req, res, next) => {
  res.send({ message: "error", payload: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Web server on port ${port}`));
