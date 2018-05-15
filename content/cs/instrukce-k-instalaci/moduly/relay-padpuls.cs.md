+++
title = "Napdis"
author = "Enectiva"
tags = [
    "slovo1",
    "slovo2"
]
toc = false
date = "2018-05-14T12:59:57+02:00"
downloads = [
    "/relay-padpuls/MBConf_Setup_01.exe",
]
+++
Nastavení impulzního adaptéru Relay PadPuls
Převodník PadPuls použijete všude tam, kde je třeba převést pulsní výstupy z vodoměrů, plynoměrů, elektroměrů na M-Bus sběrnici. Převodník se dělá ve více variantách podle toho kolik pulsních vstupů do něj můžete připojit. Nastavení je zcela totožné pro všechny varianty. Maximální počet vstupů je 4.

Připojení modulu PadPuls
1. 	Nainstalovat Software MBCONF do PC (notebooku).
2. 	Připojit M-Bus Mikro-Master do volného USB portu PC (notebooku)

<img class="center" src="/images/relay-padpuls/01.png" style="width:30%"></img>

3. 	Pomocí „Správce zařízení“ na PC (notebooku) nastavit příslušný port PC (notebooku), tj. v našem případě COM6 (viz násedující obrázek). Na který COM port se MikroMaster připojil si můžete zkontrolovat přes Správce zařízení/Device manager ve vašich Windows.
<img class="center" src="/images/relay-padpuls/02.png" style="width:30%"></img>
<img class="center" src="/images/relay-padpuls/03.png" style="width:30%"></img>

Dvojitým kliknutím na zvolený port se otevře okno s nastavením portu. Zkontrolujeme, že jsou nastaveny následující hodnoty
Nastavení portu:

| Volba | Pole |
|--------|:-----:|
| `bit/sec` | 115200 |
| `dat. bity` | 8 |
| `parita` | žádná |
| `stop bity` | 1 |
| `řízení toku` | žádné |

4. 	Připojit adaptér PadPuls (svorky M M – M-Bus) ke svorkovnici M-Bus Mikro-
          Master USB (viz obr. 1)
5.	Aktivovat PadPuls adaptér. Sundat horní kryt adaptéru a propojku u nápisu BAT             nasunout na oba piny (viz obr. 4 – písmena BAT).

<img class="center" src="/images/relay-padpuls/04.png" style="width:30%"></img>

Aktivace adaptéru PadPuls. Existují varianty PadPuls M4L nebo tento výše na DINlištu. Pak pouze s jedním nebo dvěma vstupy, s displayem i bez něj. Princip nastavení je však vždy stejný. Níže obrázek připojení měřidel s pulsním výstupem na převodním a připojení Mbus sběrnice.

<img class="center" src="/images/relay-padpuls/05.png" style="width:30%"></img>

6. 	Otevřít program MBCONF
7. 	Provést základní nastavení:
    a) Nastavit č. portu stejný jako na PC(5)
    b) Nastavit rychlost komunikace = 2400 Bd (6)
    c) Nastavení rychlosti podle (7) není potřeba (automaticky se nastaví z nadřazeného               
zařízení)
    d) Nastavit M-Bus adresu (8). Adresa musí být na sběrnici unikátní. Pokud je na M-Bus sběrnici pouze jediné zařízení, je možné použít univerzální adresu 254.
    e) Autom. Readout - v případě aktivace SW vždy načte data po zapsání (je to výhodné  pro kontrolu správnosti programování – (13)
    f) MDK (Sensus) - používá se pro čtení se zařízením MDK od Sensus (15) 
    g) Po zapojení a nastavení parametrů stiskněte “Connect to meter” pro připojení k měřidlu (16)

<img class="center" src="/images/relay-padpuls/06.png" style="width:30%"></img>

<img class="center" src="/images/relay-padpuls/07.png" style="width:30%"></img>

Podle varianty převodníku PadPulse se objeví rozhraní s jedním až čtyřmi porty v horní části. Na našem obrázku je nastavení pro Port 1. Pro nastavení je třeba:
1.	Vyplnit primární adresu. Každé zařízení připojené na M-Bus sběrnici musí mít unikátní a jedinečnou primární adresu v rozsahu hodnot 0-253 (1)
2.	Vyplňte sekundární adresu, obvykle se jedná o sériové číslo měřidla a jedná se o číslo podle kterého je pak v Enectivě dané měřidlo vyčítáno. (2). I sekundární adresa musí být v rámci sběrnici unikátní.
3.	Vyberte typ měřené energie (3)
4.	(3), (4) a (5) jsou nejdůležitější z celého nastavení převodníku. Zde se nastavuje váha jednotlivým pulsům (multiplicator), poté současný stav měřidla (counter) a jednotka v jaké odečítáme (unit). Např. dle nastavení na obrázku říkáme, že jeden puls=jeden litr a na měřidle je aktuálně natočena hodnota 1302 litry.
Příklady nastavení hodnot jsou níže
5.	Je třeba synchronizovat čas a proto stikněte tlačítko (7) “Read clock of PC”.
6.	Jakmile máte vše nataveno stikněte „Write“ (8) a proběhne zápis všech nastavených hodnot do převodníku.
7.	Vždy je důležité si ověřit co je zapsáno a proto pro kontrolu stiskněte „Read“ (9). Uvidíte i stav čítače a tak lze ověřit, že jste převodník nastavili správně. 
**Pokud se vrátilo do původních hodnot před nastavení, je zapnuta ochrana proti zápisu a musí se stisknout černé tlačítko pro odblokování zápisu.**
8.	V dolní části vidíte přímo data která proudí do a z převodníku v hexadecimálním zápisu po bytech. Každý příkaz musí končit bytem E5, který znamená že vše proběhlo OK.

