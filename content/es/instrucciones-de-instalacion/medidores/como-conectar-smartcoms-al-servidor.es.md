+++
author = "Enectiva"
date = "2017-05-31T12:32:37+02:00"
secciones = "manuales/medidores"
tags = [
    "manuales",
    "medidores",
    "smartcoms"
]
title = "Cómo conectar SmartComs al servidor"
toc = false

+++

<img class="center" src="/images/2n-smartcoms-pro.png" style="width:35%;border:0;box-shadow:none"></img>

> Los **SmartComs (SMC)**, como ya sabrás, son dispositivos los cuales pueden medir diferentes sistemas de calefacción, aire acondicionado... Básicamente, los **SMC** son responsables de recolectar la información y enviarla traduciada al servidor para poder generar reportes dentro de la solución Enectiva.
Te voy a acompañar en este viaje para que aprendas a conectar tu primer SmartCom en unos sencillos pasos:


## Descargar recursos
Antes de empezar, necesitas cumplir una serie de requisitos:

- Tú ordenador debe tener al menos **Windows 7 / 8** o **10** para poder ejecutar el programa.
- El programa que necesitas descargar es [**SmartComs Configuration Software**](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Con él vamos a configurar todos los SmartComs que quieras, por lo tanto, es una herramienta que necesitarás muy a menudo, guardala en un sitio seguro.
- Necesitas un descompresor para descomprimir la carpeta donde se encuentra el programa que has descargado. Seguro que conocerás [**WinRar**](https://www.winrar.es/descargas/winrar) o [**7-Zip**](http://www.7-zip.org/download.html), con uno de estos dos nos vale. Aunque también puedes usar el propio Windows para extraer los archivos en la misma carpeta.
- Un cable y puerto **RS232**, muchos ordenadores no tienen dicho puerto, por lo tanto, necesitarás comprar un adaptador USB que podrás encontrar en cualquier tienda de informática.


## Conectar el SmartCom al PC e instalar los drivers necesarios
1. **El sistema no ha detectado el dispositivo y no ha instalado los drivers:**

<img class="left" src="/images/not-installed-device.png" style="width:25%"></img>
En muchas de las ocasiones la instalación de los drivers necesarios de los cables serial suele ser automática, pero algunas veces el sistema puede no detectarlos a la primera o incluso no instalarlos de forma automática. Sí este no es tu caso y al conectar el cable se ha instalado automáticamente, puedes pasar al siguiente apartado.
Debes ir a **Inicio > Panel de Control > Administrador de dispositivos** y encontrar el dispositivo que tenga un interrogante, normalmente suele ser CDC Serial. Una vez que lo hayas localizado, clic derecho en el icono y actualizar dispositivo. A continuación, tendrás dos opciones:

- Buscar software de controlador actualizado automáticamente. **(Elige esta opción)**
- Buscar software de controlador en el equipo.

Al elegir la opción anterior, el ordenador buscará en el servidor de Windows Update el driver específico para el cable y lo instalará. Al finalizar, y sí todo ha salido bien, la ventana mostrará algo parecido a esto, por lo que ya podemos pasar a realizar las configuraciones pertinentes para nuestros SmartComs.
<img class="center" src="/images/cable-installed.png" style="width:50%"></img>

2. **El sistema ha detectado el dispositivo y ha instalado los drivers (gran mayoría de veces)**
Sí este es tu caso, estas de suerte, no tendrás que hacer absolutamente, únicamente conectar y empezar a configurar tu SmartCom con los datos de enectiva.cz. Pasa al siguiente paso.


## Configuración del SmartCom y SmartCom PRO con Enectiva server
Para poder configurar nuestro SmartCom, sea del tipo que sea, necesitamos el programa que te he mencionado anteriormente, sí aún no lo tienes puedes bajartelo desde [aquí](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Una vez que lo tengas lo ejecutas donde te aparecerá la foto que pudistes ver en el paso anterior. Ahora necesitas saber dos cosas:

1. Qué puerto se ha instalado en tu sistema. Recuerdas el **Administrador de dispositivos** del que hemos hablado antes, pues ahí se encuentra el nombre de dicho puerto. Normalmente suele ser el puerto COM3, pero puede variar dependiendo de sí has instalado más puertos ya que te puede interesar configurar dos SmartComs simultáneamente.
    - Sí ya sabes el puerto, tienes que tenerlo seleccionado en la parte superior. **Es muy importante que lo tengas seleccionado**.
2. Saber la edición de SmartCom qué tienes. Necesitas saberlo ya que la manera de configurarlo puede variar dependiendo de uno u otro.
3. Tener a mano los datos que vas a necesitar para configurar el SmartCom. Puedes encontrarlos aquí abajo.

### Datos para la configuración
Son los datos que vamos a introducir en nuestro SmartCom para poderlo conectar con el servidor. Es muy importante que siempre que introduzcas una sección con dichos valores, guardes el resultado en el botón `Save and Restart`. Sí no lo haces no servirá de nada rellenes los datos ya que necesitan ser insertados dentro de la configuración del SmartCom.

##### Opciones generales

<img class="left" src="/images/general-terminal-configuration.png"></img>

| Opción | Campo |
|--------|:-----:|
| `Mode` | TCP Client |
| `APN` | internet |
| `IP Address` | 95.170.88.124 |
| `Server Port` | 41117 |
| `Password` | 12345 |

##### Opciones Ethernet

<img class="left" src="/images/ethernet-terminal-configuration.png"></img>

| Opción | Campo |
|--------|:-----:|
| `Primary channel` | GSM |
| `Secondary channel` | GSM |
| `IP Address` | Obtain an IP address automatically |

##### Opciones de puerto RS485 / M-Bus

<img class="left" src="/images/m-bus-terminal-configuration.png"></img>

| Opción | Campo |
|--------|:-----:|
| `Speed [bd/s]` | 2400 |
| `Data bits` | 8 |
| `Stop bits` | 1 |
| `Parity` | Even |
| `IP Address` | Obtain an IP address automatically |

##### Opción FW Upload
Aquí lo único que tendremos que tener en cuenta es que necesitamos el Firmware oficial de Enectiva, el cual esta modificado para funcionar con el servidor. Dicho firmware debemos hacer una operación flash de actualización en nuestro SmartCom:

<img class="center" src="/images/fw-upload-terminal-configuration.png"></img>

1. Darle al botón `Browser` y encontrar el firmware `SC_1-12-0-12-24_Mbus_store_posledni.bin`.
2. Darle a `Aceptar`, se cerrará la ventana de explorador de archivos y ya podremos empezar a actualizar nuestro SmartCom pulsando `Start`.
3. Esperamos unos minutos hasta que finalice.

##### Opciones Own AT Commands
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

Despué de introducir los parámetros anteriores, tienes que presionar el botoón `Start` para que descargue los datos al SmartCom. Una vez terminado el proceso conecta la antena, la tarjeta SIM o ethernet, dependiendo del método de conexión y comprueba que la luz deja de parpadear.
