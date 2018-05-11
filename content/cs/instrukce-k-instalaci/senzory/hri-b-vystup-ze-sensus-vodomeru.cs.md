+++
author = "Enectiva"
date = "2017-06-07T16:39:07+02:00"
oddily = "manualy/senzory"
tags = [
    "Manualy",
    "Senzory"
]
title = "Nastavení senzoru HRI-B"
url = "/cs/oddily/manualy/senzory/hri-b-vystup-ze-sensus-vodomeru"
toc = false

+++

## Postup nastavení

1. Nainstalovat **SW MiniCom3** do PC (notebooku).
2. Připojit M-Bus Mikro-Master do volného USB portu PC (notebooku), např. COM6 (viz obr. 1)
3. Pomocí **Správce zařízení** na PC (notebooku) nastavit příslušný port PC (notebooku), tj. v našem případě COM6.

##### Configuraciones del puerto

| Volba | Pole |
|-------|:------:|
| `bit/sec` | 115-200 |
| `datagram bit` | 8 |
| `paridad` | none |
| `stop bit` | 1 |
| `flow management` | none |

4. Připojit senzor HRI-B pomocí vodičů (zelená, hnědá) ke svorkovnici M-Bus Mikro-Master USB (viz obr. 1)
5. Otevřít program MiniCom3.
6. Otevřít (v našem případě) **port COM6** (sám se nabídne příslušný port).
7. Po záložkou **Zobrazit** zaškrtneme Stavová lišta, `Informace` o `měřidle` a `Odečty`.
8. od záložkou **Měřidla** nastavit Typ měřidla (v našem případě HRI), zobrazí se jeho `Primární adresa` a `Rychlost komunikace`.
9. Pod záložkou **„Příkazy - Start odečtu** se zobrazí současné nastavení měřidla.
10. Pod záložkou **Příkazy – Nastavit primární MBus adresu** nastavit adresu měřidla v MBus síti. Volba je mezi čísli 1 až 250. Dále viz bod 13.
11. Pod záložkou **Příkazy – Změnit ID měřidla** je možno změnit ID měřidla.
12. Pod záložkou **Příkazy – Konfigurace zařízení** nastavit:

| Volba | Pole |
|--------|-------|
| `Spotřeba` | současnou hodnotu spotřeby |
| `Zpětná paměť` | zaškrtnutím políčka `Nastavit zpětnou paměť` vynulujeme. |
| `buffer paměti` ||
| `D – Hodnota` | nastavit multiplikátor impulzů `(1 – 1000) l/imp.` |
| `Mode` | je standardně nastaven `B4` (nelze změnit)  |

13. Pod záložkou **Parametry měřidla** nastavit:

| Volba | Pole |
|--------|-------|
| `Rychlost` | 2400 nebo 300 Bd |

## Použití primární nebo sekundární adresy.

- Primární adresu použijeme, máme-li více než 1 měřidlo připojené ke sběrnici MBus a známe primární adresy všech připojených měřidel a jejich adresy jsou odlišné. Je-li připojeno pouze 1 měřidlo můžeme komunikovat přes obecnou adresu 254.
- Sekundární adresu použijeme, máme-li více než 1 měřidlo připojené ke sběrnici MBus a neznáme primární adresy připojených měřidel nebo jsou-li jejich adresy stejné.

**SND_NKE** příkaz - použít (příkaz je nutný pro aktivaci některých měřidel)

<img class="center" src="/images/connection-hrib-to-computer.jpg" style="width:70%"></img>
