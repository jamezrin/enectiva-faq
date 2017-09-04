+++
author = "Enectiva"
date = "2017-06-06T10:25:58+02:00"
sections = "manuals/gateways"
tags = [
    "manuals",
    "gateways",
    "PR-1"
]
title = "Configurar el Hub pasivo PR-1"
url = "/en/sections/manuals/gateways/configure-the-hub-passive-pr-1"
toc = false

+++

<img class="right" src="/images/hub-pasivo-pr-1.jpg" style="width:30%"></img>
You will use a passive concentrator if you want to divide a pulse signal input into two identical ones. We use it primarily if we need to share meter data from a third party. Normally, these are gas and water where one output from the hub is used for distribution and the other for the Enectiva system.

The output can then be connected to the M-Bus (example: PadPuls) or transferred via wireless connection (example: WMBUS 169, WMBUS 868, etc ...). SigFox, LoRa, etc ..., can be connected to the output pulses.

## Steps to follow

1. To set it up first, remove the hub caps and top cover.
<img class="center" src="/images/hub-pasivo-pr-1-without-cases_en.png" style="width:50%"></img>
2. The connection is very simple. Simply connect the pulse output from the meter to the left terminals and pull the terminal split signal to the right for other things.
3. After connecting all the inputs and outputs, close the hub, cover it and place it as needed.


## ATTENTION!!
It is necessary to maintain the polarity of all inputs and outputs according to the label of the terminal block. White Plus Cable is the classic.
