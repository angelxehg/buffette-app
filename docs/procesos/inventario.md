# Proceso de Inventario

Este es el proceso mediante el cual se realiza un inventario a todas las areas, se analizan las diferencias, posibles perdidas y se ajusta el registro de productos en Stock. Las mejoras propuestas al proceso tienen que ver con la transición de los registros en papel a los digitales.

## Datos de entrada

- Empleados asignados a cada area

## Elementos de salida

- Inventario/stock actualizado

## Actores

- Administrador (Planea el Inventario)
- Empleado (Realiza el Inventario)

## Roles

- Administrador (Planea el Inventario)
- Empleado (Realiza el Inventario)

## Procedimiento

Para un procedimiento más detallado, ver [Caso de Uso de Inventario](../casos_de_uso/inventario.md) El proceso de inventario se divide en los siguientes pasos:

1. Planificación del inventario: Se determina cual es el mejor dia y hora para realizarlo, buscando afectar lo menos posible las operaciones de negocios. Después se convoca a los empleados con días de antelación,
2. Organizar productos por áreas: Se verifica que los productos se encuentren en las áreas correctas. En el caso de los productos alimenticios también se separan los que se encuentren caducados o dañados.
3. Ejecución del conteo: Se cuenta la cantidad de productos de manera ordenada. Se usan técnicas como conteo con lista ciega (donde el personal desconoce las existencias registradas anteriormente). También se marca que áreas ya han sido contabilizadas.
4. Conteos adicionales: Se suele recomendar que el conteo se realice por lo menos dos veces, y que sean personas distintas cada vez.
5. Ajuste de diferencias: Se determinan la cantidad de productos faltantes, al comparar el resultado del conteo con los registros anteriores y de ventas. Se busca que esta diferencia esté por debajo de 2% (0% en los productos más caros). Si se encuentran diferencias más grandes se puede realizar un nuevo conteo en un área específica.
6. Documentación de mermas: Una vez se contabilizan los productos que se separaron (dañados o caducados) se debe procesar esa mercancía de acuerdo con su tipo, los procesos definidos en la organización y las normativas aplicables en cada caso. Estos productos que se retiran de inventario deberán con los conteos finales.
7. Resultado final: Se realiza un informe que contiene las cantidades de productos actuales, merma y faltantes, organizados por áreas, tipos de producto y productos.
