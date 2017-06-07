+++
author = "Enectiva"
date = "2017-06-05T11:21:03+02:00"
secciones = "manuales/sensores"
tags = [
    "manuales",
    "sensores",
    "HRI-B"
]
title = "Configurar el sensor HRI-B"
toc = false
url = "/es/manuales/sensores/configurar-sensor-hrib"

+++

Los siguientes pasos te indican la instalación y configuración de los componentes necesarios para realizar una correcta instalación de tu sensor HRI-B.

## Pasos para configurar tu sensor HRI-B

1. Instalar el software MiniCom3 en tu PC/Portátil.
2. Conecta el M-Bus Micro-Master a un puerto libre de tu ordenador, tal como COM6 (ver imagen).
3. Usar el **Administrador de Dispostivos** en el ordenador para configurar el puerto apropiado, es decir, en nuestro caso es el COM6.

##### Configuraciones del puerto

| Opción | Campo |
|-------|:------:|
| `bit/sec` | 115-200 |
| `datagram bit` | 8 |
| `paridad` | none |
| `stop bit` | 1 |
| `flow management` | none |

4. Conectar el sensor HRI-B con el cable (verde, marrón) al terminal M-Bus Micro-Master USB (ver imagen).
5. Abrir el programa MiniCom3.
6. Abrir puerto **COM6 (en nuestro caso)**, en tu caso será otro puerto.
7. Clic en la pestaña **View** para seleccionar la `Status Bar`, `Measurement Information` y `Odds`.
8. Bajo la pestaña **Gauges**, configurar el **Gauge Type** (en nuestro caso, HRI) para mostrar la `Primary Address` y `Speed of Communication`.
9. Bajo la pestaña **Commands - Start Read**, se ve la configuración actual de los medidores.
10. Bajo la pestaña de **Commands - Set Primary MBus Address**, configura la dirección del medidor en la red MBus. La elección esta entre 1 y 250. Ver más en el punto 13 más abajo.
11. Puedes cambiar el ID de calibre bajo la pestaña **Commands - Change gauge ID**.
12. Bajo la pestaña **Commands - Device Configuration**, ajustar:

| Opción | Campo |
|--------|-------|
| `Consumption` | Valor del consumo actual |
| `Backup memory` | Dejar vacía la casilla `Set up memory` para resetear. |
| `Memory buffer` ||
| `D-Value` | Ajustar el multiplicador de pulso `(1 - 1000) l/imp.` |
| `Mode` | Por defecto es `B4` (no puede ser cambiado) |

13. Bajo la pestaña **Measurement Parameters**, ajustar:

| Opción | Campo |
|--------|-------|
| `Speed` | 2400 o 300 Bd |

## Usar dirección primaria o secundaria.

- Nosotros usaremos la dirección primaria sí tenemos más de 1 medidor conectado al M-Bus y las direcciones primarias de todos los medidores conectados son conocidas y sus direcciones son diferentes. Sí solo tienes un medidor conectado, podemos mantener la comunicación por la dirección general 254.
- Nosotros usaremos la dirección secundaria sí teneme más de un medidor conectado al M-Bus y no conocemos la dirección primaria del medidor  o sí sus direcciones son las mismas.

El comando **SND_NKE** es necesario para activar algunos medidores.

<img class="center" src="/images/connection-hrib-to-computer.jpg" style="width:70%"></img>
