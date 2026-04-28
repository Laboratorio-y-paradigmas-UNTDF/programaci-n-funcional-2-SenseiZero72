(ns tp04.ej12
  "Ejercicio 12 — Recursión de cola (6 pts). Trazabilidad: F-24, F-25, F-26")

;; Suma todos los elementos con acumulador. DEBE usar recur.
(defn sum-list [nums acc]
  (if (empty? nums)
    acc
    (recur (rest nums) (+ acc (first nums)))))

;; Factorial con acumulador. DEBE usar recur.
(defn factorial [n acc]
  (if (zero? n)
    acc
    (recur (dec n) (* acc n))))

;; Revierte lista con acumulador. DEBE usar recur.
(defn my-reverse [xs acc]
  (if (empty? xs)
    acc
    (recur (rest xs) (cons (first xs) acc))))

;; Cuenta elementos con acumulador. DEBE usar recur.
(defn my-count [xs acc]
  (if (empty? xs)
    acc
    (recur (rest xs) (inc acc))))
