export default {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DB_URI || "mongodb://localhost/moonlook",
    STATUS: process.env.STATUS || "dev",
};
