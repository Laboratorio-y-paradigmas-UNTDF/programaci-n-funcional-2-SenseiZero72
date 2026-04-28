// Ejercicio 17 — Integrador TypeScript (7 pts)
// Trazabilidad: F-33

export type Orden = {
  id: number;
  cliente: string;
  total: number;
  categoria: string;
  activa: boolean;
};

export type Result<T, E> = { status: "ok"; value: T } | { status: "error"; error: E };

// ok si activa Y total > 100. err("orden inactiva") o err("monto insuficiente").
export function clasificarOrden(o: Orden): Result<Orden, string> {
  if (!o.activa) {
    return { status: "error", error: "orden inactiva" };
  }
  if (o.total <= 100) {
    return { status: "error", error: "monto insuficiente" };
  }
  return { status: "ok", value: o };
}

// Partial: retorna fn que crea nueva orden con total reducido por porcentaje.
export function aplicarDescuento(porcentaje: number): (o: Orden) => Orden {
  return (o: Orden) => {
    return { ...o, total: o.total * (1 - porcentaje / 100) };
  };
}

// Pipeline: clasificar → separar ok/err → descuento 10% a aprobadas → sumar totales.
export function procesarOrdenes(ordenes: Orden[]): {
  aprobadas: Orden[];
  rechazadas: string[];
  totalFinal: number;
} {
  const resultados = ordenes.map(clasificarOrden);
  const aprobadasSinDescuento = resultados
    .filter((r): r is { status: "ok"; value: Orden } => r.status === "ok")
    .map(r => r.value);
  const rechazadas = resultados
    .filter((r): r is { status: "error"; error: string } => r.status === "error")
    .map(r => r.error);
  const aplicar10 = aplicarDescuento(10);
  const aprobadas = aprobadasSinDescuento.map(aplicar10);
  const totalFinal = aprobadas.reduce((sum, o) => sum + o.total, 0);
  return { aprobadas, rechazadas, totalFinal };
}
