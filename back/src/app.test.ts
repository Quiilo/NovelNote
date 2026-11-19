import assert from "node:assert/strict";
import { once } from "node:events";
import test from "node:test";
import app from "./app.js";

test("GET /api/health returns the API status", async (t) => {
  const server = app.listen(0, "127.0.0.1");
  t.after(
    () =>
      new Promise<void>((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      }),
  );
  await once(server, "listening");

  const address = server.address();
  assert(address && typeof address !== "string");

  const response = await fetch(`http://127.0.0.1:${address.port}/api/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});
