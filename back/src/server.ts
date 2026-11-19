import "dotenv/config";
import app from "./app.js";
import { prisma } from "./lib/prisma.js";

const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}

async function startServer(): Promise<void> {
  await prisma.$connect();

  const server = app.listen(port, () => {
    console.info(`API listening on http://localhost:${port}`);
  });

  const shutdown = (signal: NodeJS.Signals): void => {
    console.info(`${signal} received; shutting down.`);
    server.close((error) => {
      if (error) {
        console.error("Failed to close the HTTP server cleanly.", error);
        process.exitCode = 1;
      }

      void prisma.$disconnect();
    });
  };

  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);
}

startServer().catch(async (error: unknown) => {
  console.error("Failed to start the API.", error);
  await prisma.$disconnect();
  process.exitCode = 1;
});
