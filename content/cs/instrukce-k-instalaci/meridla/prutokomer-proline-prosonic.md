+++
title = "Průtokoměr Proline Prosonic Flow 90"
author = "Enectiva"
date = "2018-06-05T11:31:10+02:00"
tags = [
    "tag1",
    "tag2"
]
toc = false
[[downloads]]
title = "BA069DEN"
url = "/prutokomer-proline-prosonic/BA069DEN.pdf"
[[downloads]]
title = "TI057DEN"
url = "/prutokomer-proline-prosonic/TI057DEN.pdf"
+++
Průtokoměr může být v závislosti na verzi vybaven pulsním výstupem pro monitorování protečeného množství.

Pulsní výstup (pouze verze s označením A a D na konci) je vyveden na svorky 24 (+) a 25 (-) označené jako f-OUT nebo PULSE/FREQUENCY OUTPUT.

<img class="right" src="/images/prutokomer-proline-prosonic/zapojeni.png"></img>

Nastavení se provádí přes zobrazovací jednotku průtokoměru v sekci PULSE/FREQ. OUTP., kde je potřeba nastavit:
* OPERATION MODE - PULSE
* OUTPUT SIGNAL - 0 = PASSIVE -- POSITIVE
* ASSIGN PULSE - VOLUME FLOW
* PULSE VALUE - váha jednoho pulsu
* PULSE WIDTH - délka jednoho pulsu - Pozor - pokud je průtok vyšší, tak že by mezera mezi pulsy měla být kratší než délka pulsu, dojde k chybě
* SIMULATION PULSE - můžete aktivovat pro ověření, zda jednotka posílá pulsy. Při volbě COUNTDOWN se ve VALUE SIMULATION PULSE nastaví počet pulsů, které má jednotka vyslat
