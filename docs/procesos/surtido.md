# Proceso de Surtido

Este es el proceso mediante el cual se registran los productos que son comprados

![Diagrama RAD Surtido](./../images/RADSurtido.png)

## Datos de entrada

- Código de barras de los productos
- Información de los producto (si son nuevo)
- Cantidad de los productos

## Elementos de salida

- Inventario/stock actualizado

## Actores

- Empleado
- Vendedor (externo)

## Roles

- Empleado

## Procedimiento

Para un procedimiento más detallado, ver [Caso de Uso de Surtido](../casos_de_uso/surtido.md)

1. El proveedor ingresa al establecimiento. Se surten los productos y se entrega una factura o ticket.
2. El empleado ingresa al sistema, al apartado de Surtidos.
3. El empleado registra los productos nuevos, productos que se surten y productos que se retiran
4. La aplicación guarda la información actualizada del Stock
