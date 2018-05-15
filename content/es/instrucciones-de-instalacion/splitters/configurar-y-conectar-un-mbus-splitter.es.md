+++
author = "Enectiva"
date = "2017-06-05T13:14:15+02:00"
secciones = "manuales/splitters"
tags = [
    "manuales",
    "splitters",
    "M-Bus Splitter"
]
title = "Configurar y conectar un M-Bus Splitter"
toc = false

+++

Usarás el splitter M-Bus sí tu quieres realizar lecturas de los contadores simultáneamente desde dos unidades centrales (M-Bus Master). Los ejemplos típicos de uso de medidores de distribución de calor (plantas de calefacción de la ciudad) que han sido equipados con una salida M-Bus para CHP y desean un medidor de tales características conectado con el sistema Enectiva. En este caso es necesario dividir la salida M-Bus desde el medidor en dos salidas M-Bus.

El splitter M-Bus puede separar un bus con un máximo de 4 contadores M-Bus.

<img class="center" src="/images/m-bus-splitter.jpg" style="width:35%"></img>

## Método de conexión

1. Sí tu quieres dividir un bus con más de 1 medidor, es necesario conectar el 24 VAC a los terminales marcados en la imagen de arriba. Sí solo tienes un medidor en el bus, estos terminales están vacíos. Solo la salida M-Bus 2 entrada (número 3) a la cual uno de los **M-Bus Master** esta conectado será usado.
2. Conectar dos terminales bus (M-Bus IN) al bus que tu quieras dividir. Puede ser con uno de los cuatro contadores.
3. Para el terminal de alimentación M-Bus OUT2, conecta el bus que tu quieras alimentar nuestro splitter M-Bus en caso de que la fuente 24 VAC no se utilice en el terminal 1.
4. Conecte el terminal 4 (M-Bus OUT1 - Aislado) al nuevo bus por ejemplo S Enectiva Maestro. (Maestro es solo otro nombre para un comunicador, concentrador o unidad central).

## Situación típica de uso e implicación
Tienes una conexión desde la planta de calefacción, ver imagen posterior. El calorímetro y medidor de agua están conectados a sus M-Bus maestros y leen datos desde la red móvil (GSM Modem).

<img class="center" src="/images/calorimeter-watermeter-to-mbusmaster_es.jpg" style="width:50%"></img>

Solo necesitas leer el calorímetro en Enectiva, es decir, la sección bus (cable M-Bus 1) con el calorímetro necesita estar separado en dos segmentos separados usando un splitter. Ahí será la situación en la imagen. El cable M-Bus esta separado en M-Bus en el maestro original y M-Bus 2 en el Enectiva maestro. (Maestro = Unidad central = Comunicador = Concentrador)

<img class="center" src="/images/calorimeter-watermeter-to-enectiva_es.jpg" style="width:50%"></img>

Para configurar el Splitter del M-Bus, solo los puentes (puente de cortocircuito) en el borde superior del splitter M-Bus.

<img class="center" src="/images/short-circuit-jumper-mbus.jpg"></img>

## Puesta en marcha

1. Cuando la fuente de alimentación este conectada ya sea mediante 24 VAC o salida terminal de energía M-Bus OUT2, no pasa nada. Los diodos empiezan flasheando después de 1-3 minutos aproximádamente. Tarda un rato en cargar los circuitos.
2. Después conectando todos los buses ambos la entrada y las dos salidas, es necesario escanear el bus. Necesitas tirar el puente amarillo y ponerlo de nuevo. Entonces, esperarás unos 10 minutos para que empiece a parpadear un LED en el M-Bus de manera constante. Cuando se conecte el escaneo, este LED parpadeará en 12 segundos. 1 parpadeo significa que hay un medidor en el bus, 2 significa 2 contadores, etc...
3. Siempre dejar el puente azul en la posición 2 cerrado sí la velocidad del M-Bus es 2400 bd/s. (Normalmente lo es)
4. Los puentes negros 3 y 4 siempre están abiertos. El maestro M-Bus leerá cada 1 minuto los datos desde los contadores en el lado M-Bus IN.
5. Siempre dejar el puente rojo en la posición 5 cerrada cuando la velocidad del bus es en el M-Bus OUT2 de 2400 bd/s (normalmente lo es).

## ADVERTENCIA EN CASO DE PROBLEMA!!!

1. Los cables deben estar conectados correctamente.
2. El voltaje al M-Bus IN debe ser mejor que 23 V DC.
3. El voltaje al M-Bus OUT 2 debe ser mejor que 26 V DC.
4. Todos los medidores del lado del bus conectados al M-Bus IN deben tener una dirección primaria M-Bus única.

**Sí los problemas persisten, contacte con el equipo Enectiva.**
