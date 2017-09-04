+++
author = "Enectiva"
date = "2017-06-05T11:21:03+02:00"
sections = "manuals/sensors"
tags = [
    "manuals",
    "sensors",
    "HRI-B"
]
title = "Configure the HRI-B sensor"
toc = false
url = "/en/manuals/sensores/configure-sensor-hrib"

+++

The following steps will guide you through the installation and configuration of the components needed to properly install your HRI-B sensor.

## Steps to configure your HRI-B sensor

1. Install the MiniCom3 software on your PC / Laptop.
2. Connect the M-Bus Micro-Master to a free port on your computer, such as COM6 (see image).
3. Use the ** Device Manager ** on the computer to configure the appropriate port, ie in our case it is COM6.

##### Port Settings

| Option | Field |
| ------- |: ------: |
| `bit / sec` | 115-200 |
| `datagram bit` | 8 |
| `parity`  | none |
| `stop bit` | 1 |
| `flow management` | none |

4. Connect the HRI-B sensor with the cable (green, brown) to the M-Bus Micro-Master USB terminal (see image).
5. Open the MiniCom3 program.
6. Open port ** COM6 (in our case) **, in your case will be another port.
7. Click the ** View ** tab to select the `Status Bar`,` Measurement Information` and `Odds`.
8. Under the ** Gauges ** tab, configure the ** Gauge Type ** (in our case, HRI) to display the `Primary Address` and` Speed of Communication`.
9. Under the ** Commands - Start Read ** tab, you can see the current meter settings.
10. Under the ** Commands - Set Primary MBus Address ** tab, configure the meter address on the MBus network. The choice is between 1 and 250. See more in point 13 below.
11. You can change the caliber ID under the ** Commands - Change gauge ID ** tab.
12. Under the ** Commands - Device Configuration ** tab, set:

| Option | Field |
| -------- | ------- |
| `Consumption` | Current consumption value |
| `Backup memory` | Leave the box 'Set up memory' to reset. |
| `Memory buffer` ||
| `D-Value` | Setting the pulse multiplier `(1 - 1000) l / imp.` |
| `Mode` | Default is `B4` (can not be changed) |

13. Under the ** Measurement Parameters ** tab, adjust:

| Option | Field |
| -------- | ------- |
| `Speed` | 2400 or 300 Bd |

## Use primary or secondary address.

- We will use the primary address if we have more than 1 meter connected to the M-Bus and the primary addresses of all connected meters are known and their addresses are different. If you only have one meter connected, we can maintain the communication through the general address 254.
- We will use the secondary address if I have more than one meter connected to the M-Bus and we do not know the primary address of the meter or if their addresses are the same.

The command ** SND_NKE ** is required to activate some meters.

<img class="center" src="/images/connection-hrib-to-computer.jpg" style="width:70%"></img>
