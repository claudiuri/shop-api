
module.exports = {
	username: process.env.DB_USERNAME || "postgres",
	password: process.env.DB_PASSWORD || "1234567",
	database: "shop",
	host: process.env.DB_HOST || "localhost",
	post: "5432",
	dialect: "postgres",
	define: {
		"timestamp": false
	}
}