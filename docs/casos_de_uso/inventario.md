# Caso de Uso de Inventario

(Descripción)

## Pasos

1. Planificación de Inventario: Usuario presiona "Planificar Inventario"
2. Aplicación muestra interface de asignación de areas
3. Por cada area/exhibición/almacén
  3.1. Usuario presiona "Asignar"
  3.2. Usuario selecciona el empleado que se encargará del area
  3.3. Aplicación muestra datos del empleado
  3.4. Usuario presiona Confirmar
4. Cada Empleado ingresa al Inventario
  4.1. Aplicación muestra areas que esta contando
  4.2. Empleado selecciona cada area que le toca
    4.2.1. Por cada Producto, Empleado realiza el conteo
    4.2.2. Por cada Producto, Empleado separa productos expirados (merma)
    4.2.3. Empleado presiona Confirmar
5. Aplicación muestra resultados del conteo, destacando areas con mas diferencias entre el conteo realizado y los datos que ya tiene el sistema
6. Si usuario decide contar de nuevo, ir a Paso 3.
7. Usuario presiona Continuar
8. Aplicación hace ajustes al inventario de acuerdo con el resultado del conteo
