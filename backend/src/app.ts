import express, { Response } from "express";
import { Controller } from "./interfaces/controller";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";

import requestIp from "request-ip";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.middleware";

class App {
  public app: express.Application;

  private whitelist = [
    "http://www.cubik.so",
    "http://cubik.so",
    "http://web-api.cubik.so",
  ];

  constructor(controllers: readonly Controller[]) {
    this.app = express();
    this.app.use("/checks", (_, response: Response) => {
      response.status(200).send("OK");
    });

    this.configGlobalMiddlewares();

    this.initializeControllers(controllers);
  }

  public getServer(): express.Application {
    return this.app;
  }

  public listen(): void {
    this.app.listen(process.env.PORT || 8080, () => {
      console.info(`App listening on the port ${process.env.PORT || 8080}`);
    });
  }

  private configGlobalMiddlewares() {
    // cors
    this.app.use(
      cors({
        origin: (origin, callback) => {
          // allow requests with no origin
          // (like mobile apps or curl requests)
          if (!origin) {
            return callback(null, true);
          }
          if (this.whitelist.indexOf(origin) !== -1) {
            const msg = `The CORS policy for this site does not allow access from the specified origin.`;
            return callback(new Error(msg), false);
          }

          return callback(null, true);
        },
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );

    // helemt
    this.app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            "default-src": ["'self'"],
            "base-uri": ["'self'"],
            "font-src": ["'self'"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'self'"],
            "object-src": ["'none'"],
          },
        },
        crossOriginEmbedderPolicy: true,
        crossOriginOpenerPolicy: true,
        crossOriginResourcePolicy: true,
        dnsPrefetchControl: true,
        frameguard: {
          action: "sameorigin",
        },
        hidePoweredBy: true,
        hsts: true,
        ieNoOpen: true,
        noSniff: true,
        originAgentCluster: true,
        permittedCrossDomainPolicies: true,
        referrerPolicy: true,
        xssFilter: true,
      })
    );

    // requesting Ip

    this.app.use(requestIp.mw());

    // rate limiting

    //compress response
    this.app.use(compression());

    // parse cookies
    this.app.use(cookieParser());

    // Parse JSON data
    this.app.use(express.json({ limit: "10mb" }));
    // Parse URL-encoded data
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initializeControllers(controllers: readonly Controller[]) {
    // All the generic containers as supplied by app
    controllers.forEach((controller) => {
      this.app.use(controller.router);
    });

    // Error Handling
    this.app.use(errorHandler);
  }
}

export default App;
