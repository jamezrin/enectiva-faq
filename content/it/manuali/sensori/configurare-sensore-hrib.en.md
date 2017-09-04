+++
author = "Enectiva"
date = "2017-06-05T11:21:03+02:00"
sections = "manuals/sensors"
tags = [
    "manuals",
    "sensors",
    "HRI-B"
]
title = "Configure the HRI-B sensor"
toc = false
url = "/en/manuals/sensores/configure-sensor-hrib"

+++

Le seguenti operazioni illustreranno l'installazione e la configurazione dei componenti necessari per installare correttamente il sensore HRI-B.

## Procedure per configurare il sensore HRI-B

1. Installare il software MiniCom3 sul PC / Laptop.
2. Collegare il micro-master M-Bus ad una porta libera del computer, come COM6 (vedere l'immagine).
3. Utilizzare il ** Device Manager ** sul computer per configurare la porta appropriata, cioè nel nostro caso è COM6.

##### Impostazioni della porta

| Opzione | Campo |
| ------- |: ------: |
| `bit / sec` 115-200 |
| `bit di datagramma` 8 |
| «parità» nessuno |
| `stop bit` | 1 |
| `gestione del flusso` nessuno |

4. Collegare il sensore HRI-B con il cavo (verde, marrone) al terminale USB M-Bus Micro-Master (vedere l'immagine).
5. Aprire il programma MiniCom3.
6. Aprire la porta ** COM6 (nel nostro caso) **, nel tuo caso sarà un'altra porta.
7. Fare clic sulla scheda ** Visualizza ** per selezionare la barra di stato, le informazioni di misura e le probabilità.
8. Nella scheda ** Indicatori **, configurare il ** tipo di scartamento ** (nel nostro caso, HRI) per visualizzare l'indirizzo principale e la velocità di comunicazione.
9. Nella scheda ** Comandi - Avvia lettura, è possibile visualizzare le impostazioni correnti del misuratore.
10. Nella scheda ** Comandi - Imposta indirizzo principale MBus **, configurare l'indirizzo del misuratore sulla rete MBus. La scelta è compresa fra 1 e 250. Vedi più nel punto 13 seguente.
11. È possibile modificare l'ID calibro sotto la scheda ** Comandi - Modifica calibro ID **.
12. Nella scheda ** Comandi - Dispositivo di configurazione, impostare:

| Opzione | Campo |
| -------- | ------- |
| `Consumo` Valore del consumo corrente
| `Memoria di backup ' Lasciare la casella 'Imposta memoria' per ripristinare. |
| `Buffer memory` ||
| `D-Value` | Impostazione del moltiplicatore di impulsi (1 - 1000) l / imp.` |
| `Mode` | Il valore predefinito è `B4` (non può essere modificato) |

13. Nella scheda ** Parametri di misura **, regolare:

| Opzione | Campo |
| -------- | ------- |
| «Velocità» 2400 o 300 Bd |

## Utilizza l'indirizzo primario o secondario.

- Utilizziamo l'indirizzo primario se abbiamo collegato più di un metro al M-Bus e sono noti gli indirizzi primari di tutti i contatori collegati ei loro indirizzi sono diversi. Se hai solo un metro collegato, possiamo mantenere la comunicazione attraverso l'indirizzo generale 254.
- Utilizziamo l'indirizzo secondario se ho più di un metro collegato all'M-Bus e non conosciamo l'indirizzo principale del contatore o se i loro indirizzi sono uguali.

Il comando ** SND_NKE ** è necessario per attivare alcuni metri.

<img class="center" src="/images/connection-hrib-to-computer.jpg" style="width:70%"></img>
