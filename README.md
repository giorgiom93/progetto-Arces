# Software di Gestione Corsi - Scuola di Formazione Arces  

## Descrizione del Progetto  
Questo progetto è un software di gestione dei corsi sviluppato per la **Scuola di Formazione Arces**.  
Il software è stato realizzato nell'ambito del tirocinio formativo di due allievi, **Elena** e **Giorgio**, frequentanti i corsi di **Sviluppatore Backend** e **Sviluppatore Frontend** dell'anno 2024.  

L'obiettivo principale del progetto è fornire una piattaforma intuitiva e funzionale per amministrare i corsi di formazione, gestire gli studenti, e facilitare l'organizzazione interna della scuola.  

---

## Funzionalità Principali  
### Per gli Amministratori:  
- **Gestione Corsi**:  
  - Creazione, modifica e cancellazione di corsi.  
  - Visualizzazione del calendario dei corsi.  
- **Gestione Iscrizioni**:  
  - Registrazione di nuovi studenti.  
  - Gestione delle iscrizioni ai corsi.  
- **Report e Statistiche**:  
  - Generazione di report sull'andamento dei corsi.  
  - Monitoraggio della partecipazione degli studenti.  

### Per gli Studenti:  
- **Accesso Personale**:  
  - Visualizzazione del proprio profilo e dei corsi frequentati.  
- **Gestione Iscrizioni**:  
  - Consultazione dell'elenco dei corsi disponibili.  
  - Iscrizione ai corsi di interesse.  

---

## Tecnologie Utilizzate  
Il progetto è stato sviluppato utilizzando le seguenti tecnologie:  

### Frontend:  
- **HTML5, CSS3, JavaScript**  
- **React.js**: Per lo sviluppo dell'interfaccia utente interattiva.  
- **Bootstrap**: Per uno stile rapido e reattivo.  

### Backend:  
- **Spring Boot**: Framework Java per la gestione della logica backend e delle API REST.  
- **MySQL Aiven**: Database SQL ospitato su Aiven per memorizzare i dati relativi a corsi e studenti.  
- **Render**: Piattaforma di deploy per l'applicazione backend.  

---

## Installazione e Utilizzo  

### Prerequisiti  
- **Java JDK 17** o superiore  
- **Maven** (opzionale, se non integrato nel tuo IDE)  
- **Node.js** (per il frontend)  
- **MySQL** (con configurazione di accesso ad Aiven)  

### Istruzioni  

#### Backend  
1. Clona il repository:  
   ```bash
   git clone https://github.com/username/progetto-arces.git
   cd progetto-arces/backend
