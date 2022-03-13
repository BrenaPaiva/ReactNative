const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"


module.exports = (req, res, next) => {
    try {
        const token = req.headers['token']

        if(token !== TOKEN)
            res.status(401).json({ message: "Token inválido" })

        next()
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" })
    }
}