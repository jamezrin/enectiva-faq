+++
title = "Nastavení W-MBus vysílače 169 MHz"
author = "Enectiva"
tags = [
    "slovo1",
    "slovo2"
]
toc = false
date = "2018-05-14T09:57:29+02:00"
+++
WM-bus 169 MHz vysílač funguje jako převodník mezi pulsním výstupem, či výstupem S0 a bezdrátovou variantou protokolu M-Bus tzv. Wireless Mbus. Tento převodník se použije v případě že potřebujete přenést data z vodoměru nebo plynoměru na větší vzdálenost vzduchem. Dosah vysílače závisí na poloze antény přijímače, ale pohybuje se ve volném terénu do 2km a v zástavbě 200-300m. 
Vysílač není vhodný pro použití k elektroměrům. Má krytí proti pronikání vlhkosti i prachu, je tedy možné ho použít ve vodoměrných šachtách a ve velmi vlhkém prostředí. Vysílač nemá certifikaci ATEX pro použití ve výbušném prostředí. K plynoměrům se standardně používá, ale až za hranící kde je nutný ATEX, který je vyžadován u vysokotlakých předávacích stanic v případě velkoodběrů.

K nastavení pulsního vysílače budete potřebovat:

1.	Vysílač WM-Bus 169
2.	Malý magnet
3.	USB Dongle pro nastavení přes PC/Laptop
4.  Nainstalovaný software **2N WMBus Configuration Tool**

<img class="center" src="/images/2n-vysilac/01.png" style="width:30%"></img>

**Postup nastavení**

1. 	Nainstalujte software **2N WMBus Configuration Tool**
2. 	Do USB počítače vložte USB Dongle. Počkejte až se nainstalují ovladače a ve správci zařízení (Device Manager v anglických Windows) se podívejte na jaký COM port se přiřadil. V našem případě se jedná o COM30.


    <img class="center" src="/images/2n-vysilac/02.png" style="width:30%"></img>

3.	Odstraňte izolaci z kabelu vysílače a připojte vysílač k pulsnímu výstupu vodoměru či plynoměru. Bílý drát vysílače je +.
4.	Spusťte program 2N WMBus Configuration Tool. V horní záložce vyberte port s připojeným USB donglem (v našem případě COM30) a stiskněte „Connect“
5.	V konfiguračním rozhraní stikněte „Load“ pro nahrání aktuální konfigurace vysílače. Bude vyzvání k přiložení magnetu k vysílači pro jeho aktivaci. Přiložte magnet a na různých místech s ním pohybujte po vysílači dokud se nenahrají data.


    <img class="center" src="/images/2n-vysilac/03.png" style="width:30%"></img>

6.	Jakmile vidíte data z vysílače, můžete si ověřit, že se jedná o ten samý dle Wmbus adresy která se schoduje se štítkem vysílače. V našem případě je to adresa 200. Poté se podívejte na stav měřidla, ke kterému vysílač připojujete. 
    V našem případě se jedná o vodoměr s aktuálním stavem 1,491 m3 a je označeno konstantou  1 impuls=0,001 m3 (tedy 1 litr). Stejně musíte nastavit i vysílač. Do prvního pole (číslo 2 na obr.) aktuální stav, do druhého konstantu (číslo 3 na obr.) jaké hodnotě se rovná jeden impuls. Poté zaškrtněte aktivaci vysílání (číslo 4) a nastavte periodu v jaké bude vysílač odesílat data. Doporučujeme 600 s, při které je výdrž baterie vysílače cca 5 let. Varianty nastavení jsou popsány dále v samostatné části.

    <img class="center" src="/images/2n-vysilac/04.png" style="width:30%"></img>

7.	Poté co nastavíte vysílač stikněte tlačítko „Write“  (číslo 6 na obr.) pro zápis konfigurace do vysílače. Budete znovu vyzvání k přejíždění magnetem. Napřed pro aktivaci vysílače k zápisu a poté pro potvrzení konfigurace. Pokud nestihnete zápis v časovém limitu budete informování chybovou hláškou na obrazovce a postup zápisu musíte opakovat.
8.	K vysílači je dodávána objímka na zeď do které ho lze uchytit na jeden šroub. Vždy je nutné zajistit vysílač proti poškození či odtržení kabelu od měřidla.

#### POZOR
Velmi často se stává, že technik odjede z instalace a má nastavenou špatnou hodnotu na vysílači. Je nutné hlavně dbát na konstantu kolik impulsů je jaká jednotka. Vždy proto doporučujeme nastavit vysílač poprvé s krátkou periodou vysílání např. 60 sekund. Poté kliknout na tlačítko „Monitoring“, „Start“ a počkat do doby, než se vám na obrazovce objeví váš vysílač se správnou hodnotou odečtu. Poté zastavit monitoring „stop“ přejít zpět na záložku „Configuration“, nastavit delší periodu např. 600 sekund a tu finálně zapsat do vysílače.


<img class="center" src="/images/2n-vysilac/05.png" style="width:30%"></img>
Pokud technik z nějakého důvodu odpojí vysílač a odváží ho z místa instalace zpět, je potřeba zaizolovat bílý výstup proti zabránění zkratu a deaktivovat jeho vysílání přes konfigurační program. Tím ze zabrání vybíjení baterie.
Vždy je lepší chvíli na instalačním místě po nastavení počkat a ověřit, že vysílač správně načítá pulsy a vysílá správné hodnoty.
Pokud máte pocit, že vysílač nenačítá nové hodnoty je možné na chvíli (cca 10ms) zkratovat jeho vstupní svorky. Tím dojde k vygenerování náhodného množství pulsů, takže je nutné ho znovu nastavit ale můžete tím ověřit, že je funční.

#### Příklady nastavení vysílače
Poslední číslice zadaného stavu musí odpovídat váze jednoho pulsu. Příchozí puls tak vždy zvýší stav o jednotku na poslední pozici.
**Příklad 1**
Vodoměr má aktuální stav  4,567 m3, kostantu 1 puls = 0,001 m3 = 1 litr
Nastavení: hodnota 4,567; koeficient 1 puls = 0,001m3
**Příklad 2**
Vodoměr má aktuální stav  1,23 m3, kostantu 1 puls = 0,001 m3 = 1 litr
Nastavení: hodnota 1,230; koeficient 1 puls = 0,001m3
**Příklad 3**
Vodoměr má aktuální stav  3,456 m3, kostantu 1 puls = 0,01 m3 = 10 litrů
Nastavení: hodnota 3,45; koeficient 1 puls = 0,01m3