(ns tp04.ej07
  "Ejercicio 7 — Partial en Clojure (5 pts). Trazabilidad: F-15"
  (:require [clojure.string :as str]))

;; Retorna {:status :ok :value value} si no vacío, {:status :error :error "FIELD es obligatorio"}.
(defn required-field [field-name value]
  (if (and (not (nil? value)) 
           (not (str/blank? (str value))))
    {:status :ok :value value}
    {:status :error :error (str field-name " es obligatorio")})
)

(def doble
  (partial * 2)
  )

(def triple
  (partial * 3)
  )

(def validate-name
  (partial required-field "nombre")
  )

(def validate-email
  (partial required-field "email")
  )
