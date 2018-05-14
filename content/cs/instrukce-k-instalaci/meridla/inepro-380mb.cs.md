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
date = "2018-05-14T11:34:08+02:00"
downloads = [
    "/inepro-380mb/pro380-zkraceny-navod-10-2016-s-omezenou-platnosti.pdf",
    "/inepro-380mb/1496303696_pro380_navod_ver2_03.pdf"
]
+++
### Připojení elektroměru PRO380-MB

PRO380 je moderní třífázový elektroměr vybavený komunikačním standardem M-Bus.

#### Připojení M-Bus sběrnice
Připojení elektroměru na komunikační sběrnici M-Bus se realizuje na svorkách 22 a 23, označených jako COM. Na polaritě nezáleží, pro zamezení chyb je však vhodné udržovat jednotnou v celé instalaci.

<img class="right" src="/images/inepro-380mb/pro-380-01.png" style="width:30%"></img>

<img class="right" src="/images/inepro-380mb/pro-380-02.png".png" style="width:30%"></img>

Pro komunikaci po M-Bus je možné použít jak primární, tak sekundární adresování. Sekundární adresa odpovídá posledním 8 číslicím sériového čísla, typicky 160xxxxx. Primární adresa bývá od výrobce standardně nastavena 1 a je možné jí v menu nastavit tak, aby všechna měřidla na sběrnici měla svou unikátní adresu v rozmezí 0-253.

**Postup změny primární adresy**
Postup změny primární adresy
1. Nalistujte v menu položku Meter ID. 
2. Stiskněte a držte najednou levé a pravé tlačítko po dobu 5 vteřin. 
3. LCD blikne 2x, pusťte tlačítka. 
4. Zvolte novou adresu (Meter ID) tlačítky. 
5. Stiskněte opět obě tlačítka na dobu 5 vteřin pro uložení.

Pulsní výstup pro odběr je vyveden na svorkách 18 a 19 (označení S0 FORWARD)

### Verze pro nepřímé měření
Pro nepřímé měření proudu používáme výhradně proudové transformátory s převodem na 5A. **Proudové transformátory nesmí být zapojeny naprázdno**, proto se při instalaci připojují přes zkratovací propojky.

U verze pro nepřímé měření je nutné při prvním připojení nastavit převod měřících transformátorů.
Šipkami vyberte převod připojených měřících MTP tak, aby byl Vámi požadovaný převod zobrazen na displeji. Následně vyčkejte 5 vteřin pro automatické zapsání převodu MTP do paměti elektroměru. Uložený převod si lze kdykoliv zobrazit v menu elektroměru pomocí tlačítek na přední straně elektroměru.
PŘÍKLAD: pokud budete nastavovat hodnotu pro MTP 250/5A, na displeji si v seznamu předvolených převodů vyhledejte a zobrazte 250.

**POZOR! Převod MTP může být nastaven pouze jednou! Jakmile stisknete tlačítko pro výběr převodu MTP a během 5 vteřin neprovedete výběr převodu MTP, převod MTP bude uložen a nemůže být znovu nastaven!**

Podporované převody MTP jsou: 40/5A, 50/5A, 60/5A, 75/5A, 100/5A, 125/5A, 150/5A, 200/5A, 250/5A, 300/5A, 400/5A, 500/5A, 600/5A, 800/5A, 1000/5A, 1500/5A, 2000/5A, 2500/5A, 3000/5A, 4000/5A, 5000/5A, 6000/5A, 7500/5A
