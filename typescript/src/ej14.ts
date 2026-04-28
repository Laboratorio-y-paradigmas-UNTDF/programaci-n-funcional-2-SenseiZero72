// Ejercicio 14 — Memoization (5 pts)
// Trazabilidad: F-28, F-29

// Memoize genérico para funciones de 1 argumento. Usa Map como cache.
export function memoize<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();
  return (arg: T) => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

// Fibonacci recursivo clásico (sin memo).
export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Wrapper que cuenta llamadas. Retorna { call, count }.
export function callCounter<A extends unknown[], R>(fn: (...args: A) => R): {
  call: (...args: A) => R;
  count: () => number;
} {
  let counter = 0;
  const call = (...args: A): R => {
    counter++;
    return fn(...args);
  };
  const count = (): number => {
    return counter;
  };
  return { call, count };
}
