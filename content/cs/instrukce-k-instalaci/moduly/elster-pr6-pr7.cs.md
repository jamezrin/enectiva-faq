+++
title = "Pulsní modul Elster PR6 / PR7"
author = "Enectiva"
tags = [
    "slovo1",
    "slovo2"
]
toc = false
date = "2018-05-14T11:23:38+02:00"
[[downloads]]
title = "Manuál"
url = "/elster-pr6-pr7/pr6-pr7-generator-impulzu-prospekt.pdf"
+++

Pulsní moduly PR6 a PR7 se používají pro vyčítání vodoměrů Elster.

Snímač PR6 je konstruován na domovní vodoměry R ½“ -  2“ typ V200, V200P, V220, C4000 (malý vodoměr označen V220)
Snímač PR7 je konstruován na průmyslové vodoměry DN 40 – 300 , typ H4000, H4200, S2000, C4000 ( hlavní počítadlo ), C3100 (Hlavní počítadlo od roku 2008)

## Instalace modulů PR6
### PR6 - V200
1.	Odtrhněte folii
2.	Sejměte víčko počítadla, připojte PR6 na čep víčka
3.	Stlačte PR6 směrem dolů dokud nezapadne na správné místo. Zabezpečte, aby sklo vodoměru bylo čisté
4.	K zabezpečení zatlačte dva zajišťovací cvoky

<img class="center" src="/images/elster-pr6-pr7/pr6-v200.png" style="width:30%"></img>

### PR6 - H400P
Odtrhněte folii
Odstraňte dva šroubky M3 z víčka. Zabezpečte, aby sklo vodoměru bylo čisté
Pomocí šroubováku zabezpečte PR6 dvěma šroubky M3. Ujistěte se, že šroubky jsou dotaženy a PR6 je umístěno na správné místo ( jestliže PR6 bylo dodáno bez šroubků použijte šroubky M3x10mm z nezapuštěnou hlavou. 
Nepřipojujte PR6 na závěs víčka
<img class="center" src="/images/elster-pr6-pr7/pr6-h400p.png" style="width:30%"></img>

### PR7
Odtrhněte folii
Pro zajištění nasaďte dva šroubky na PR7. Pokud je přístup k vodoměrům obtížný použijte plochý šroubovák
Nasaďte zajišťovací šroubky na konec montážních pomůcek. Uchopte montážní pomůcku za horní konec a otáčejte jako se šroubovákem pro dotažení šroubků: Jestliže je potřeba použijte pro dotažení plochý šroubovák.
<img class="center" src="/images/elster-pr6-pr7/pr7.png" style="width:30%"></img>

Použitelné jsou pro následující typy vodoměrů:

* PR6: V200, V210, V220F, C4000

* PR7: H4000, H4200, S2000, C4000 Hlavní počítadlo, C3100 Hlavní počítadlo od roku 2008

Obecně se PR6 používá pro menší průtoky, PR7 pro vyšší.

### Ukázka správně nainstalovaného modulu na vodoměr
<img class="center" src="/images/elster-pr6-pr7/pr6_02.jpg" style="width:30%"></img>

Modul je nainstalován tak, aby zůstal viditelný ukazatel stavu na vodoměru.
### Zapojení kabelů
<img class="center" src="/images/elster-pr6-pr7/pr6_01.png" style="width:30%"></img>

* CH1P (žlutý)	Dopředné a zpětné výstupní impulzy (nutné zapojit vždy) 

* CH1D (bílý)	Signalizuje směr proudění (sepnutí=dopředný průtok) 

* CH2P (červený)	Rozdíl dopředného a zpětného průtoku. Tento impulz proudu kompenzuje jakýkoliv protiproud. Během zpětného průtoku nejsou posílány žádné impulzy na výstup snímače. Po obnovení dopředného průtoku, jsou nejprve impulzy uložené do paměti snímače smazány. Tyto pulzy jsou nejprve odečítány z předešlého zpětného průtoku. Teprve po přemazání celé paměti s uloženými zpětnými impulzy se začnou opět vysílat pulzy na výstup snímače. 

* CH2C (zelený)	Signalizuje směr proudění (rozepnutí=zpětný, nebo nízký průtok) 

* TAMP (hnědý) 	Signalizuje (sepnutím obvodu) odpojení pulzního měřiče od vodoměru, nebo nízký stav baterie. 

* GND (černý)	společný kabel pro všechny typy zapojení (nutné zapojit vždy)

Standardně se vyčítá rozdíl dopředného a zpětného průtoku, tedy červený (+) a černý (-) vodič.

Váha jednoho pulsu odpovídá hodnotě uvedené na modulu, nikoliv na vodoměru.

## Váha pulsů

Moduly generují pulsy odpovídající protečenému objemu. Váha jednoho pulsu je součinem pulsního faktoru vodom2ru a K-faktoru modulu.

### Pulsní faktor vodoměru

Pulsní faktor vodoměru lze nalézt na vodoměru společně s označením typu použitelného modulu. Například vodoměr s označením PR7 P:1 lze použít s modulem PR7 a jeho pulsní faktor následující za písmenem P je 1.

### K faktor modulu

Většina PR6 a PR7 má dva K faktory, protože čítače mají dva výstupy. Tyto faktory jsou označeny na čítači, například 1:100. První číslo je K-faktor pro primární výstup (1) a druhé číslo K-faktor pro sekundární výstup (100).  

V následující tabulce jsou příklady počítání s faktory
<img class="center" src="/images/elster-pr6-pr7/tabulka_faktoru.png" style="width:30%"></img>