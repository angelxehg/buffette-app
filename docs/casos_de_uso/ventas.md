# Caso de Uso de Ventas

(Descripción)

## Pasos

1. Usuario va al menu "Vender"
2. Aplicación muestra interface de ventas
3. Por cada producto a vender:
  3.1. Usuario ingresa código de barras
  3.2. Comprueba si el producto existe
    3.2.1. Si existe, muestra su información
    3.2.2. Si no existe, se pide que lo registre, o que vuelva a ingresar el código de barras
  3.3. Usuario ingresa cantidad de producto
  3.4. App muestra total del producto
  3.5. Usuario presiona Confirmar o Cancelar
    3.5.1. Si Usuario presiona Confirmar, Aplicación guarda datos de la venta en tabla temporal
    3.5.2. Si Usuario presiona Cancelar, regresar a 3.3.
4. Aplicación muestra lista de productos, subtotal y total
5. Usuario presiona Confirmar o Cancelar
  5.1. Si Usuario presiona Confirmar, Aplicación guarda la venta y limpia tabla temporal
  5.2. Si Usuario presiona Cancelar, Aplicación elimina tabla temporal, cancelando la venta
