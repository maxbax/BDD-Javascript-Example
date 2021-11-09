# language: it
Funzionalità: Semplici conti matematici
  Per fare qualche conto di matematica
  Come sviluppatore
  Voglio incrementare le variabili

  Scenario: semplice matematica
    Data una variabile impostata a 1
    Quando incremento la variabile di 1
    Allora la variabile dovrebbe contenere 2

  Schema dello scenario: esempio più complesso
    Data una variabile impostata a <var>
    Quando incremento la variabile di <increment>
    Allora la variabile dovrebbe contenere <result>

    Esempi:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |