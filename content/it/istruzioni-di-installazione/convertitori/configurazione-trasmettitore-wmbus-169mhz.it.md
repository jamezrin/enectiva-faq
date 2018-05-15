+++
author = "Enectiva"
date = "2017-06-05T09:29:18+02:00"
sections = "manuals/convertors"
tags = [
    "manuals",
    "convertors"
]
title = "Configurazione Trasmettitore WM-Bus 169Mhz"
toc = false

+++

Il trasmettitore ** WM-Bus 169Mhz ** funziona come convertitore tra un'uscita di impulsi (o uscite S0) e varianti di protocollo wireless M-Bus. Questo convertitore viene utilizzato quando c'è la necessità di trasferire dati dal misuratore o ad una distanza di metri o maggiori nell'aria. La gamma di trasmissione dipende dalla posizione dell'antenna del ricevitore, ma si sposta su un terreno aperto fino a 2Km e nelle zone da 200 a 300m.

## Avvisi
- ** Il trasmettitore non è adatto per l'utilizzo in contatori elettrici. **
- ** I morsetti di ingresso del trasmettitore sono protetti contro cortocircuiti. **

## Tutto ciò di cui hai bisogno
Per iniziare a configurare il trasmettitore WM-Bus 169Mhz, è necessario disporre dei seguenti elementi:

<img class="right" src="/images/requirements-configuration-transmisor-wmbus-169mhz_en.jpg" style="width:30%"></img>

1. Bus WM-169 del trasmettitore.
2. Un piccolo magnete.
3. Una chiavetta USB per PC / Laptop.
4. Strumento di configurazione software 2N WMBus Configuration Tool.

## Procedure di configurazione
Ora prepareremo tutto per essere in grado di configurare correttamente il nostro trasmettitore, perchè seguire i passaggi che hai in seguito:

1. Installare il software ** 2N WMBus Configuration Tool **
2. Inserire il USB in una porta del computer. Attendere alcuni secondi finché i driver non sono installati e quindi aprire il ** Device Manager ** per trovare la porta COM assegnata. ** Nel nostro caso è il COM30 **.
<img class="center" src="/images/device-manager-transmisor-wmbus-169mhz.jpg"></img>

3. Rimuovere l'isolamento sul cavo del trasmettitore e collegare il trasmettitore all'uscita impulsi del contatore acqua o del gas. Il filo bianco del trasmettitore è ** + **.
4. Eseguire il programma ** 2N WMBus Configuration Tool **. Nella scheda superiore selezionare COM30 e fare clic su "Connetti".
5. Ogni volta che si è nell'interfaccia di configurazione, premere `Carica` per caricare la configurazione corrente del trasmettitore. Sarà richiesto di collegare il magnete al trasmettitore per l'attivazione. Mettere il manuale in posizione e spostare il magnete attraverso il trasmettitore finché i dati non vengono salvati.

<img class="center" src="/images/magnet-transmisor-wmbus-169mhz.jpg"></img>

6. Una volta visualizzati i dati del trasmettitore, è possibile verificare che questo sia lo stesso indirizzo del Wmbus, che si trova sull'etichetta del trasmettitore. Nel nostro caso, questo è 200. Quindi, guarda lo stato del contatore in cui si sta collegando il trasmettitore. Nel nostro caso, questo è un contatore d'acqua con stato attuale di 1.491 m <sup> 3 </ sup> ed è contrassegnato con una costante di 1 impulso = 0.001 m <sup> 3 </ sup> (cioè 1L). Inoltre, è necessario regolare il trasmettitore. Nel primo campo (numero 2 nell'immagine) lo stato attuale, nella seconda costante (numero 3 nell'immagine), pari ad un impulso. Quindi, comporre l'attivazione della trasmissione (numero 4) e impostare il periodo in cui il trasmettitore invierà i dati. Raccomandiamo 600s dove la durata della batteria è superiore a 5 anni.
<img class="center" src="/images/configuration-transmisor-wmbus-169mhz.jpg"></img>

7. Dopo aver configurato il trasmettitore, premere il pulsante `Write` (numero 6) per scrivere la configurazione sul trasmettitore. Verrà richiesto di spostare il magnete sulla superficie. Prima di attivare il trasmettitore e quindi confermare la configurazione. Se i dati non sono scritti nel tempo di attesa, sullo schermo verrà visualizzato un messaggio di errore e si deve ripetere la procedura di scrittura.
8. Il trasmettitore è fornito dalla presa dove può essere fissato ad un bullone. È sempre necessario fissare il trasmettitore per evitare danni o tirare il cavo dal misuratore.
9. Il trasmettitore ha protezione contro l'umidità e la penetrazione della polvere. Può essere utilizzato nei pozzetti di acqua e in ambienti molto umidi. Inoltre, è ATEX certificato per l'utilizzo in ambienti pericolosi. I contatori di gas vengono utilizzati per impostazione predefinita, ma solo quando ATEX deve soddisfare un'alta stazione di pressurizzazione in caso di siti di produzione su vasta scala.

## Attenzione
Molto spesso, il tecnico lascia la stazione e stabilisce un valore errato per il trasmettitore. È fondamentale prestare attenzione all'unità di impulsi costanti. Pertanto, è sempre consigliabile impostare il trasmettitore per la prima volta con un breve periodo di emissione, ad esempio 60 secondi. Quindi fare clic sulla scheda ** Monitoraggio ** e sul pulsante Start, attendere circa 60 secondi finché il trasmettitore appare con il valore di lettura corretto sullo schermo. Quindi, per il controllo `stop` e tornare alla scheda di ** Configuration **, impostare un lungo periodo, ad esempio 600 secondi, e infine scrivere con` Write` sul trasmettitore.
<img class="center" src="/images/monitoring-transmisor-wmbus-169mhz.jpg"></img>

Sì i tecnici scollegano il trasmettitore per qualche motivo e misurano dal sito di installazione. È necessario isolare l'uscita del cavo bianco per evitare un cortocircuito e disattivare la trasmissione tramite il programma di configurazione. Ciò impedisce la fuoriuscita della batteria.

È sempre meglio aspettare l'installazione del sito per configurare e verificare successivamente che il trasmettitore legge gli impulsi correttamente e invia i valori corretti.
Se si pensa che il trasmettitore non legge i nuovi valori, è possibile abbreviare i terminali di ingresso di 10ms. Questo genera un numero casuale di impulsi, per cui è necessario ripristinarlo, ma è possibile vedere che è divertente.
