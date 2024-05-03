function verifyAuthentication(req, res, next) {
// nex fará prosseguir para as rotas, idependente do que estiver chamando;

    const {authorization } = req.headers;

    if(authorization === '123') {
        next();
    } else {
        res.status(401).json({message: "Unauthorized"});
    }
    
};

export default verifyAuthentication;

