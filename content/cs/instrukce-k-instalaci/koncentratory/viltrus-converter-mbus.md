+++
title = "Viltrus Converter MBus-RS485"
author = "Enectiva"
date = "2018-05-28T13:24:06+02:00"
tags = [
    "mbus",
    "rs486"
]
toc = false
+++

Převodník umožňuje připojení až 250 měřidel s rozhraním M-Bus do koncentrátoru používajícího fyzické rozhraní RS-485. Komunikace stále probíhá na protokolu M-Bus, lze ho tedy používat pouze na zařízeních umožňujících tuto kombinaci, například SmartCom 485. Samotný převodník není nutné nijak nastavovat.

## Zapojení převodníku

<img class="left" src="/images/viltrus-converter-mbus/viltrus_converter.jpg" style="width:40%"></img>

* 1, 2 - M-Bus sběrnice s měřidly
* 3, 4, 5 - RS-485 (+,-,GND)
* 6, 7, 8 - napájení 230V~ (PE, N, L)

Pozor! U rozhraní RS-485 je nutné dodržovat polaritu vodičů. Pokud by u některého prvku byla polarita obrácena, s velkou pravděpodobností pak nebude fungovat komunikace na celé sběrnici.
