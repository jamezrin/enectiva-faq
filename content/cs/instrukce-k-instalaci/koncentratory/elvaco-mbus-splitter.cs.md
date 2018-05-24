+++
title = "Nastavení a zapojení M-Bus Splitteru"
author = "Enectiva"
tags = [
    
    "slovo2"
]
toc = false
date = "2018-05-14T11:29:11+02:00"
[[downloads]]
title = "Manuál"
url = "/elvaco-mbus-splitter/m-bussplitter_quick_manual_a4_english.pdf"
+++

M-Bus splitter použijete v případě, že chcete vyčítat měřidla současně ze dvou centrálních jednotek (M-Bus Masterů). Typickým příkladem použití jsou měřidla distributorů tepla (městské teplárny), které již mají osazen M-Bus výstup pro účely teplárny a chcete takové měřidlo napojit do systému Enectiva. V tomto případě je nutné M-Bus výstup z měřidla rozdělit na dva M-Bus výstupy.
M-Bus splitter může rozdělit sběrnici s maximálním počtem 4ks M-Bus měřidel.

<img class="center" src="/images/elvaco-mbus-splitter/01.png" style="width:30%"></img>
**Způsob zapojení:**
1.	V případě že chcete rozdělit sběrnici s více než jedním měřidlem, je potřeba připojit napájení 24 V AC (na obrázku svorky 1). V případě, že máte na sběrnici, kterou chcete rozdělit pouze jedno měřidlo, tak tyto svorky zůstanou prázdné. K napájení je pak použit pouze vstup M-Bus OUT2 (na obrázku svorky 3) do které se připojí jeden z M-Bus masterů.

2.	Na svorky M-Bus IN (na obrázku svorky 2) připojte sběrnici kterou chcete rozdělit. Může být s jedním až čtyřmi měřidly. 

3.	Na svorky M-Bus OUT2 Power (na obrázku svorky 3) připojte sběrnici, která bude napájet M-Bus splitter v případě, že není použit zdroj 24V.

4.	Na svorky M-Bus OUT1 Isolated (na obrázku svorky 4) připojte novou sběrnici např. s Enectiva Masterem. (Master je jen jiné pojmenování pro Komunikátor, koncentrátor, centrální jendotku)

**Typická situace použití a zapojení:**
Od teplárny máte na místě zapojení (viz. obrázek níže). Kalorimetr a vodoměr jsou zapojeny do jejich M-Bus Masteru přes který odečítají data.

<img class="center" src="/images/elvaco-mbus-splitter/02.png" style="width:30%"></img>

Potřebujeme odečítat do Enectivy pouze kalorimetr, tzn. část sběrnice (M-Bus 1 kabelu) s kalorimetrem je potřeba rozdělit na dva nezávislé segmenty pomocí splitteru. Vznikne situace na obrázku. Původní M-bus 1 kabel z kalorimetru je rozdělen na M-bus 1 do původního Masteru a M-bus 2 do Enectiva Masteru.

<img class="center" src="/images/elvaco-mbus-splitter/03.png" style="width:30%"></img>
Pro nastavení M-bus splitteru se použijí pouze barevné jumpery (zkratovací propojky) na horní hraně M-Bus splitteru

<img class="center" src="/images/elvaco-mbus-splitter/04.png" style="width:30%"></img>
**Uvedení do provozu:**

1.	Po připojení napájení ať už přes svorky 24 VAC nebo MBUS OUT2 Power svorky se chvíli nic neděje. Až po cca 1-3min se obvody nabijí a začnou blikat diody. 

2.	Po připojení všech sběrnic jak vstupní tak obou výstupních je potřeba proskenovat sběrnici. **Je potřeba vytáhnout žlutý jumper a zase ho nasadit zpět.** Pak budete asi 10min čekat za konstatního blikání diody u M-Bus IN. Po skončení skenování sběrnice bude tato dioda blikat v intervalu 12 sekund. 1 bliknutí znamená, že je na sběrnici jedno měřidlo, 2 bliknutí znamenají 2 měřidla atd.

3.	Modrý jumper na pozici 2 nechte sepnutý v případě že rychlost na sběrnici M-Bus IN je 2400 Bd. (typicky to tak je)

4.	Černé jumpery 3 a 4 nechte rozepnuté. M-Bus Master bude vyčítat vždy po 1min data z měřidel na straně M-Bus IN.

5.	Červený jumper na pozici 5 nechte sepnutý pokud je rychlost sběrnice na M-Bus OUT 2 2400 Bd. (typicky to tak je)

**V případě problému zkontrolujte následující**

1. Všechny kabely musí být správně připojeny.

2. Napětí na M-Bus IN musí být větší než 23 V DC. Pokud je nižší, zkuste postupně odpojovat jednotlivá měřidla.

3. Napětí na M-Bus OUT 2 musí být větší než 26 V DC. Zkontrolujte připojený M-Bus Master, případně zkontrolujte (připojte pokud není) zdroj 24V.

4. Všechna měřidla na segmentu sběrnice připojeném do M-Bus IN musí mít unikátní primární M-Bus adresu.

Pokud problém přetrvává kontaktujete Tým Enectiva.
