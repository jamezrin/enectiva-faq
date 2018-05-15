+++
author = "Enectiva"
date = "2017-06-07T16:21:20+02:00"
oddily = "manualy/prevodniky"
tags = [
    "Manualy",
    "Prevodniky"
]
title = "Nastavení impulzního adaptéru PadPuls (Relay)"
toc = false
+++

Převodník PadPuls použijete všude tam, kde je třeba převést pulsní výstupy z vodoměrů, plynoměrů, elektorměrů na Mbus sběrnici. Převodník se dělá ve více variantách podle toho kolik pulsních vstupů do něj můžete připojit. Nastavení je zcela totožné pro všechny varianty. Maximální počet vstupů je 4.

## Zdroje

- Nainstalovat **Software MBCONF** do PC (notebooku).
- Připojit M-Bus Mikro-Master do volného USB portu PC (notebooku), např. COM6 (viz obr. 1)
<img class="center" src="/images/padpuls-connection-to-pc.jpg" style="width:50%"></img>
- Pomocí **Správce zařízení** na PC (notebooku) nastavit příslušný port PC (notebooku), tj. v našem případě COM6 (viz obr. 2). Na který COM port se MikroMaster připojil si můžete zkontrolovat přes **Správce zařízení/Device manager** ve vašich Windows.
<img class="center" src="/images/padpuls-connection-port-to-mikromaster.jpg" style="width:50%"></img>
Ve **Správci zařízení** otevřeme daný port a na záložce **Port settings** musí být nastaveny následující hodnoty:

<img class="left" src="/images/padpuls-port-configuration.jpg"></img>

| Volba | Pole |
|--------|:-----:|
| `bit/sec` | 115200 |
| `datagram bit` | 8 |
| `parity` | none |
| `stop bit` | 1 |
| `flow managment` | none |

<div style="clear:both"></div>

- Připojit adaptér PadPuls (svorky M M – M-Bus) ke svorkovnici M-Bus Mikro-Master USB (viz obr. 1)
- Aktivovat PadPuls adaptér. Sundat horní kryt adaptéru a propojku u nápisu BAT nasunout na oba piny (viz obr. 4 – písmena BAT).
<img class="center" src="/images/padpuls-activate-bat.jpg" style="width:50%"></img>
- Otevřít program MBCONF. Který je ke stažení normálně na internetu, případně zašle technická podpora týmu Enectiva.
<img class="center" src="/images/interface-relay-mbconf.jpg"></img>
- Provést základní nastavení:

    - Nastavit č. portu stejný jako na PC **(5)**.
    - Nastavit rychlost komunikace = `2400 Bd` **(6)**.
    - Nastavení rychlosti podle **(7)** není potřeba (automaticky se nastaví z nadřazeného zařízení).
    - MBus adresu nastavit na 254 **(8)**. **254** 254 znamená multicast. Jedná se o adresu na kterou odpovídají všechny zařízení, tudíž se používá v případech, kdy neznáte adresu. Nemůžete to vašk použít, když je na sběrnici více zařízení.
    - `Manufact` = načítá se, není třeba nastavit **(9)**
    - `Type` = načítá se, není třeba nastavit **(10)**
    - `Generation` = načítá se, není třeba nastavit **(11)**
    - `MBus state` = načítá se, není třeba nastavit **(12)**
    - `Autom. Readout` = je to volba, v případě aktivace SW vždy načte data po zapsání (je to výhodné  pro kontrolu správnosti programování - **13**).
    - `ZVEI Optical Mode` = v případě aktivace tohoto módu se zařízení vybavené optickým interface a MBus protokolem podle EN 1434-3 může být snímáno a programováno za použití optické čtecí hlavy. V Enectiva projektech nepoužíváme. **(14)**
    - `MDK (Sensus)` = toto se používá pro čtení se zařízením MDK od Sensus **(15)**.
    - `Connect to meter` = toto se použije pro vyžádání dat z připojeného zařízení (v našem případě PadPuls - **16**).
    - `Erase log.` = vymaže obsah log. Okna **(17)**
    - `Exit` = ukončí program a uloží současné nastavení **(18)**

**po zapojení a nastavení parametrů stiskněte `connect to meter`**

<img class="center" src="/images/parameters-mbconf.jpg" style="width:50%"></img>

Podle varianty převodníku **PadPulse** se objeví rozhranní s jedním až čtyřmy porty v horní části. Na našem obrázku je nastavení pro **Port 1**. Pro nastavení je třeba:

1. Vyplnit primární adresu. Každé zařízení připojené na M-Bus sběrnici musí mít unikátní a jedinečnou primární adresu v rozsahu hodnot 0-254 (Obr.číslo 1)
2. Vyplňte sekundární adresu, obvykle se jedná o sériové číslo měřidla a jedná se o číslo podle kterého je pak v Enective dané měřidlo vyčítáno. (Obr.číslo 2). I sekundární adresa musí být v rámci sběrnici unikátní.
3. Vyberte typ měřené energie na **portu 1.** V našem případě **water=voda**
4. Čísla **4**,**5** a **6** jsou nejdůležitější z celého nastavení převodníku. Zde se nastavuje váha jednotlivým pulsům přes **Multiplicator**, poté současný stav měřidla (čítače) a jednotka v jaké odečítáme. Např. Dle nastavení na obrázku říkáme že jeden puls=jeden litr a na měřidle je aktuálně natočeno 1302 litrů.

## Příklady nastavení multiplikátoru
### Příklad 1
Vodoměr má natočeno 45120 litrů a jeden pulse = 10litrů. Máte dvě možnosti jak nastavit převodník

1. Unit = 10L, Multiplicator = 1 / 1, Counter = 4512 (poslední nulu si všimněte, že jsme neuvedli jelikož máte nastaveno že to bude skákat po 10 litrech).
2. Unit = 1L, Multiplicator = 10 / 1, Counter = 45120 (x 1L)

### Příklad 2
Elektroměr má na display hodnotu 78346 kWh a 64 pulsů = 1kWh

1. **nastavení:** Unidad = 1kWh, Multiplicator = 1 / 1, Counter = 78346 (x 1kWh)

### Příklad 3
Elektroměr má natočeno 112,345 kWh a 1000 pulsů=1kWh

1. **nastavení:** Unidad = 1Wh, Multiplicator = 1 / 1, Counter = 1123454 (x 0,001Wh)

### Příklady jak nastavit elektroměry pro nepřímé měření, které mají na sobě měřící trafa

1. Je třeba synchronizovat čas a proto stikněte tlačítko označené 7.
2. Jakmile máte vše nataveno stikněte `Write` a proběhne zápis do převodníku všech nastavených hodnot.
3. Vždy je důležité si ověřit co je zapsáno a proto pro kontrolu stiskněte `Read`. Uvidíte i stav čítače a tak lze ověřit, že jste převodník nastavili spráně.
4. V dolní části vidíte přímo data která proudí do a z převodníku v hexadecimálním zápisu po bytech. Každý příkaz musí končit bytem E5, který znamená že vše proběhlo OK.
