import http from "http";
import express, { Request, Response, Express, NextFunction } from "express";
import morgan from "morgan";
import routes from "./routes";
import mongoose from "mongoose";
import config from "./common/config/config";
import logger from "./common/config/logger";
import cors from "cors";
import i18nextMiddleware from "i18next-express-middleware";
import i18next from "./common/middlewares/i18next";

const router: Express = express();

router.use(i18nextMiddleware.handle(i18next));

router.use(morgan("dev"));

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use(cors({ origin: true }));

router.use("/", routes);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to  API");
});

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Endpoint not found.");
  return res.status(404).json({
    message: error.message,
  });
});

process.on("unhandledRejection", (reason, promise) => {
  // console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the rejection gracefully (e.g., log the error, show a user-friendly message)
});

const httpServer = http.createServer(router);

const PORT = +(process.env.PORT as string) || 6060;
let server: http.Server;

mongoose.connect(config.mongoose.url).then((result: any) => {
  logger.info(`Connected to MongoDB : ${config.mongoose.url}`);
  server = httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
  );
});

mongoose.set("debug", true);

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info(" received");
  if (server) {
    server.close();
  }
});
//r-world
