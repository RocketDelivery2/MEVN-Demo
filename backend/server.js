import express from "express";
import dotenv from "dotenv";
import path from "path";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows the req.body to accept JSON data.

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/api/", apiLimiter);
app.use("/api/products", productRoutes);

//console.log(process.env.MONGO_URI);

if (process.env.NODE_ENV === "production") {
	//Static dist deploy assets.
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	const staticLimiter = rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 200,
	});

	app.get("*", staticLimiter, (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
