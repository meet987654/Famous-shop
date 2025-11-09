import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { createServer } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const isProduction = process.env.NODE_ENV === "production";

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false  // Disable CSP for this demo
}));

app.use(cors({
  origin: isProduction ? process.env.CORS_ORIGIN || false : true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logMessage = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logMessage += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logMessage.length > 80) {
        logMessage = logMessage.slice(0, 79) + "…";
      }
      
      log(logMessage);
    }
  });
  next();
});

// Register API routes
registerRoutes(app);

if (isProduction) {
  // Serve static files in production
  app.use(express.static(resolve(__dirname, "../dist/client")));
  
  // Serve index.html for client-side routing
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(resolve(__dirname, "../dist/client/index.html"));
  });
} else {
  // Development mode with Vite
  setupVite(app, server).catch((err) => {
    console.error("Failed to setup Vite:", err);
    process.exit(1);
  });
}

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: isProduction ? "Internal Server Error" : err.message
  });
});

const port = process.env.PORT || 4300;
server.listen(port, () => {
  log(`Server listening on port ${port}`);
});