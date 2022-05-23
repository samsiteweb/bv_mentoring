import express, { Response, Request } from "express";
import bookRoutes from "./v1/routers/book.route";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
  try {
    const port = 6005;
    const app = express();
    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      res.status(200).json("You are welcome to my Bookstore Api. Cheers!");
    });

    app.use("/api/v1", bookRoutes);

    app.listen(port, () => console.log("My server is running on port " + port));
  } catch (error) {
    console.log("Database connection error: " + error);
  }
});
