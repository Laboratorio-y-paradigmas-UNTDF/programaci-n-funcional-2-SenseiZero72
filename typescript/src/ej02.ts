// Ejercicio 2 — Composición con pipe y compose (6 pts)
// Trazabilidad: F-06, F-07

// Compone funciones de izquierda a derecha. Sin funciones → identidad.
export function pipe<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);
}

// Compone funciones de derecha a izquierda. Sin funciones → identidad.
export function compose<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// Pipeline que aplica trim, toLowerCase, y agrega @empresa.com si no tiene @.
export function normalizeEmail(raw: string): string {
  return pipe(
    (s: string) => s.trim(),
    (s: string) => s.toLowerCase(),
    (s: string) => (s.includes("@") ? s : `${s}@empresa.com`)
  )(raw);
}
