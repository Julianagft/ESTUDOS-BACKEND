function logMiddleware(req, resp, next) {
    console.log('E ai bixa?');

    // resp.send("Policial disfarçado!!!")

    console.log("Passei por aqui!")

    next();
}

module.exports = logMiddleware;