+++
title = "Napdis"
author = "Enectiva"
url = "the-slug-is-the-section"
tags = [
    "slovo1",
    "slovo2"
]
oddily = "index-the-content-to-the-menu"
toc = false
date = "2018-05-14T11:23:38+02:00"
downloads = [
    "/elster-pr6-pr7/pr6-pr7-generator-impulzu-prospekt.pdf"
]
+++

### Pulsní modul Elster PR6 / PR7
Pulsní moduly PR6 a PR7 se používají pro vyčítání vodoměrů Elster.


Použitelné jsou pro následující typy vodoměrů (údaje výrobce): 
PR6: V200, V210, V220F, C4000
PR7: H4000, H4200, S2000, C4000 Hlavní počítadlo, C3100 Hlavní počítadlo

Obecně se PR6 používá pro menší průtoky, PR7 pro vyšší.

Ukázka správně nainstalovaného modulu na vodoměr
<img class="center" src="/images/elster-pr6-pr7/pr6_02.png" style="width:30%"></img>

Modul je nainstalován tak, aby zůstal viditelný ukazatel stavu na vodoměru.
Zapojení kabelů
<img class="center" src="/images/elster-pr6-pr7/pr6_01.png" style="width:30%"></img>
CH1P (žlutý)	Dopředné a zpětné výstupní impulzy (nutné zapojit vždy) 
CH1D (bílý)	Signalizuje směr proudění (sepnutí=dopředný průtok) 
CH2P (červený)	Rozdíl dopředného a zpětného průtoku. Tento impulz proudu kompenzuje jakýkoliv protiproud. Během zpětného průtoku nejsou posílány žádné impulzy na výstup snímače. Po obnovení dopředného průtoku, jsou nejprve impulzy uložené do paměti snímače smazány. Tyto pulzy jsou nejprve odečítány z předešlého zpětného průtoku. Teprve po přemazání celé paměti s uloženými zpětnými impulzy se začnou opět vysílat pulzy na výstup snímače. 
CH2C (zelený)	Signalizuje směr proudění (rozepnutí=zpětný, nebo nízký průtok) 
TAMP (hnědý) 	Signalizuje (sepnutím obvodu) odpojení pulzního měřiče od vodoměru, nebo nízký stav baterie. 
GND (černý)	společný kabel pro všechny typy zapojení (nutné zapojit vždy)

Standardně se vyčítá rozdíl dopředného a zpětného průtoku, tedy červený (+) a černý (-) vodič.

Váha jednoho pulsu odpovídá hodnotě uvedené na modulu, nikoliv na vodoměru.