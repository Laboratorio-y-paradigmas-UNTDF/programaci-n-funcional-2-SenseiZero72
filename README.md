[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/OwW0uHpA)
# TP 04 — Aspectos Avanzados de Programación Funcional

**Materia:** Paradigmas y Lenguajes de Programación 2026 — UNTDF / IDEI
**Lenguajes:** TypeScript + Clojure
**Puntos totales:** 100

---

## Objetivo

Practicar los patrones fundamentales de programación funcional: HOF, composición, inmutabilidad, partial application, currying, `Result`, middleware, recursión de cola, memoization, lazy sequences y DSLs data-driven.

## Estructura del repo

```
typescript/          ← ejercicios en TypeScript
  src/ejXX.ts        ← completar aquí
  tests/ejXX.test.ts ← NO modificar
clojure/             ← ejercicios en Clojure
  src/tp04/ejXX.clj  ← completar aquí
  test/tp04/ejXX_test.clj ← NO modificar
```

## Cómo trabajar

1. Cloná tu repo: `git clone <url-de-tu-repo>`
2. Implementá las soluciones en los archivos `src/`.
3. **No modifiques los archivos de test.**
4. Los tests se ejecutan automáticamente con cada `git push`.
5. Verificá que el check ✅ aparece en tu repo antes de la fecha límite.

## Ejecutar tests localmente

### TypeScript
```bash
cd typescript
npm install
npx vitest run                          # todos los tests
npx vitest run tests/ej01.test.ts       # un ejercicio
```

### Clojure
```bash
cd clojure
lein deps
lein test                               # todos los tests
lein test tp04.ej04-test                # un ejercicio
```

## Ejercicios

| Ej | Tema | Lenguaje | Pts |
|----|------|----------|-----|
| 1 | Pipeline filter/map/reduce | TS | 5 |
| 2 | Composición pipe/compose | TS | 6 |
| 3 | Inmutabilidad con spread | TS | 4 |
| 4 | Pipeline con ->> | Clj | 5 |
| 5 | flatMap y reduce avanzado | TS | 5 |
| 6 | Partial application | TS | 6 |
| 7 | Partial en Clojure | Clj | 5 |
| 8 | Currying | TS | 6 |
| 9 | Validadores con currying | Clj | 5 |
| 10 | Result y validación encadenada | TS | 7 |
| 11 | Middleware como HOF | TS | 6 |
| 12 | Recursión de cola | Clj | 6 |
| 13 | Recursión de cola TS | TS | 5 |
| 14 | Memoization | TS | 5 |
| 15 | Lazy sequences | Clj | 5 |
| 16 | DSL data-driven | Clj | 5 |
| 17 | Integrador TypeScript | TS | 7 |
| 18 | Integrador Clojure | Clj | 7 |

**TypeScript:** 62 pts | **Clojure:** 38 pts
