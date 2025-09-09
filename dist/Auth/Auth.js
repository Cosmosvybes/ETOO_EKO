import jwt from "jsonwebtoken";
export async function Auth(req, res, next) {
    const token = decodeURIComponent(req.header("Authorization")).split(" ")[1];
    try {
        if (!token)
            res.status(401).send({ response: "Access denied, sign in first" });
        const data = jwt.verify(token, "secret");
        req.admin = data;
        next();
    }
    catch (error) {
        res.status(403).send({ response: "Forbidden token " });
    }
}
