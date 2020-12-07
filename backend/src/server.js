import express from "express";
import router from "./router.js"

const app = express();

app.use(express.json())
app.use(router)

const port = 3333
app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
