+++
author = "Enectiva"
date = "2017-06-05T14:40:16+02:00"
sections = "manuals/convertors"
tags = [
    "manuals",
    "convertors",
    "PadPuls"
]
title = "Configurare il relè Padplus dell'adattatore ad impulsi"
toc = false

+++

Il convertitore ** PadPuls ** viene utilizzato ogni volta che è necessario per convertire le uscite di impulsi da contatori d'acqua, gas e elettrometri al bus M-Bus. Il convertitore è realizzato in più versioni a seconda di quanti ingressi di impulso si può collegare ad esso. La configurazione è completamente identica per tutte le varianti. Il numero massimo di voci è 4.

## Risorse necessarie

- Installare il software ** MBCONF ** sul tuo PC / Laptop.
- Collegare M-Bus Micro-Master a una porta USB libera del computer, come COM6 (vedere l'immagine).
<img class="center" src="/images/padpuls-connection-to-pc.jpg" style="width:50%"></img>
- Utilizzare il ** Gestione periferiche ** sul computer per configurare la porta PC appropriata, cioè nel nostro caso il COM6 (vedere l'immagine sotto). Su quale porta COM è collegato a MikroMaster, puoi controllarlo con il ** Gestione periferiche / Gestione periferiche ** sul tuo Windows.
<img class="center" src="/images/padpuls-connection-port-to-mikromaster.jpg" style="width:50%"></img>
- Dal ** Device Manager ** si deve aprire la porta precedente e nella scheda ** la porta di configurazione ** hanno i seguenti parametri:
<img class="left" src="/images/padpuls-port-configuration.jpg"></img>

| Opzione | Campo |
| -------- |: -----: |
| `bit / sec` 115200 |
| `bit di datagramma` 8 |
| «parità» nessuno |
| `stop bit` | 1 |
| `gestione del flusso` nessuno |

<div style="clear:both"></div>

- Collegare l'adattatore PadPuls (terminali M-Bus) al terminale Micro-Master M-Bus USB (vedere la prima immagine).
- Attivare l'adattatore PadPuls. Rimuovere il coperchio superiore dell'adattatore e il ponticello del tag BAT su entrambi i perni. (vedi foto sotto)
<img class="center" src="/images/padpuls-activate-bat.jpg" style="width:50%"></img>
- Aprire il programma ** MBCONF **. Questi possono essere scaricati da Internet o inviare assistenza tecnica al Team Energetico.
<img class="center" src="/images/interface-relay-mbconf.jpg"></img>
- Impostazioni di base:

   - Impostare il numero della porta come nel PC ** (5) **.
   - Impostare la velocità di comunicazione a `2400 Bd` ** (6) **
   - La regolazione della velocità secondo ** (7) ** non è necessaria (viene configurata automaticamente dal dispositivo padre).
   - Impostare l'indirizzo M-Bus su 254 ** (8) **. ** 254 ** significa multicast. Questo è l'indirizzo tramite cui tutti i dispositivi rispondono, viene utilizzato nei casi in cui non si conosce l'indirizzo. Non è possibile utilizzarlo quando ci sono più dispositivi sul bus.
    - `Manufact` = ** caricato ** non è necessario cambiare. ** (9) **
    - `Tipo` = ** caricato ** non deve essere modificato ** (10) **
    - `Generazione` = ** caricato ** non deve essere cambiato ** (11) **
    - "Stato MBus" = ** caricato ** non è necessario cambiare ** (12) **
    - "Autom. Readout` = un'opzione, se il software di attivazione legge i dati dopo la scrittura (è utile verificare l'esattezza della programmazione - ** 13 **).
    - `ZVEI Optical Mode` = Se questa modalità è attivata, il dispositivo dotato dell'interfaccia ottica e del protocollo M-Bus conforme alla EN 1434-3 può essere scansionato e programmato utilizzando una testa di lettura ottica. Non lo usiamo nei progetti Enectiva. ** (14) **
- `MDK (Sensus)` = questo viene utilizzato per le letture con Sensus MDK ** (15) **.
- `Connect to meter` = questo viene utilizzato per richieste di dati dal dispositivo collegato (nel nostro caso PadPuls - ** 16 **).
- `Erase log.` = Elimina il contenuto del registro. ** (17) **
- Esci = uscire dal programma e salvare le impostazioni correnti. ** (18) **

** Dopo aver collegato e impostato i parametri, premere `connect to meter`. **

<img class="center" src="/images/parameters-mbconf.jpg" style="width:50%"></img>

A seconda della variante del convertitore ** PadPuls ** compare l'interfaccia con una o quattro porte in alto. Per impostare questo sguardo sull'immagine delle impostazioni ** Porta 1 **.

1. Compilare l'indirizzo primario. Ogni dispositivo collegato al bus M-Bus deve avere un singolo indirizzo e un singolo indirizzo primario nell'intervallo 0-254 (numero 1 nell'immagine precedente).
2. Compilare l'indirizzo secondario, di solito il numero di serie del contatore, e questo è il numero in cui il contatore viene letto in Enectiva. (N. 2). Anche l'indirizzo secondario deve essere univoco accanto al bus.
3. Selezionare il tipo di potenza misurata in ** Porta 1 **. Nel nostro caso ** acqua **.
4. I numeri ** 4 **, ** 5 ** e ** 6 ** sono le più importanti impostazioni del convertitore. Qui regolaamo la dimensione degli impulsi individualmente usando il ** Multiplicator **, quindi lo stato corrente del contatore (contatore) e l'unità in cui lo stiamo leggendo. Esempio, per quanto riguarda l'immagine, diciamo che un impulso è uguale a un litro e il contatore è attualmente a 1302L.

## Esempi di impostazioni del moltiplicatore
### Esempio 1
Il contatore dell'acqua ha 45.120 litri e un impulso = 10 litri. Hai due opzioni per configurare il convertitore:

1. Unità = 10L, Multiplicatore = 1/1, Contatore = 4512 (l'ultimo zero che non abbiamo menzionato perché l'hai impostato per saltare dopo 10 litri).
2. Unità = 1L, moltiplicatore = 10/1, contatore = 45120 (x 1L)

### Esempio 2
L'elettrometro ha 78346 kWh e 64 impulsi = 1kWh

1. ** Impostazione: ** Unità = 1kWh, Multiplicatore = 1/1, Contatore = 78346 (x 1kWh)

### Esempio 3
L'elettrometro ha 112,345kWh e 1.000 impulsi = 1kWh

1. ** Impostazione: ** Unità = 1Wh, Multiplicatore = 1/1, Contatore = 1123454 (x 0.001Wh)

### Esempi di come impostare le misurazioni indirette di metri con un dispositivo di misurazione

1. È necessario sincronizzare l'ora e quindi premere il pulsante contrassegnato con un tasto 7.
2. Una volta premuto tutti, premere `Write` e tutti i valori configurati vengono scritti sul trasmettitore.
3. È sempre importante verificare che sia scritto, quindi premere "Leggi" per verificarlo. Vedrai anche lo stato del contatore, in modo da poter verificare di aver configurato correttamente il trasmettitore.
