+++
author = "Enectiva"
date = "2017-05-31T11:02:40+02:00"
sections = "manuals/meters"
url = "/en/sections/manuals/how-to-connect-smartcoms-to-server"
tags = [
    "manuals",
    "meters",
    "smartcoms"
]
title = "How to connect SmartComs to server"
toc = false
+++

<img class="center" src="/images/2n-smartcoms-pro.png" style="width:35%;border:0;box-shadow:none"></img>

> The **SmartComs (SMC)**, as you knows, are devices which can to meter different systems of heating, air cooling, etc... Basically, the **SMC** are responsible of recollect information and send it translated to the server to be able generate reports into Enectiva solutions.
I will accompany you in this trip to learn to connect your first SmartCom in a few simple steps:


## Download resources
Before starting, you needs comply a number of requirements:

- Your computer must have at least **Windows 7 / 8** or **10** to be able to execute the program.
- The program that you need download is [**SmartComs Configuration Software**](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). With it, we go configure all SmartCom you want, therefore, it is a tool what you will need very often, save it in a secure site.
- You needs a uncompressor for descompress the folder where it's found the program that you have downloaded. Sure you will meet [**WinRar**](https://www.winrar.es/descargas/winrar) or [**7-Zip**](http://www.7-zip.org/download.html), with one of this two is enough. Althought, you can to use own Windows for extract the files from the same folder.
- Cable and port **RS232**, many computers don't have said port, althought, you will needs buy a USB adapter that you would find in any informatic store.


## Connect the SmartCom to PC and install the necessary drivers.
1. **The system hasn't detected the device and hasn't installed drivers:**

<img class="left" src="/images/not-installed-device.png" style="width:25%"></img>
In many cases, the installation of necessary drivers of the serial cables is usually automatic, but sometimes the system can don't detect it to the first once or even don't install it in the automatic way. If this isn't your case and to connect the cable it's has installed automatically, you can pass to next step.
You must go to **Home > Control Panel > Device Manager** and find the device you have an question mark, normally is the CDC Serial. One once you have located it, right click in the icon and update device. Then, you will have two choices:

- Find driver software updated automatically. **(Choose this option)**
- Find driver software in the computer.

To choose the option above, the computer will search in the Windows Update server the specific driver for the cable and will install it. To finish, and if all has been okay, the actual windows will shows something similar to this, so that we can move on to realize the configurations to our SmartComs.
<img class="center" src="/images/cable-installed.png" style="width:50%"></img>

2. **The system has detected device and has installed drivers. (the vast majority of times)**
If this is your case, you are lucky, won't have to make absolutely nothing, only connect and start to configure your SmartCom with the enectiva.cz datas. Go to next step.


## Configuration of the SmartCom and SmartCom PRO with Enectiva Server
To be able configure our SmartCom, whatever type, we needs the program that I mentioned earlier, If you still haven't, can download it from [here](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Once you have it, run it. Now, you needs to know two things:

1. What port is it installed in your system? You remembers the **Device Manager** of which we have spoken before, well, there it is the name of said port. Normally, the port is COM3 Serial, but it depends on whether you have installed more ports.
    - If you know the port, you have to have it selected on top. **It's very important that you have it selected**.
2. Know the SmartCom edition what you have. You needs know it as the way of configure it may vary between versions.
3. Have on hand the datas that you will need to configure the SmartCom. You can found it above here.

### Configuration datas
The configuration datas are the ones we are going to introduce on our SmartCom for can connect it with the server. It's very important that always that you enter a section with said values, saves datas with the button `Save and Restart`. If you don't do it will not do nothing that you enter datas as they need to be inserted into the configuration of the SmartCom.

##### General options

<img class="left" src="/images/general-terminal-configuration.png"></img>

| Option | Field |
|--------|:-----:|
| `Mode` | TCP Client |
| `APN` | internet |
| `IP Address` | 95.170.88.124 |
| `Server Port` | 41117 |
| `Password` | 12345 |

##### Ethernet options

<img class="left" src="/images/ethernet-terminal-configuration.png"></img>

| Option | Field |
|--------|:-----:|
| `Primary channel` | GSM |
| `Secondary channel` | GSM |
| `IP Address` | Obtain an IP address automatically |

##### RS485 / M-Bus options

<img class="left" src="/images/m-bus-terminal-configuration.png"></img>

| Option | Field |
|--------|:-----:|
| `Speed [bd/s]` | 2400 |
| `Data bits` | 8 |
| `Stop bits` | 1 |
| `Parity` | Even |
| `IP Address` | Obtain an IP address automatically |

##### FW Upload options
Here, the only we will have that consider is we needs the official firmware of Enectiva, which is modified to work with the server. This firmware we must to make a update operation in our SmartCom:

<img class="center" src="/images/fw-upload-terminal-configuration.png"></img>

1. Push it to button `Browser` and find firmware `SC_1-12-0-12-24_Mbus_store_posledni.bin`.
2. Push it to `Accept`, it will close the file explorer and we will can start to update our SmartCom pushing `Start`.
3. We waits a few minutes until to finish.

##### Own AT Commands options
<img class="center" src="/images/own-at-commands-terminal-configuration.png"></img>
Es un terminal donde podemos insertar parámetros concretos que no se pueden configurar mediante las opciones del programa, normalmente son comandos avanzados pero que son necesarios para el correcto funcionamiento de nuestros dispositivos. En nuestro caso solo necesitaremos los siguientes comandos:

<center>

| AT Comandos |
|-----------|
| `at^scams = "enable",1` |
| `at^scping = "host","95.170.88.124"` |
| `at^scping = "interval",5` |
| `at^scping = "srestart"` |

</center>

After to entering the above parameters, you have to press the button `Start` for download the datas into SmartCom. Once finished the process, connect the antenna, the SIM Card or Ethernet cable (depending of the method of connection) and check that the light stop blinking.
