(ns tp04.ej09
  "Ejercicio 9 — Validadores con currying (5 pts). Trazabilidad: F-18"
  (:require [clojure.string :as str]))

;; Retorna fn que valida value con pred. Ok → {:status :ok :value val}, error → {:status :error :error msg}.
(defn make-validator [pred error-msg]
  (fn [value]
    (if (pred value)
      {:status :ok :value value}
      {:status :error :error error-msg})))

;; Aplica validators en secuencia; para en el primer error.
(defn validate-field [value & validators]
  (reduce (fn [acc validator] 
            (if (= :error (:status acc))
              acc
              (validator (:value acc))))
          {:status :ok :value value}
          validators))

(def validate-not-empty
  (make-validator (fn [v] (and v (not (str/blank? (str v))))) "campo vacío"))

(def validate-email-format
  (make-validator (fn [v] (and v (re-matches #".+@.+\..+" (str v)))) "email inválido"))
