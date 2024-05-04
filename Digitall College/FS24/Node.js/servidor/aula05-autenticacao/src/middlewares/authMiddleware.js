const jwt = require("jsonwebtoken");


function authMiddleware(req, res, next) {

    try {
        const token = req.headers.token;

        const tokenValido = jwt.verify(token, "juliana123");

        if(token && tokenValido) {
            next();
        }
    } catch(error) {
        return res.sendStatus(401); // senStatus já retorna como um json vazio;
    }    
}

module.exports = authMiddleware;

