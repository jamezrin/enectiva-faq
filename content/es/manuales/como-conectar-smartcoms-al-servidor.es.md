+++
author = "Enectiva"
date = "2017-05-31T12:32:37+02:00"
secciones = "manuales/como-conectar-smartcoms-al-servidor"
url = "/es/manuales/como-conectar-smartcoms-al-servidor"
tags = [
    "manuales",
    "smartcoms"
]
title = "Cómo conectar SmartComs al servidor"
toc = false

+++

## Cómo conectar SmartCom con el servidor de Enectiva

<img class="img-right" src="/images/2n-smartcoms-pro.jpg" style="width:50%"></img>
Los **SmartComs (SMC)**, como ya sabrás, son dispositivos los cuales pueden medir diferentes sistemas de calefacción, aire acondicionado... Básicamente, los SMC son responsables de recolectar la información y enviarla traduciada al servidor para poder generar reportes dentro de la solución Enectiva.
Te voy a acompañar en este viaje para que aprendas a conectar tu primer SmartCom en unos sencillos pasos:

### Descargar recursos
Antes de empezar, necesitas cumplir una serie de requisitos:

- Tú ordenador debe tener al menos **Windows 7 / 8** o **10** para poder ejecutar el programa.
- El programa que necesitas descargar es [**SmartComs Configuration Software**](https://www.2n.cz/download/3/3/9/5/2n-smartcom-terminal-config-1.0.2.7.zip). Con él vamos a configurar todos los SmartComs que quieras, por lo tanto, es una herramienta que necesitarás muy a menudo, guardala en un sitio seguro.
- Necesitas un descompresor para descomprimir la carpeta donde se encuentra el programa que has descargado. Seguro que conocerás [**WinRar**](https://www.winrar.es/descargas/winrar) o [**7-Zip**](http://www.7-zip.org/download.html), con uno de estos dos nos vale. Aunque también puedes usar el propio Windows para extraer los archivos en la misma carpeta.
- Un cable y puerto **RS232**, muchos ordenadores no tienen dicho puerto, por lo tanto, necesitarás comprar un adaptador USB que podrás encontrar en cualquier tienda de informática.

Cuando hayas descargado todo lo que necesitas y ejecutes el programa de **2N Terminal Configuration**, verás algo como esto:

<img class="img-center" src="/images/general-terminal-configuration.png" style="width:70%"></img>

### Conectar el SmartCom al PC e instalar los drivers necesarios
En muchas de las ocasiones la instalación de los drivers necesarios de los cables serial suele ser automática, pero algunas veces el sistema puede no detectarlos a la primera o incluso no instalarlos de forma automática. Sí este no es tu caso y al conectar el cable se ha instalado automáticamente, puedes pasar al siguiente apartado.
Debes ir a **Inicio > Panel de Control > Administrador de dispositivos** y encontrar el dispositivo que tenga un interrogante, normalmente suele ser CDC Serial. Una vez que lo hayas localizado, clic derecho en el icono y
