# WEATHER WEB APP

## Architecture

weather-app/
├── index.html      → la struttura (cosa vedi)
├── style.css       → la presentazione (come lo vedi)
└── js/
    ├── api.js      → i DATI    (parla solo con Open Meteo)
    ├── render.js   → la UI     (scrive solo nel DOM)
    └── app.js      → l'ORCHESTRA (stato + event listeners, collega i due)