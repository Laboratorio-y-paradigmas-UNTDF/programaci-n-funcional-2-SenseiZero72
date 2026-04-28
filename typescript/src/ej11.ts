// Ejercicio 11 — Middleware como HOF (6 pts)
// Trazabilidad: F-22, F-23

export type Request = { headers: Record<string, string>; body: unknown; meta: { logs: string[] } };
export type Response = { status: number; body: unknown };
export type Handler = (req: Request) => Response;
export type Middleware = (handler: Handler) => Handler;

// Si authorization header es "Bearer <secret>", continúa. Si no, 401.
export function withAuth(secret: string): Middleware {
  return (handler: Handler) => (req: Request) => {
    const authHeader = req.headers.authorization;
    if (authHeader === `Bearer ${secret}`) {
      return handler(req);
    }
    return { status: 401, body: { error: "unauthorized" } };
  };
}

// Agrega "[prefix] request" a req.meta.logs antes de llamar al handler.
export function withLogging(prefix: string): Middleware {
  return (handler: Handler) => (req: Request) => {
    req.meta.logs.push(`[${prefix}] request`);
    return handler(req);
  };
}