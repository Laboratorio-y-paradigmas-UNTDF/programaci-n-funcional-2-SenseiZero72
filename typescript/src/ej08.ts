// Ejercicio 8 — Currying (6 pts)
// Trazabilidad: F-16, F-17

// Convierte función de 2 args en cadena de funciones de 1 arg.
export function curry2<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => fn(a, b);
}

// Convierte función de 3 args en cadena de funciones de 1 arg.
export function curry3<A, B, C, D>(fn: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D {
  return (a: A) => (b: B) => (c: C) => fn(a, b, c);
}
