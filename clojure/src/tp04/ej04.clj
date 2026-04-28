(ns tp04.ej04
  "Ejercicio 4 — Pipeline con ->> (5 pts). Trazabilidad: F-08")

;; Filtra activas, extrae :total, suma.
(defn total-activas [ordenes]
  (->> ordenes
       (filter :activa?)
       (map :total)
       (reduce + 0)))

;; Filtra activas, devuelve vector de :cliente.
(defn nombres-activas [ordenes]
  (->> ordenes
       (filter :activa?)
       (map :cliente)
       (vec)))

;; Filtra pares, eleva al cuadrado, suma.
(defn cuadrados-pares [nums]
  (->> nums
       (filter even?)
       (map #(* % %))
       (reduce + 0))
)
  
