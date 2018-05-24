+++
title = "Galvanický oddělovač GOU 6"
author = "Enectiva"
date = "2018-05-24T12:52:27+02:00"
tags = [
    "tag1",
    "tag2"
]
toc = false
[[downloads]]
title = "Manuál"
url = "/gou-6/gou6-navod.pdf"
+++

GOU 6 je jednosměrný šesti-kanálový přístroj, vyvinut jako speciální interface určený k jednosměrnému oddělení výstupů elektroměrů. Jeho použití musí odsouhlasit územě příslušný distributor. GOU 6 je řízen mikroprocesorem, který umožňuje pomocí osmi přepínačů DIP (umístěn pod krytkou svorek výstupů) jeho přizpůsobení požadavkům mnoha typů elektroměrů.

## Zapojení GOU6
* Napájení se připojuje na svorky 1 a 2.
* Výstupy elektroměru pak na svorky 5 - 12
* svorky 5 a 12 jsou společné, vnitřně propojené záporné póly
* svorky 6 - 11 jsou napájeny vniřním zdrojem 5V a jejich rozložení odpovídá výstupům OUT1 - OUT6
* Výstupy GOU6 (platí při poloze OFF u všech DIP přepínačů)
	* 1 - měřící perioda
	* 2 - impulsy (±kWh)
	* 3 - dodaná činná energie (-kWh)
	* 4 - odebraná činná energie (+kWh)
	* 5 - kapacitní jalová energie (-kVArh)
	* 6 - induktivní jalová energie (-kVArh)

Schema zapojení pro odečet činného odběru:
<img class="center" src="/images/gou-6/gou6-zapojeni.png" style="width:70%"></img>