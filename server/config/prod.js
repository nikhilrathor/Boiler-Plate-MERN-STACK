module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT,
    TEMP: process.env.TEMP_USER,
    PERMANENT: process.env.PERMANENT_USER,
    USER: process.env.USER_ROLE,
    ADMIN: process.env.ADMIN_ROLE,
    MAIL_USER: process.env.USER_EMAIL,
    MAIL_PASSWORD: process.env.USER_PASSWORD
}