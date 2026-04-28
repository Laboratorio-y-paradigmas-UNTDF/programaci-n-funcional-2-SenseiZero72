// Ejercicio 6 — Partial application (6 pts)
// Trazabilidad: F-13, F-14

export type Result<T, E> = { status: "ok"; value: T } | { status: "error"; error: E };

// Partial: recibe fn de 2 args y primer arg, devuelve fn de 1 arg.
export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C {
  return (b: B) => fn(a, b);
}

// Fábrica de saludadores.
export function makeGreeter(saludo: string): (nombre: string) => string {
  return (nombre: string) => `${saludo}, ${nombre}`;
}

// Fábrica de validadores: ok si no vacío tras trim, error si vacío.
export function makeRequiredValidator(fieldName: string): (value: string) => Result<string, string> {
  return (value: string) => {
    const trimmed = value.trim();
    return trimmed ? { status: "ok", value: trimmed } : { status: "error", error: `${fieldName} es obligatorio` };
  };
}
