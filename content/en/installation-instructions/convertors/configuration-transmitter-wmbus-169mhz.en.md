+++
author = "Enectiva"
date = "2017-06-05T09:29:18+02:00"
sections = "manuals/convertors"
tags = [
    "manuals",
    "convertors"
]
title = "169Mhz WM-Bus Transmitter Configuration"
toc = false

+++

The 169Mhz **WM-Bus transmitter** functions as a converter between a pulse output (or S0 outputs) and M-Bus wireless protocol variants. This converter is used when there is a need to transfer data from the meter or to a distance of meters, or greater, in the air. The transmission range depends on the position of the receiver's antenna, but it moves on open ground up to 2Km and in areas from 200 to 300m.

## Warnings
- **The transmitter is not suitable for use in electricity meters.**
- **The input terminals of the transmitter are protected against short circuits.**

## Everything you need
To start configuring the 169Mhz WM-Bus transmitter you will need to have the following elements:

<img class="right" src="/images/requirements-configuration-transmisor-wmbus-169mhz_en.jpg" style="width:30%"></img>

1. Transmitter WM-169 Bus.
2. A small magnet.
3. A USB stick for PC / Laptop.
4. Software configuration tool 2N WMBus Configuration Tool.

## Configuration Procedures
Now we will prepare everything to be able to configure our transmitter properly, for it follow the steps that you have next:

1. Install software **2N WMBus Configuration Tool**
2. Insert the USB into a port on the computer. Wait a few seconds until the drivers are installed, and then open the **Device Manager** to find the COM port that has been assigned to it. **In our case it is the COM30**.

<img class="center" src="/images/device-manager-transmisor-wmbus-169mhz.jpg"></img>

3. Remove the insulation on the transmitter cable and connect the transmitter to the pulse output of the water or gas meter. The white wire of the transmitter is **+**.
4. Run the program **2N WMBus Configuration Tool**. On the top tab, select COM30 and click `Connect`.
5. Each time you are in the configuration interface, press `Load` to load the current configuration of the transmitter. You will be asked to attach the magnet to the transmitter for activation. Place the manual in place and move the magnet through the transmitter until the data is saved.

<img class="center" src="/images/magnet-transmisor-wmbus-169mhz.jpg"></img>

6. Once you see the transmitter data, you can verify that this is the same address as the Wmbus, which is on the transmitter label. In our case, this is 200. Then, look at the state of the meter in which you are connecting the transmitter. In our case, this is a water meter with current state of 1,491 m <sup>3</sup> and is marked with a constant of 1 pulse = 0.001 m <sup>3</sup> (ie 1L) . In addition, you must adjust the transmitter. In the first field (number 2 in the image) the current state, in the second constant (number 3 in the image), which is equal to a pulse. Then, dial the broadcast activation (number 4) and set the period in which the transmitter will send the data. We recommend 600s where the battery life is over 5 years.

<img class="center" src="/images/configuration-transmisor-wmbus-169mhz.jpg"></img>

7. After configuring the transmitter, press the `Write` button (number 6) to write the configuration to the transmitter. You will be prompted to move the magnet back over the surface. First to activate the transmitter and then to confirm the configuration. If the data is not written in the waiting time, you will get an error message on the screen, and you must repeat the writing procedure.
8. The transmitter is supplied by the socket where it can be fastened to a bolt. It is always necessary to secure the transmitter to prevent damage or pulling of the cable from the meter.
9. The transmitter has protection against damp and dust penetration. It can be used in water meter wells and in very humid environments. Also, it is ATEX certified for use in hazardous environments. Gas counts are used by default, but only when ATEX needs to meet a high pressurizing station in case of large-scale production sites.

## Attention
Very often, the technician leaves the station and establishes an incorrect value for the transmitter. It is vital to pay attention to the unit of constant pulses. Therefore, it is always advisable to set the transmitter for the first time with a short period of emission, for example 60 seconds. Then, click on the **Monitoring** tab and the Start button, wait about 60 seconds until your transmitter appears with the correct reading value on the screen. Then for the `stop` monitoring and return to the tab of **Configuration**, set a long period, eg 600 seconds, and finally write with` Write` on the transmitter.

<img class="center" src="/images/monitoring-transmisor-wmbus-169mhz.jpg"></img>

Yes technicians disconnect the transmitter for some reason and measure it from the installation site. It is necessary to isolate the output of the white cable to prevent a short circuit and to deactivate its transmission through the configuration program. This prevents the battery from draining.

It is always best to wait for the installation of the site to later configure and verify that the transmitter reads the pulses correctly and sends the correct values.
If you think that the transmitter does not read the new values, it is possible to shorten the input terminals by 10ms. This generates a random number of pulses, so you have to reset it, but you can see that it is fun.
