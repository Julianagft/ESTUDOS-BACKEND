const jwt = require("jsonwebtoken");


function authMiddleware(req, res, next) {
    const chaveSecreta = "juliana123";


    try {
        const token = req.headers.token;

        const tokenValido = jwt.verify(token, chaveSecreta);

        if(token && tokenValido) {
            next();
        }
    } catch(error) {
        return res.sendStatus(401); // senStatus já retorna como um json vazio;
    }    
}

module.exports = authMiddleware;

