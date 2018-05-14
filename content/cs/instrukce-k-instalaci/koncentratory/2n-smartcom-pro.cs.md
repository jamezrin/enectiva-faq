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
date = 2018-05-14T09:23:48+02:00
downloads = [
    "/2n-smartcom-pro/2N_SmartCom_Uživatelský_Manuál_CZ_1.13.0.pdf",
    "/2n-smartcom-pro/Terminal Configuration Program 1.0.2.7 - 2N® SmartCom.zip"
]
+++

# 2N SmartCom Pro 

### Připojení komunikátoru 2N k počítači
1. 	Rozbalit Terminal Configuration Program 1.0.2.7 - 2N® SmartCom do notebooku.
2.	Otevřít rozbalenou složku a spustit aplikaci SmcTerminalConfigProgram.
3. 	Připojit redukci USB -> RS232 do volného USB portu v notebooku (po připojení se na redukci rozsvítí modrá dioda), k redukci připojit kabel RS232.
<img class="right" src="/images/2n-smartcom-pro/01.png" style="width:30%"></img>
4. 	Notebook si nainstaluje ovladač potřebný pro fungování redukce.
5. 	Kliknout na "Start", do pole "Prohledat programy a soubory" napsat "Správce zařízení" a otevřít. 
<img class="right" src="/images/2n-smartcom-pro/02.png" style="width:30%"></img>
a) Rozbalit záložku "Porty (COM a LPT)" 
<img class="right" src="/images/2n-smartcom-pro/03.png" style="width:30%"></img>    
b) Dvakrát poklikat na USB Serial Port", vybrat záložku "Port Settings". 
          
Zde nastavit následující hodnoty: 

| Volba | Pole |
|--------|:-----:|
| `bit/sec` | 115200 |
| `dat. bity` | 8 |
| `parita` | žádná |
| `stop bity` | 1 |
| `řízení toku` | žádné |

Potvrdit kliknutím na "OK".
<img class="right" src="/images/2n-smartcom-pro/04.png" style="width:30%"></img>

6. 	Připojit SmartCom k RS232 (SmartCom musí být připojen k napájení!).
<img class="right" src="/images/2n-smartcom-pro/05.png" style="width:30%"></img>
7. 	Přejít do programu 2N SMartCom configuration. 
a) Zkontrolovat, že je vybraný stejný port, který je napsaný ve Správci zařízení u USB Serial Port (např. COM13 v tomto návodu). Pokud ne, nastavit správný.
	b) Kliknout na "Load configuration".		
<img class="right" src="/images/2n-smartcom-pro/06.png" style="width:30%"></img>		 		
8.	Nahraje se současné nastavení komunikátoru.


### Nastavení pulsního vstupu

1.	Připojit SmartCom podle návodu výše
2.	Připojit pulsní výstup na svorky IN1 a GND
2. 	Vybrat záložku "Own AT commands".
3. 	Do řádku zapsat následující příkaz: 
`at^scpulse1="set_value",0000`
(místo 0000 se musí zapsat příslušná hodnota pulsů!). Potvrdit kliknutím na "Send".
Pokud proběhlo nastavení v pořádku, objeví se: 
	`at^scpulse1="set_value",0000`
	OK
	 
4.	Dále zapsat příkaz: 
`at^scpulse1="save"`
Potvrdit kliknutím na "Send". Toto uloží nastavenou hodnotu.
	Pokud proběhlo nastavení v pořádku, objeví se: 
`at^scpulse1="save"`
OK

5.	Dále zapsat příkaz: 
`at^scpulse1="start"`
Potvrdit kliknutím na "Send". Toto aktivuje počítaní pulsů.
	Pokud proběhlo nastavení v pořádku, objeví se: 
	`at^scpulse1="start"`
OK

### SMS Příkazy

Základní konfiguraci SmartComu lze snadno provést odesláním SMS na telefonní číslo vložené SIM karty
 

Zjištění informací o SmartComu
`SC INFO PWD=<heslo>`

Odpověď: SIG=-71dBm OPER=Vodafone IMSI=230015001155344 IMEI=355915030750962 SN=50-1945-0080 LIP=89.24.0.141 FW=1.13.6.13.15 STAT=CONNECTED


Zjištění konfigurace SmartComu
`SC CNF PWD=<heslo>`

Odpověď: MODE=1 232LCK=0 APN=internet DUSR= DPWD= IPS=136.144.144.182 PORTS=41117 CHPRIM=GSM

Server Enectiva má IP adresu 136.144.144.182, port 41117


Vyhledání měřidel na sběrnici a jejich přidání do tabulky automaticky odečítaných měřidel
`SC AMSADD PWD=<heslo> QTY=<n> PORT=<p> PROTOCOL=2 INT=30M BAUDRATE=2400`

<n> = počet měřidel na sběrnici
<p> = port: 1 - RS232, 2 - MBus

Odpověď: QTY=1 ERR=0 ADDR=12345678


Zobrazení tabulky automaticky odečítaných měřidel
`SC AMS PWD=<heslo>`


Přehled všech SMS příkazů
https://wiki.2n.cz/scum/latest/cs/4-konfigurace/4-2-sms-konfigurace

Pokud u SmartComu není heslo nastaveno (je tedy prázdné), musí se psát s uvozovkami (např SC INFO PWD=”” ), pokud po hesle následují další parametry, nechává se úplně prázdné (např SC AMSADD PWD= QTY=2... )


### Uvedení do továrního nastavení

V případě vážných okolností, kdy není možné se se SmartComem spojit, je potřeba ho uvést do továrního nastavení. To lze provést pomocí SMS ve tvaru SC FRES PWD=<heslo> 
Druhým způsobem uvedení to továrního nastavení je odmontování čela zařízení, vysunutí desky a zapnutí s propojenými piny podle následujícího obrázku.
<img class="right" title="title=”Uvedení do továrního nastavení, zdroj: wiki.2n.cz”" src="/images/2n-smartcom-pro/07.png" style="width:30%"></img>

Jumpery (zkratovací propojky) si lze vypůjčit z okolních hřebínků. Po dokončení operace je nutné je vrátit na původní místo. Pokud by zůstaly na místě pro restart, vracel by se SmartCom do továrního nastavení při každém spuštění.