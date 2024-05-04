function logMiddleware(req, resp, next) {
    console.log('E ai bixa?');

    // resp.send("Policial disfarçado!!!")

    next();
}

module.exports = logMiddleware;