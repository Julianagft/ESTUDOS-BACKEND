// O objeti vo do logger é que possamos ver no terminal quais rotas estão sendo usadas;

function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

export default logger;