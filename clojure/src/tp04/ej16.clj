(ns tp04.ej16
  "Ejercicio 16 — DSL data-driven (5 pts). Trazabilidad: F-31"
  (:require [clojure.string :as str]))

;; Vector de reglas: {:field :name, :pred fn, :msg "..."}
(def user-rules
  [{:field :name
    :pred  #(not (str/blank? (str %)))
    :msg   "nombre es obligatorio"}

   {:field :email
    :pred  #(and % (re-matches #".+@.+\..+" (str %)))
    :msg   "email inválido"}

   {:field :age
    :pred  #(>= (or % 0) 18)
    :msg   "debe ser mayor de 18"}])

;; Aplica todas las reglas a data. Retorna vector de {:field :error} (vacío si ok).
(defn validate [rules data]
  (for [rule rules
        :let [value (get data (:field rule))]
        :when (not ((:pred rule) value))]
    {:field (:field rule) 
     :error (:msg rule)}))

;; true si no hay errores.
(defn valid? [rules data]
  (empty? (validate rules data)))
