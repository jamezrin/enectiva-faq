+++
author = "Enectiva"
date = "2017-06-05T14:40:16+02:00"
secciones = "manuales/convertidores"
tags = [
    "manuales",
    "convertidores",
    "PadPuls"
]
title = "Configurar adaptador de pulsos PadPuls (Relay)"
toc = false

+++

El convertidor **PadPuls** se utiliza siempre que sea necesario convertir salidas de pulsos desde medidores de agua, gas y electrómetros al bus M-Bus. El convertidor se hace en múltiples versiones dependiendo de cuántas entradas de pulsos puede conectar a ella. La configuración es completamente idéntica para todas las variantes. El número máximo de entradas es 4.

## Recursos necesarios

- Instalar **software MBCONF** en tu PC/Portátil.
- Conectar el M-Bus Micro-Master a un puerto USB libre del ordenador, como el COM6 (ver imagen).
<img class="center" src="/images/padpuls-connection-to-pc.jpg" style="width:50%"></img>
- Utilizar el **Administrador de Dispositivos** en el ordenador para configurar el puerto apropiado del PC, es decir, en nuestro caso el COM6 (ver imagen más abajo). En qué puerto COM está conectado a MikroMaster, puedes comprobarlo con el **Administrador de Dispositivos / Device Manager** en tu Windows.
<img class="center" src="/images/padpuls-connection-port-to-mikromaster.jpg" style="width:50%"></img>
- Desde el **Administrador de Dispositivos** debemos abrir el puerto anterior y en la pestaña **configuración del puerto** tener los siguientes parámetros:

<img class="left" src="/images/padpuls-port-configuration.jpg"></img>

| Opción | Campo |
|--------|:-----:|
| `bit/sec` | 115200 |
| `datagram bit` | 8 |
| `paridad` | none |
| `stop bit` | 1 |
| `flow managment` | none |

<div style="clear:both"></div>

- Conectar el Adaptador PadPuls (Terminales M-Bus) al terminal USB M-Bus Micro-Master (ver primera imagen).
- Activar el adaptador PadPuls. Quitar la cubierta superior del adaptador y el puente de la etiqueta BAT en ambos pines. (ver imagen posterior)
<img class="center" src="/images/padpuls-activate-bat.jpg" style="width:50%"></img>
- Abrir el programa **MBCONF**. El cual puede ser descargado de Internet o envía asistencia técnica al Equipo Enectiva.
<img class="center" src="/images/interface-relay-mbconf.jpg"></img>
- Hacer configuraciones básicas:

    - Configurar número de puerto el mismo que en el PC **(5)**.
    - Ajustar la velocidad de comunicación a `2400 Bd` **(6)**
    - Ajustar la velocidad de acuerdo al **(7)** no es necesario (es configurado automáticamente desde el dispositivo padre).
    - Configurar dirección M-Bus a 254 **(8)**. **254** significa multidifusión. Esta es la dirección por la cual todos los dispositivos responden, es usada en casos donde tu no sabes la dirección. No puedes usarla cuando hay más dispositivos en el bus.
    - `Manufact` = **loaded** no necesita ser cambiado. **(9)**
    - `Type` = **loaded** no necesita ser cambiado. **(10)**
    - `Generation` = **loaded** no necesita ser cambiado. **(11)**
    - `MBus state` = **loaded** no necesita ser cambiado. **(12)**
    - `Autom. Readout` = es una opción, sí el sofware de activación siempre lee los datos después de la escritura (es útil para comprobar la exactitud de la programación - **13**).
    - `ZVEI Optical Mode` = sí este modo esta activado, el dispositivo equipado con la interfaz óptica y el protocolo M-Bus en conformidad con EN 1434-3 puede ser escaneado y programado usando un cabezal de lectura óptica. Nosotros no lo usamos en proyectos de Enectiva. **(14)**
    - `MDK (Sensus)` = este es usado para lecturas con Sensus MDK **(15)**.
    - `Connect to meter` = esto es usado para peticiones de datos desde el dispositivo conectado (en nuestro caso PadPuls - **16**).
    - `Erase log.` = Eliminar el contenido del log. **(17)**
    - `Exit` = salir del programa y guardar los ajustes actuales. **(18)**

**Después de conectar y ajustar los parámetros, presiona `connect to meter`.**

<img class="center" src="/images/parameters-mbconf.jpg" style="width:50%"></img>

Dependiendo con la variante del convertidor **PadPuls** aparece la interfaz con uno o cuatro puertos en la parte superior. Para establecer esto mira la imagen de los ajustes **Port 1**.

1. Rellene la dirección primaria. Cada dispositivo conectado al bus M-Bus debe tener una única dirección y una única dirección primaria en el rango de valores de 0-254 (número 1 en la imagen anterior).
2. Rellene la dirección secundaria, normalmente el número de serio del contador, y este es el número por el cual el contador esta leyendose en Enectiva. (Nº 2). Incluso la dirección secundaria debe ser única junto al bus.
3. Selecciona el tipo de energía medida en el **Port 1**. En nuestro caso **water**.
4. Los números **4**,**5** y **6** son los más importantes de todos los ajustes de convertidores. Aquí ajustamos el tamaño de los pulsos individualmente mediante el **Multiplicator**, entonces el estado actual del medidor (contador) y la unidad en la cual estamos leyéndolo. Ejemplo, respecto a la imagen, decimos que un pulso es igual a un litro y el medidor está actualmente en 1302L.

## Ejemplos de ajustes del multiplicador
### Ejemplo 1
El medidor de agua tiene 45.120 litros y un pulso = 10 litros. Tu tienes 2 opciones para configurar el convertidor:

1. Unidad = 10L, Multiplicator = 1 / 1, Counter = 4512 (el último cero que no mencionamos porque usted ha establecido que saltará después de 10 litros).
2. Unidad = 1L, Multiplicator = 10 / 1, Counter = 45120 (x 1L)

### Ejemplo 2
El electrómetro tiene 78346 kWh y 64 pulsos = 1kWh

1. **Ajuste:** Unidad = 1kWh, Multiplicator = 1 / 1, Counter = 78346 (x 1kWh)

### Ejemplo 3
El electrómetro tiene 112.345kWh y 1.000 pulsos = 1kWh

1. **Ajuste:** Unidad = 1Wh, Multiplicator = 1 / 1, Counter = 1123454 (x 0,001Wh)

### Ejemplos de cómo configurar mediciones indirectas de medidores que llevan un dispositivo de medición

1. Necesitas sincronizar el tiempo y por lo tanto presionar el botón etiquetado con un 7.
2. Una vez que tengas todos presionado, pulsa `Write` y todos los valores configurados son escritos en el transmisor.
3. Siempre es importante verificar que está escrito, así que pulsa `Read` para verificarlo. Además verás el estado del contador, así puedes verificar que tu tienes configurado el transmisor correctamente.
