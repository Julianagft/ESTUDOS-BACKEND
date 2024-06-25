import { rateLimit } from 'express-rate-limit';

const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	message: {
        message: "Você atingiu o limite máximo de requisições, tente novamente em 15 minutos"
    }
})

export default rateLimitMiddleware;