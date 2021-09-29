const jwt = require("jsonwebtoken");
const { handleUnAuthorisedError } = require("../utils");

const useAuth = async (req, res, next) => {
  const headers = req.headers;
  const { authorization } = headers;
  const token = authorization?.split(" ")[1];
  
  const secret = process.env.SECRET_PASSWORD;

  try {
    jwt.verify(token, secret, async function (err, decoded) {
      if (!decoded) return handleUnAuthorisedError(res, err);

      const { email } = decoded;
      req.userEmail = email;

      next();
    });
  } catch (err) {
    return handleUnAuthorisedError(res, err);
  }
};

module.exports = useAuth;
