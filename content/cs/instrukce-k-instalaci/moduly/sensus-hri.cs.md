+++
title = "SENSUS HRI-B M-Bus modul"
author = "Enectiva"
tags = [
    "slovo1",
    "slovo2"
]
toc = false
date = "2018-05-14T14:25:44+02:00"
downloads = [
    "/sensus-hri/minicom36108.exe",
    "/sensus-hri/CZ - HRI Data Sheet.pdf"
]
+++

HRI je univerzální systém, který je kompatibilní se širokou řadou vodoměrů. Dodáván je ve dvou řadách - jako pulsní jednotka (HRI-A), nebo jako datová jednotka s rozhraním M-Bus (HRI-B).
### Nastavení senzoru HRI-B

1. 	Nainstalovat SW MiniCom3 do počítače
2. 	Připojit M-Bus Mikro-Master do volného USB portu počítače
3. 	Pomocí „Správce zařízení“ na PC nastavit příslušný port PC (notebooku), tj. v našem případě COM10.
Nastavení portu:

    | Volba | Pole |
    |-------|:------:|
    | `bit/sec` | 115200 |
    | `datagram bit` | 8 |
    | `parita` | none |
    | `stop bit` | 1 |
    | `flow management` | none |

    <img class="center" src="/images/sensus-hri/hri_01.jpg" style="width:30%"></img>

4. 	Připojit senzor HRI-B pomocí vodičů (zelená, hnědá) ke svorkovnici M-Bus Mikro-Master USB

    <img class="center" src="/images/sensus-hri/hri_02.jpg" style="width:30%"></img>

5. 	Otevřít program MiniCom3 
6. 	Otevřít (v našem případě) port COM10 - příslušný port se automaticky nabídne
7.	Po záložkou „Zobrazit“ zaškrtneme Stavová lišta, Informace o měřidle a Odečty.
8.	Pod záložkou „Měřidla“ nastavit Typ měřidla (v našem případě HRI). Po dvojím kliknutí na něj se zobrazí jeho Primární adresa a Rychlost komunikace (viz bod 13).
9.	Pod záložkou „Příkazy - Start odečtu“ se zobrazí současné nastavení měřidla.	
10. Pod záložkou „Příkazy – Nastavit primární MBus adresu“ nastavit adresu měřidla v MBus síti. Volba je mezi čísli 1 až 250. Dále viz bod 13.
11.	Pod záložkou „Příkazy – Změnit ID měřidla“ je možno změnit ID měřidla.
12.	Pod záložkou „Příkazy – Konfigurace zařízení“ nastavit:
          Spotřeba – současnou hodnotu spotřeby na vodoměru - počet desetinných míst odpovídá nastavené D-Hodnotě tak, aby jeden puls posunul spotřebu o jednotku na posledním místě 
	Zpětná paměť – zaškrtnutím políčka „Nastavit zpětnou paměť“ vynulujeme
	buffer paměti
          D – Hodnota  - nastavit multiplikátor impulzů (1 – 1000) l/imp.
	Mode – je standardně nastaven B4 (nelze změnit) 
13.   Pod záložkou „Parametry měřidla“ nastavit: 

    * Rychlost – 2400 Bd
    * Použití primární nebo sekundární adresy.
    * Primární adresu použijeme, máme-li více než 1 měřidlo připojené ke sběrnici MBus a známe primární adresy všech připojených měřidel a jejich adresy jsou odlišné. Je-li připojeno pouze 1 měřidlo můžeme komunikovat přes obecnou adresu 254.
    * Sekundární adresu použijeme, máme-li více než 1 měřidlo připojené ke sběrnici MBus a neznáme primární adresy připojených měřidel nebo jsou-li jejich adresy stejné. **Sekundární adresování je preferováno.**
    * SND_NKE příkaz - použít (příkaz je nutný pro aktivaci některých měřidel)

POZOR!
U modulů HRI-Mei je potřeba v nastavení vypnout multitelgram a přepnout do režimu “Encoder telegram”.
<img class="center" src="/images/sensus-hri/hri_03.jpg" style="width:80%"></img>

### Připojení modulu HRI na M-Bus sběrnici
Moduly HRI-B se na M-Bus sběrnici připojují pomocí hnědého a zeleného vodiče.
Vodiče jsou označeny následujícími barvami:

* Hnědý - společná zem
* Zelený - data (M-Bus)
* Bílý, žlutý - konfigurovatelné pulsní výstupy