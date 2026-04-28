// Ejercicio 1 — Pipeline filter/map/reduce (5 pts)
// Trazabilidad: F-04, F-05, F-10

export type Orden = {
  id: number;
  cliente: string;
  total: number;
  categoria: string;
  activa: boolean;
};

// Filtra órdenes activas, extrae totales y los suma.
export function filtrarActivasYSumar(ordenes: Orden[]): number {
  return ordenes
    .filter((orden) => orden.activa)
    .reduce((suma, orden) => suma + orden.total, 0);
}

// Filtra las activas y devuelve un array con sus totales.
export function obtenerTotalesActivas(ordenes: Orden[]): number[] {
  return ordenes
    .filter((orden) => orden.activa)
    .map((orden) => orden.total);
}

// Cuenta cuántas órdenes hay por cada categoría (usar reduce).
export function contarPorCategoria(ordenes: Orden[]): Record<string, number> {
  return ordenes.reduce((conteo, orden) => ({
  ...conteo,
  [orden.categoria]: (conteo[orden.categoria] || 0) + 1
}), {} as Record<string, number>);
}
