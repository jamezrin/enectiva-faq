+++
author = "Enectiva"
date = "2017-06-05T09:29:18+02:00"
secciones = "manuales/convertidores"
tags = [
    "manuales",
    "convertidores"
]
title = "Configuración de transmisor WM-Bus de 169Mhz"
url = "/es/secciones/manuales/convertidores/configuracion-transmisor-wmbus-169mhz"
toc = false

+++

El **transmisor WM-Bus de 169Mhz** funciona como un convertidor entre una salida de impulsos (o salidas S0) y variantes del protocolo inalámbrico M-Bus. Este convertidor se utiliza cuando existe la necesidad de transferir datos desde el medidor o a una distancia de metros, o mayor, en el aire. El rango de transmisión depende de la posición de la antena del receptor, pero se mueve en terreno abierto hasta 2Km y en zonas de 200 a 300m.

## Advertencias
- **El transmisor no es adecuado para su uso en contadores de electricidad.**
- **Los terminales de entrada del transmisor están protegidos contra los cortocircuitos.**

## Todo lo que necesitas
Para empezar a configurar el transmisor WM-Bus 169Mhz tendrás que tener los siguientes elementos:

<img class="right" src="/images/requirements-configuration-transmisor-wmbus-169mhz.jpg" style="width:30%"></img>

1. Transmisor WM-169 Bus.
2. Un pequeño imán.
3. Un pendrive USB para PC/Portátil.
4. Herramienta de configuración software 2N WMBus Configuration Tool.

## Procedimientos para la configuración
Ahora vamos a prepararlo todo para poder configurar nuestro transmisor adecuadamente, para ello sigue los pasos que tienes a continuación:

1. Instalar software **2N WMBus COnfiguration Tool**
2. Inserte el USB en un puerto del ordenador. Espere unos segundos hasta que se instalen los controladores y luego abra el **Administrador de Dispositivos** (Device Manager sí tu sistema está en inglés) para buscar el puerto COM que se le ha asignado. **En nuestro caso es el COM30**.

<img class="center" src="/images/device-manager-transmisor-wmbus-169mhz.jpg"></img>

3. Retire el aislamiento en el cable del transmisor y conecta el transmisor a la salida de impulsos del medidor de agua o gas. El alambre blanco del transmisor es **+**.
4. Ejecuta el programa **2N WMBus Configuration Tool**. En la pestaña superior, selecciona COM30 y clic en `Connect`.
5. Cada vez que te encuentres en la interfaz de configuración, presiona `Load` para cargar la configuración actual del transmisor. Se le pedirá adherir el imán al transmisor para la activación. Coloque el manual en el lugar y mueva el imán por el transmisor hasta que los datos sean guardados.

<img class="center" src="/images/magnet-transmisor-wmbus-169mhz.jpg"></img>

6. Una vez que vea los datos del transmisor, puede verificar que esta es la misma dirección que el Wmbus, la cual viene en la etiqueta del transmisor. En nuestro caso, esta es 200. Entonces, mira el estado del medidor en el cual tu estas conectando el transmisor. En nuestro caso, este es un medidor de agua con estado actual de 1,491 m<sup>3</sup> y esta marcado con una constante de 1 impulso = 0,001 m<sup>3</sup> (es decir, 1L). Además, debes ajustar el transmisor. En el primer campo (número 2 en la imagen) el estado actual, en el segunda constante (número 3 en la imagen), la cual es igual a un pulso. Entonces, marque la activación de difusión (número 4) y configure el periodo en el cual el transmisor enviará los datos. Nosotros te recomendamos 600s donde la vida útil de la batería esta sobre los 5 años.

<img class="center" src="/images/configuration-transmisor-wmbus-169mhz.jpg"></img>

7. Después de configurar el transmisor, presiona el botón `Write` (número 6) para escribir la configuración en el transmisor. Se le pedirá que vuelva a mover el imán por la superficie. En primer lugar para activar el transmisor y luego para confirmar la configuración. Sí no se escribe los datos en el tiempo de espera, te saldrá un mensaje de error en el pantalla, y deberás repetir el procedimiento de escritura.
8. El transmisor se suministra mediante la toma de corriente en la que se puede fijar a un perno. Siempre es necesario asegurar el transmisor para evitar daños o tirones del cable desde el medidor.
9. El transmisor tiene protección contra la húmedad y penetración del polvo. Puede ser utilizado en pozos de medidores de agua y en ambientes muy húmedos. También , tiene certificación ATEX para su uso en entornos peligrosos. Los contados de gas son utulizados por defecto, pero solo cuando ATEX necesita cumplir una estación de alta presurización en caso de lugares de producción a gran escala.

## Atención
Muy a menudo, el técnico abandona la estación y establece un valor incorrecto para el transmisor. Es vital prestar atención a la unidad de pulsos constantes. Por lo tanto, siempre es aconsejable ajustar el transmisor por primera vez con un corto período de emisión, por ejemplo 60 segundos. Entonces, dale clic a la pestaña **Monitoring** y al botón `Start`, espera unos 60 segundos hasta que tu transmisor aparezca con el valor de lectura correcto en la pantalla. Entonces para el `stop` de monitorización y vuelve a la pestaña de **Configuration**, configura un período largo, ejemplo 600 segundos, y finalmente escriba con `Write` en el transmisor.

<img class="center" src="/images/monitoring-transmisor-wmbus-169mhz.jpg"></img>

Sí los técnicos desconectan el transmisor por alguna razón y lo mide desde el lugar de la instalación. Es necesario aislar la salida del cable blanco para prevenir un corto circuito y desactivar su transmisión mediante el programa de configuración. Esto previene que la batería se drene.

Siempre es mejor esperar a la instalación del sitio para después configurar y verificar que el transmisor lee los pulsos correctamente y envía los valores correctos.
Sí tu crees que el transmisor no lee los nuevos valores, es posible acortar los terminales de entrada en 10ms. Esto genera un número aleatorio de pulsos, así debes resetearlo, pero puedes comprobar que es divertido.
