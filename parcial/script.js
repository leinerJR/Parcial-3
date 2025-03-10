// Clase Pedido
class Pedido {
    constructor(id, cliente, producto, fecha, prioridad) {
      this.id = id;
      this.cliente = cliente;
      this.producto = producto;
      this.fecha = fecha;
      this.prioridad = prioridad;
      this.procesado = false; // Estado del pedido (procesado o no)
    }
  }
  
  // Clase Cliente
  class Cliente {
    constructor(id, nombre, apellido) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }
  
  // Clase Producto
  class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  // Lista enlazada para gestionar pedidos
  class ListaPedidos {
    constructor() {
      this.pedidos = [];
    }
  
    agregarPedido(pedido) {
      this.pedidos.push(pedido);
    }
  
    buscarPedido(id) {
      for (let i = 0; i < this.pedidos.length; i++) {
        if (this.pedidos[i].id === id) {
          return this.pedidos[i];
        }
      }
      return null;
    }
  
    eliminarPedido(id) {
      for (let i = 0; i < this.pedidos.length; i++) {
        if (this.pedidos[i].id === id) {
          this.pedidos.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  
    ordenarPedidos(criterio) {
      switch (criterio) {
        case "fecha":
          this.pedidos.sort((a, b) => a.fecha.localeCompare(b.fecha));
          break;
        case "prioridad":
          this.pedidos.sort((a, b) => b.prioridad - a.prioridad);
          break;
        default:
          console.log("Criterio de ordenamiento no válido");
      }
    }
  }
  
  // Función principal
  function main() {
    const listaPedidos = new ListaPedidos();
  
    // Crear pedidos
    const pedido1 = new Pedido(1, new Cliente(1, "Juan", "Pérez"), new Producto(1, "Producto A", 100), "2025-01-01", 1);
    const pedido2 = new Pedido(2, new Cliente(2, "María", "Gómez"), new Producto(2, "Producto B", 200), "2025-01-15", 2);
    const pedido3 = new Pedido(3, new Cliente(3, "Carlos", "López"), new Producto(3, "Producto C", 300), "2025-02-01", 3);
  
    // Agregar pedidos a la lista
    listaPedidos.agregarPedido(pedido1);
    listaPedidos.agregarPedido(pedido2);
    listaPedidos.agregarPedido(pedido3);
  
    // Buscar pedido
    const pedidoEncontrado = listaPedidos.buscarPedido(2);
    if (pedidoEncontrado) {
      console.log(`Pedido encontrado: ${pedidoEncontrado.id} - ${pedidoEncontrado.cliente.nombre} ${pedidoEncontrado.cliente.apellido}`);
    } else {
      console.log("Pedido no encontrado");
    }
  
    // Ordenar pedidos
    listaPedidos.ordenarPedidos("fecha");
  
    // Imprimir pedidos ordenados
    console.log("Pedidos ordenados por fecha:");
    listaPedidos.pedidos.forEach((pedido) => {
      console.log(`${pedido.id} - ${pedido.cliente.nombre} ${pedido.cliente.apellido} - ${pedido.fecha}`);
    });
  }
  main();