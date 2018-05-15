+++
title = "Nastavení a zapojení M-Bus Splitteru"
author = "Enectiva"
date = "2017-06-07T16:50:18+02:00"
tags = [
    
    "Rozdelovace"
]
toc = false
+++

M-Bus splitter použijete v případě, že chcete vyčítat měřidla současně ze dvou centrálních jednotek (Mbus Masterů). Typickým příkladem použití jsou měřidla distributorů tepla (městské teplárny), které již mají osazen Mbus výstup pro účely teplárny a chcete takové měřidlo napojit do systému Enectiva. V tomto případě je nutné Mbus výstup z měřidla rozdělit (anglicky splitter) na dva M-bus výstupy.

M-Bus splitter může rozdělit sběrnici s maximálním počtem 4ks M-bus měřidel.

<img class="center" src="/images/m-bus-splitter.jpg" style="width:35%"></img>

## Způsob zapojení:

1. V případě že chcete rozdělit sběrnici s více než jedním měřidlem, je potřeba připojit napájení 24 VAC na svorky označené v obrázku číslicí 1. V případě, že máte na sběrnici, kterou chcete rozdělit pouze jedno měřidlo, tak tyto svorky jsou prázdné. K napájení je pak použit pouze vstup M-Bus out 2 (svorka číslo 3) do které se připojí jeden z M-bus masterů.
2. Na svorky číslo dva (M-bus IN) připojte sběrnici kterou chcete rozdělit. Může být s jedním až čtyřmi měřidly.
3. Na svorky číslo 3 (M-bus OUT2 Power) připojte sběrnici kterou chcete napájet náš M-bus splitter v případě, že není použit zdroj 24VAC na svorce číslo 1.
4. Na svorky číslo 4 (M-bus OUT1 – Isolated) připojte novou sběrnici např. S Enectiva Masterem. (Master je jen jiné pojmenování pro Komunikátor, koncentrátor, centrální jendotku)

## Typická situace použití a zapojení:
Od teplárny máte na místě zapojení viz. obrázek níže. Kalorimetr a vodoměr jsou zapojeny do jejich M-bus masteru a přes mobilní síť (GSM modem) odečítají data.

<img class="center" src="/images/calorimeter-watermeter-to-mbusmaster.jpg" style="width:50%"></img>

Vy potřebujete odečítat do Enectivy pouze Kalorimetr, tzn. Část sběrnice (M-bus 1 kabelu) s kalorimetrem je potřeba rozdělit na dva nezávislé segmenty pomocí splitteru. Vznikne situace na obrázku. Původní M-bus 1 kabel z kalorimetru je rozdělen na M-bus 1 do původního masteru a M-bus 2 do Enectiva Masteru. (Master=Centrální jednotka= Komunikátor= Koncentrátor)

<img class="center" src="/images/calorimeter-watermeter-to-enectiva.jpg" style="width:50%"></img>

Pro nastavení M-bus splitteru se použijí pouze barevné jumpery (zkratovací propojky) na horní hraně M-Bus splitteru

<img class="center" src="/images/short-circuit-jumper-mbus.jpg"></img>

## Uvedení do provoz:

1. Po připojení napájení ať už přes 24 VAC nebo Mbus OUT2 Power svorky se chvíli nic neděje. Až po cca 1-3min začnou blikat diody. Chvíli to trvá než se nabijí obvody.
2. Po připojení všech sběrnic jak vstupní tak obou výstupních je potřeba proskenovat sběrnici. Je potřeba vytáhnout žlutý jumper a zase ho nasadit zpět. Pak budete asi 10min čekat za konstatního blikání diody u M-bus In. Po skončení skenování sběrnice bude tato dioda blikat v intervalu 12 sekund. 1 bliknutí znamená, že je na sběrnici jedno měřidlo, 2 bliknutí znamenají 2 měřidla atd.
3. Modrý Jumper na pozici 2 vždy nechte sepnutý v případě že rychlost na sběrnici M-Bus IN je 2400 bd/s. (typicky to tak je)
4. Černé jumpery 3 a 4 nechte vždy rozepnuté. Mbus master bude vyčítat vždy po 1min data z měřidel na straně M-bus IN.
5. Červený jumper na pozici 5 vždy nechte sepnutý pokud je rychlost sběrnice na Mbus OUT 2 2400bd/s.(typicky to tak je)

## POZOR V PŘÍPADĚ PROBLÉMU!!!

1. Všechny kabely musí být správně připojeny
2. Napětí na M-bus IN musí být větší jak 23 V DC
3. Napětí na M-bus OUT 2 musí být větší jak 26 V DC
4. Všechna měřidla na segmentu sběrnice připojeném do M-bus IN musí mít unikátní primární M-bus adresu.

**Pokud problém přetrvává kontaktujete Tým Enectiva.**
