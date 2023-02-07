import cors from "cors";
import express, { Response } from "express";
import { router } from "./router";

const app = express();

app.use(cors());
app.use("/forecast", router);

app.get("*", (response: Response) => {
  return response.status(200);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Forecast app listening on port ${port}`);
});

export default app;
