+++
author = "Enectiva"
date = "2017-06-09T10:03:55+02:00"
secciones = "manuales/medidores"
tags = [
    "Manuales",
    "Medidores",
    "Smartcoms",
    "Inepro metering PRO380-Mb"
]
title = "Conectar SmartComs con Inepro Metering PRO380-Mb"
toc = false

+++

Para poder comenzar a realizar las configuraciones, necesitamos tener los siguientes elementos:

## Recursos necesarios

<img class="center" src="/images/requirements-configuration-inepro-metering-pro380-mb.jpg" style="width:70%"></img>

- SmartCom PRO ETH con todos sus cables y conectores.
- Un Inepro Metering PRO380-Mb.
- Un cable eléctrico con el que aparece en la imagen.
- Dos destornilladores, uno de estrella y otro plano, pequeños.

## Configuración

1. Para empezar el SmartCom deberá estar configurado como en este manual: [¿Cómo conectar SmartComs al servidor de Enectiva?](../como-conectar-smartcoms-al-servidor).
2. Conecta el conector más largo con el cable eléctrico, fíjate en el patrón de colores ya que será el orden para conectarlo al terminal S0 del contador. **Fíjate que están conectados de derecha a izquierda en el primer y tercer lugar**-
<img class="center" src="/images/cable-terminal-connection-with-connector.jpg" style="width:70%"></img>
3. Conecta el otro extremo del cable al Inepro Metering PRO380-Mb **tal y como se ve en la imagen**, guíate del patrón de colores. Los cables deberán ser conectados a la **salida L1** o terminales 18/19. Es por dónde el contador envía los datos al SmartCom para que puedan ser leídos y registrados en el sistema Enectiva. El valor del pulso enviado es de **R<sub>L</sub>=0,1Wh/imp**.
<img class="center" src="/images/cable-terminal-connection-between-devices.jpg" style="width:70%"></img>
4. Por último conecta el SmartCom a una fuente de energía mediante su fuente de alimentación. **(como el la siguiente foto)**
<img class="center" src="/images/smartcom-to-power-supply.jpg" style="width:70%"></img>
5. Conecta por la parte inferior del **Inepro Metering PRO380-Mb** a