**Příklady nastavení hodnot:**

**Příklad 1**
Vodoměr má natočeno 45670 litrů a konstantu 1 puls = 10 litrů. Existují dvě možnosti nastavení:
a)	Unit = 10 l, Multiplicator = 1 / 1, Counter = 4567 (poslední nula není vyplněna, jelikož je nastaven skok po 10 litrech)
b)	Unit = 1 l, Multiplicator = 10 / 1, Counter = 45670 ( x 1 l)
**Příklad 2**
Elektroměr má na displeji hodnotu 12345 kWh a 64 pulsů=1kWh
Nastavení: Unit = 1kWh, Multiplicator = 1 / 64, Counter = 12345 ( x 1kWh)
**Příklad 3**
Elektroměr má natočeno 112,345 kWh a 1000 pulsů=1kWh
Nastavení: Unit = 1Wh, Multiplicator = 1 / 1, Counter = 112345 ( x 0,001kWh)

**Příklady nastavení elektroměrů pro nepřímé měření, které mají na měřící transformátory:**

**Příklad 4**
Elektroměr 1234,567 kWh, 5000 pulsů=1kWh, transformátory 600/5A
Potřebujeme převrácenou hodnotu:

**1 puls** == 1 kWh / 5000 * 600 / 5 = 1000 Wh / 5000 * 600/5 = **24 Wh**

a)	Unit = 1 Wh, Multiplicator = 24 / 1, Counter 1234567
	Každý puls připočítá 24 Wh
b)	Unit = 10 Wh, Multiplicator = 24 / 10 = 12 / 5, Counter 123456
	Každý 5. puls připočítá 12 jednotek (120 Wh)
c)	Unit = 100 Wh, Multiplicator = 24 / 100 = 6 / 25, Counter 12345
	Každý 25. puls připočítá 6 jednotek (600 Wh)
d)	Unit = 1 kWh, Multiplicator = 24 / 1000 = 6 / 250, Counter 1234
	Každý 250. puls připočítá 6 jednotek (6 kWh)
	
**Příklad 5**
Elektroměr 1234,567 kWh, 5000 pulsů=1kWh, transformátory 250/5A
Potřebujeme převrácenou hodnotu:

**1 puls** = 1 kWh / 5000 * 250 / 5 = 1000 Wh / 5000 * 250/5 = **10 Wh**

a)	Unit = 10 Wh, Multiplicator = 1 / 1, Counter 123456
	Každý puls připočítá 1 jednotku (10 Wh)
b)	Unit = 100 Wh, Multiplicator = 1 / 10, Counter 12345
	Každý 10. puls připočítá 1 jednotku (100 Wh)
c)	Unit = 1 kWh, Multiplicator = 1 / 100, Counter 1234
	Každý 100. puls připočítá 1 jednotku (1 kWh)
	
**Příklad 6**
Elektroměr ITRON (ČMD Distribuce/EON). Tlačítkem se lze dostat na dataCelk a pod registrem 2.4.2. vyhledat první část převodního poměru (např. 600 A) a pod 2.4.4. druhou část (5 A). Pod 1.8.0. je celkový činný odběr.
Elektroměr má uvedeno 5000 pulsů=1kWh, transformátory 600/5A

**1 kWh** = 5000 pulsů * 5 / 600 = 5000 / 120 = 41,6666 pulsu
**1 puls** = 1 kWh / 5000 * 600 / 5 = 1000 Wh / 5000 * 600/5 = **24 Wh**

**Příklad 7**
Elektroměr Actaris DC371, MT 500/5A. jednotky na registru 1.8.0. kWh, 5000 pulsů = 1kWh
Nastavení: Multiplicator 1/50, jednotka kWh a stav stejný jako na elektroměru.

**Příklad 8**
Elektroměr Actaris DC371, MT 400/5A. jednotky na registru 1.8.0. kWh, 5000 pulsů = 1kWh
Nastavení: Multiplicator 16/100, jednotka 100 Wh a stav stejný jako na elektroměru.

**Příklad 9**
Elektroměr Actaris DC371, MT 150/5A. jednotky na registru 1.8.0. kWh, 5000 pulsů = 1kWh
Nastavení: Multiplicator 6/100, jednotka kWh a stav stejný jako na elektroměru.