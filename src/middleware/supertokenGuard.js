const Session = require("supertokens-node/recipe/session");

async function supertokenGuard(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Invalid token format" });
    const session = await Session.getSessionFromToken(token, true);

    req.session = session;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

module.exports = supertokenGuard; 
