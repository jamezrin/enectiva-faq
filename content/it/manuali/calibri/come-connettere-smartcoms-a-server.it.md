+++
author = "Enectiva"
date = "2017-05-31T11:02:40+02:00"
sections = "manuals/meters"
url = "/en/sections/manuals/how-to-connect-smartcoms-to-server"
tags = [
    "manuals",
    "meters",
    "smartcoms"
]
title = "Come connettere SmartComs ad un server"
toc = false
+++

<img class="center" src="/images/2n-smartcoms-pro.png" style="width:35%;border:0;box-shadow:none"></img>

> ** Gli SmartComs **, come sapete, sono dispositivi che possono misurare diversi sistemi di riscaldamento, raffreddamento ad aria, ecc ... Fondamentalmente, i ** SMC ** sono responsabili delle informazioni di recupero e di inviarle tradotte al server per poter generare report in soluzioni Enectiva.
Ti accompagnerò in questo viaggio per imparare a collegare il tuo primo SmartCom in pochi semplici passaggi:


## Scarica le risorse
Prima di iniziare, è necessario soddisfare una serie di requisiti:

- Il computer deve avere almeno Windows 7/8 ** o ** 10 ** per poter eseguire il programma.
- Il programma che hai bisogno di scaricare è [**SmartComs Configuration Software**](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Con esso, andiamo a configurare tutto il SmartCom che vuoi, quindi è uno strumento che ti serve molto spesso, salvo in un sito sicuro.
- Hai bisogno di un uncompressor per descimere la cartella in cui è trovato il programma che hai scaricato. Certo che si incontrerà [**WinRar**](https://www.winrar.es/descargas/winrar) o [**7-Zip**](http://www.7-zip.org/download.html), con uno di questi due è sufficiente. Anche se è possibile utilizzare Windows per estrarre i file dalla stessa cartella.
- Cavo e porta ** RS232 **, molti computer non hanno detto porta, anche se bisogna acquistare un adattatore USB che si trova in qualsiasi negozio informatico.

## Collegare SmartCom al PC e installare i driver necessari.
1. ** Il sistema non ha rilevato il dispositivo e non ha installato i driver: **

<img class="left" src="/images/not-installed-device.png" style="width:25%"></img>
In molti casi l'installazione dei driver necessari dei cavi seriali è di solito automatica, ma a volte il sistema non riesce a rilevarla prima o addirittura non installarla automaticamente. Se questo non è il caso e per collegare il cavo è installato automaticamente, è possibile passare al passaggio successivo.
È necessario andare a ** Home> Pannello di controllo> Gestione periferiche ** e trovare il dispositivo che si dispone di un punto interrogativo, normalmente la serie CDC. Una volta che l'hai trovato, clicca con il tasto destro nell'icona e nel dispositivo di aggiornamento. Quindi, avrai due scelte:

- Trovare il software del driver aggiornato automaticamente. ** (Scegli questa opzione) **
- Trovare il software del driver nel computer.

Per scegliere l'opzione sopra, il computer cercherà nel server di Windows Update il driver specifico del cavo e lo installerà. Per finire, e se tutto è andato bene, le finestre reali mostreranno qualcosa di simile a questo, in modo da poter andare avanti per realizzare le configurazioni per i nostri SmartComs.
<img class="center" src="/images/cable-installed.png" style="width:50%"></img>

2. ** Il sistema ha rilevato il dispositivo e dispone di driver installati. (la grande maggioranza delle volte) **
Se questo è il tuo caso, sei fortunato, non dovrai assolutamente niente, connetterti e iniziare a configurare il tuo SmartCom con i dati enectiva.cz. Vai al passo successivo.


## Configurazione di SmartCom e SmartCom PRO con Enectiva Server
Per essere in grado di configurare il nostro SmartCom, qualunque sia il tipo, abbiamo bisogno del programma che ho menzionato in precedenza, se ancora non lo puoi, puoi scaricarlo da [qui](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Una volta che lo hai, esegui. Ora, devi sapere due cose:

1. Quale porta è installata nel sistema? Ricorda la ** Device Manager ** di cui abbiamo parlato prima, beh, è il nome di detta porta. Normalmente, la porta è COM3 Serial, ma dipende se hai installato più porte.
     - Se conosci la porta, dovresti averlo selezionato in cima. ** È molto importante che tu abbia selezionato **.
2. Conosci l'edizione SmartCom quello che hai. È necessario sapere che il modo di configurarlo può variare tra le versioni.
3. Avere a disposizione i dati necessari per configurare SmartCom. Puoi trovarla qui sopra.

### Dati di configurazione
I dati di configurazione sono quelli che intendiamo presentare sul nostro SmartCom per poterlo connetterlo con il server. È molto importante che sempre di inserire una sezione con detti valori, salva i dati con il pulsante `Salva e riavvia`. Se non lo fai non farà nulla che inserisca i dati in quanto devono essere inseriti nella configurazione di SmartCom.

##### Opzioni generali

<img class="left" src="/images/general-terminal-configuration.png"></img>

| Opzione | Campo |
| -------- |: -----: |
| `Mode` | Client TCP. |
| «APN» internet |
| `Indirizzo IP` 95.170.88.124 |
| `Server Port` 41117 |
| `Password` | 12345 |

##### Opzioni Ethernet

<img class="left" src="/images/ethernet-terminal-configuration.png"></img>

| Opzione | Campo |
| -------- |: -----: |
| `Canale primario` | . GSM
| `Canale secondario` . GSM
| `Indirizzo IP` Ottieni automaticamente un indirizzo IP. |

##### Opzioni RS485 / M-Bus

<img class="left" src="/images/m-bus-terminal-configuration.png"></img>

| Opzione | Campo |
| -------- |: -----: |
| `Velocità [bd / s]` | 2400 |
| "Bit di dati" 8 |
| «Arresto bit» 1 |
| «Parità» Anche |
| `Indirizzo IP` Ottieni automaticamente un indirizzo IP. |

##### FW opzioni di caricamento
Qui, l'unico che avremo in considerazione è che abbiamo bisogno del firmware ufficiale di Enectiva, che viene modificato per funzionare con il server. Questo firmware dobbiamo eseguire un'operazione di aggiornamento nel nostro SmartCom:

<img class="center" src="/images/fw-upload-terminal-configuration.png"></img>

1. Spingerlo sul pulsante `Browser` e trovare il firmware` SC_1-12-0-12-24_Mbus_store_posledni.bin`.
2. Spingerlo a `Accetta`, chiuderà l'explorer di file e potremo iniziare ad aggiornare il nostro SmartCom premendo` Start`.
3. Attendiamo qualche minuto fino a finire.

##### Opzioni di comando AT proprie
<img class="center" src="/images/own-at-commands-terminal-configuration.png"></img>
È un terminale in cui possiamo inserire parametri di calcestruzzo che non possono essere configurati tramite le opzioni del programma, normalmente sono comandi avanzati ma sono necessari per il corretto funzionamento dei nostri dispositivi. Nel nostro caso avremo solo bisogno dei seguenti comandi:
<center>

| AT Comandos |
| ----------- |
| `at ^ scams =" abilita ", 1` |
| `at ^ scping =" host "," 95.170.88.124 "` |
| `at ^ scping =" intervallo ", 5` |
| `at ^ scping =" srestart "` |

</center>

Dopo aver inserito i parametri sopra indicati, è necessario premere il tasto `Start` per scaricare i dati in SmartCom. Una volta terminato il processo, collegare l'antenna, la scheda SIM o il cavo Ethernet (a seconda del metodo di connessione) e verificare che la luce si blocca.
