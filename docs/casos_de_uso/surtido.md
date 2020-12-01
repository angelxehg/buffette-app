# Caso de Uso de Surtido

(Descripción)

## Pasos

1. Usuario va al menu "Surtir"
2. Aplicación muestra interface de surtido
3. Por cada producto a registrar:
  3.1. Usuario ingresa Código de barras del producto
  3.2. Usuario presiona Continuar
  3.3. Si el producto ya existe, muestra formulario de datos
    3.3.1. Usuario rellena toda la información del producto
  3.4. Si el producto ya existe, Aplicación muestra sus datos
  3.5. Si el usuario presiona Cancelar
    3.5.1. Si es un producto nuevo, regresa a 3.3.1
    3.5.2. Si era un producto existente, regresa a 3.1
  3.6. Si el usuario presiona Continuar, muestra interface para registrar nuevos productos
  3.7. El usuario especifica cuentos productos nuevos hay
  3.8. Usuario presiona continuar
  3.9. Aplicación muestra resultado final
  3.10. Si Usuario presiona Cancelar, volver a 3.7
  3.11. Si el usuario presiona Continuar, Aplicación envía datos a API
4. Aplicación muestra resumen de productos surtidos
5. Si Usuario presiona Confirmar:
  5.1. Aplicación envia datos a API
  5.2. API Backend integra datos en el inventario general
6. Si Usuario presiona Cancelar:
  6.1 App pide a API eliminar datos del surtido
