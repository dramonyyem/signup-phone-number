const express = require("express");
const supertokens = require("supertokens-node");
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const Session = require("supertokens-node/recipe/session");
const {
  middleware,
  errorHandler,
} = require("supertokens-node/framework/express");
const { connectDB } = require("./src/config/mongoDB");

const cors = require("cors");
const userRoutes = require("./src/routes/user.routes");
const authRoutes = require("./src/routes/auth.routes");
const resetPasswordRoutes = require("./src/routes/reset-password.routes");
// ----------------------
// 1️⃣ Supertokens init
// supertokens.init({
//   framework: "express",
//   supertokens: {
//     connectionURI: "http://localhost:3567",
//     apiKey: "thisIsASuperSecretAPIKey12345",
//   },
//   appInfo: {
//     appName: "MyApp",
//     apiDomain: "http://localhost:3000/auth",
//     websiteDomain: "http://localhost:3000/auth",
//   },
//   recipeList: [Session.init()],
// });
connectDB();
// ----------------------
// Express app

const app = express();


app.use(
  cors({
    origin: "http://localhost:4000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());


app.use("", authRoutes);
app.use("", userRoutes);
app.use("", resetPasswordRoutes);

app.get("/", (req, res) => res.send("Hello World"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
