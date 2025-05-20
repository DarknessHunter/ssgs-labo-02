# Labo-String: CLI per Utilità su Stringhe ( ho cambiato nome per essere piu professionale ma il reposity nome e differente ) 

Un'utility da riga di comando Node.js che fornisce diverse funzionalità per la manipolazione di stringhe.

## Funzionalità

- **Inversione di Stringhe**: Inverte l'ordine dei caratteri in una stringa
- **Verifica Palindromi**: Controlla se una stringa è palindroma (ignorando maiuscole/minuscole e spazi)
- **Troncamento**: Tronca una stringa a una lunghezza massima specificata
- **Conteggio Caratteri**: Analizza e conta le occorrenze di ciascun carattere in una stringa

## Prerequisiti

- Node.js >= 20.0.0
- npm (Node Package Manager)

## Installazione

1. Clona il repository:
```bash
https://github.com/DarknessHunter/ssgs-labo-02
cd ssgs-labo-02
```

2. Installa le dipendenze:

Per sviluppo locale:
```bash
npm install
```

Per ambienti CI/CD (più veloce e riproducibile):
```bash
npm ci
```

## Utilizzo

Il programma può essere eseguito in due modi:

### 1. Esecuzione Diretta
```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

Dove:
- `<numero_funzione>` è un numero da 1 a 4 che indica la funzione da utilizzare:
  - 1: Inverti Stringa
  - 2: Controlla Palindromo
  - 3: Tronca Stringa (richiede lunghezza massima)
  - 4: Conta Caratteri
- `<stringa_input>` è la stringa su cui operare
- `[parametro_aggiuntivo]` è opzionale e richiesto solo per la funzione 3 (lunghezza massima)

### 2. Installazione Globale
```bash
npm install -g .
string-utils <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

## Esempi

```bash
# Inverti una stringa
node index.js 1 "Hello World"

# Verifica se è palindromo
node index.js 2 "A man a plan a canal Panama"

# Tronca una stringa
node index.js 3 "This is a long string" 10

# Conta i caratteri
node index.js 4 "hello"
```

## Sviluppo

### Script Disponibili

- `npm start`: Avvia l'applicazione
- `npm test`: Esegue i test
- `npm run test:watch`: Esegue i test in modalità watch
- `npm run test:coverage`: Genera il report di copertura dei test
- `npm run lint`: Esegue il linter
- `npm run format`: Formatta il codice

### Struttura del Progetto

```
ssgs-labo-02/
├── src/
│   └── stringUtils.js    # Implementazione delle funzioni di utilità
├── index.js             # Punto di ingresso CLI
├── package.json         # Configurazione del progetto
└── README.md           # Documentazione
```

## Testing

Il progetto utilizza Jest come framework di testing. I test sono organizzati per coprire tutte le funzionalità principali e i casi limite.

Per eseguire i test:
```bash
npm test
```

Per generare il report di copertura:
```bash
npm run test:coverage
```

## Contribuire

1. Crea un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito con licenza ISC. Vedi il file `LICENSE` per maggiori dettagli.
