+++
author = "Enectiva"
date = "2017-06-05T13:14:15+02:00"
sections = "manuals/splitters"
tags = [
    "manuals",
    "splitters",
    "M-Bus Splitter"
]
title = "Configurare e connettere uno Splitter M-Bus"
toc = false

+++

Utilizzerete lo splitter M-Bus se si desidera leggere contemporaneamente i contatori da due unità centrali (Master M-Bus). Esempi tipici di utilizzo di contatori di distribuzione di calore (impianti di riscaldamento urbani) dotati di uscita M-Bus per CHP e che vogliono un metro di tali caratteristiche collegate al sistema Enectiva. In questo caso è necessario dividere l'uscita M-Bus dal contatore in due uscite M-Bus.

Lo splitter M-Bus può separare un bus con un massimo di 4 contatori M-Bus.

<img class = "center" src = "/images/m-bus-splitter.jpg" style = "larghezza: 35%"> </ img>

## Método de conexión

1. Se si desidera dividere un bus con più di 1 metro, è necessario collegare il 24 V ca ai terminali contrassegnati nell'immagine sopra. Se si dispone solo di un metro sul bus, questi terminali sono vuoti. Verrà utilizzato solo l'ingresso M-Bus 2 (numero 3) a cui è collegato uno dei ** master M-Bus **.
2. Collegare due terminali bus (M-Bus IN) al bus che si desidera suddividere. Può essere con uno dei quattro contatori.
3. Per il terminale di alimentazione M-Bus OUT2, collegare il bus che si desidera alimentare il nostro splitter M-Bus nel caso in cui la sorgente 24 VAC non venga utilizzata nel terminale 1.
4. Collegare il morsetto 4 (M-Bus OUT1 - Isolato) al nuovo bus ad esempio S Enectiva Maestro. (Master è solo un altro nome per un communicator, hub o unità centrale).

## Tipico utilizzo e situazione di partecipazione
Hai un collegamento dall'impianto di riscaldamento, vedi immagine posteriore. Il calorimetro e il contatore sono collegati al master M-Bus e leggono i dati dalla rete mobile (Modem GSM).

<img class = "center" src = "/images/calorimeter-watermeter-to-mbusmaster.jpg" style = "width: 50%"> </img>

È sufficiente leggere il calorimetro in Enectiva, vale a dire la sezione bus (cavo M-Bus 1) con il calorimetro deve essere separata in due segmenti distinti utilizzando un separatore. Ci sarà la situazione nella foto. Il cavo M-Bus è separato in M-Bus nel master originale e M-Bus 2 nella master Enectiva. (Master = Central Unit = Communicator = Concentratore)

<img class = "center" src = "/images/calorimeter-watermeter-to-enectiva_it.jpg" style = "width: 50%"> </img>

Per configurare il M-Bus Splitter, solo i ponticelli (ponte di cortocircuito) sul bordo superiore dello splitter M-Bus.

<img class = "centro" src = "/images/short-circuit-jumper-mbus.jpg"> </img>

## Avviare

1. Quando l'alimentazione è collegata tramite un terminale di alimentazione 24 VAC o M-Bus OUT2, non accade nulla. I diodi iniziano a lampeggiare dopo circa 1-3 minuti. Ci vuole un po 'di tempo per caricare i circuiti.
2. Dopo aver collegato tutti gli autobus sia all'ingresso che alle due uscite, è necessario eseguire la scansione del bus. Bisogna gettare il ponte giallo e riportarlo indietro. Quindi, attenderete circa 10 minuti affinché un LED lampeggia costantemente sull'M-Bus. Quando la scansione è collegata, questo LED lampeggerà in 12 secondi. 1 lampeggiare significa che c'è un metro sul bus, 2 significa 2 contatori, ecc ...
3. Lasciare sempre il ponte azzurro alla posizione 2 chiuso se la velocità del M-Bus è di 2400 bd / s. (Di solito è)
4. I ponti neri 3 e 4 sono sempre aperti. Il master M-Bus leggerà i dati dai contatori sul lato M-Bus IN ogni 1 minuto.
5. Lasciare sempre il ponticello rosso in posizione 5 chiuso quando la velocità del bus è sul M2 BUS OUT2 di 2400 bd / s (di solito è).

## AVVERTENZA IN CASO DI PROBLEMA !!!

1. I cavi devono essere collegati correttamente.
2. La tensione al M-Bus IN deve essere superiore a 23 V DC.
3. La tensione di M-Bus OUT 2 dovrebbe essere superiore a 26 V DC.
4. Tutti i contatori lato bus collegati al M-BUS IN devono avere un unico indirizzo principale M-Bus.

** Se i problemi persistono, contattare il team Enectiva. **
