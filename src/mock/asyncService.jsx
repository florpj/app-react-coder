const pizzas = [
    {
      id: '01',
      nombre: "MUZZARELLA",
      descripcion: "Pizza con salsa de Tomate Muzzarella y Orégano Grande",
      precio: 5999,
      imagen: "https://i.postimg.cc/d1CGfT4B/Muzza.jpg",
      categoria: "veggies",
      stock: 30 
    },
    {
      id: '02',
      nombre: "DOBLE MUZZARELLA",
      descripcion: "Pizza con Salsa de Tomate Muzzarella y Orégano Grande",
      precio: 10499,
      imagen: "https://i.postimg.cc/5yY5RcHP/Muzza-Doble-Muzza.jpg",
      categoria: "promos",
      stock: 30
    },
    {
      id: '03',
      nombre: "MUZZARELLA Y PANCETA",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Panceta y Orégano Grande",
      precio: 11299,
      imagen: "../XuUOUVWVr_720x0__1.jpg",
      categoria: "las-mas-elegidas",
      stock: 45
    },
    {
      id: '04',
      nombre: "JAMON",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Jamón y Orégano Grande",
      precio: 9799,
      imagen: "https://i.postimg.cc/yYs0fx9m/Jamo-n.jpg",
      categoria: "las-mas-elegidas",
      stock: 40
    },
    {
      id: '05',
      nombre: "JAMON Y MORRON",
      descripcion: "Pizza con salsa de Tomate Muzzarella Jamón Morrón y Orégano Grande",
      precio: 12799,
      imagen: "https://i.postimg.cc/NMGpbP7V/Jamo-n-y-morrones.jpg",
      categoria: "promos",
      stock: 20
    },
    {
      id: '06',
      nombre: "FUGAZZETA",
      descripcion: "Pizza con Cebolla Muzzarella y Orégano Grande",
      precio: 7499,
      imagen: "https://i.postimg.cc/8CYskrJK/Fugazetta.jpg",
      categoria: "veggies",
      stock: 25
    },
    {
      id: '07',
      nombre: "FUGAZZETA Y JAMON",
      descripcion: "Pizza con Cebolla Muzzarella Jamón y Orégano Grande",
      precio: 10999,
      imagen: "https://i.postimg.cc/bYC2MqyZ/Nuevas-Pizzas-2787.jpg",
      categoria: "las-mas-elegidas",
      stock: 25
    },
    {
      id: '08',
      nombre: "NAPOLITANA",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Tomate y Orégano Grande",
      precio: 8999,
      imagen: "https://i.postimg.cc/y6hgPYrD/Napolitana.jpg",
      categoria: "veggies",
      stock: 35
    },
    {
      id: '09',
      nombre: "NAPOLITANA Y JAMON",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Jamón Tomate y Orégano Grande",
      precio: 11999,
      imagen: "https://i.postimg.cc/MGd7tVXL/Nuevas-Pizzas-2770.jpg",
      categoria: "promos",
      stock: 8
    },
    {
      id: '10',
      nombre: "4 QUESOS",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Cheddar Roquefort Parmesano y Oregano Grande",
      precio: 14999,
      imagen: "https://i.postimg.cc/Wb4yPFVq/4-Quesos.jpg",
      categoria: "veggies",
      stock: 15
    },
    {
      id: '11',
      nombre: "PEPPERONI",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Pepperoni y Orégano Grande",
      precio: 14299,
      imagen: "https://i.postimg.cc/59Hh867V/Pepperoni.jpg",
      categoria: "las-mas-elegidas",
      stock: 30
    },
    {
      id: '12',
      nombre: "CANCHA",
      descripcion: "Pizza con Salsa de Tomate y Orégano sin Lácteos Apta Veganos Grande",
      precio: 4999,
      imagen: "https://i.postimg.cc/BnBSRMKs/Pizzaiola.jpg",
      categoria: "veggies",
      stock: 25
    },
    {
      id: '13',
      nombre: "RUCULA",
      descripcion: "Pizza con salsa de Tomate Muzzarella Rúcula Parmesano y Orégano Grande",
      precio: 8299,
      imagen: "https://i.postimg.cc/NMprYQ2s/Ru-cula.jpg",
      categoria: "veggies",
      stock: 22
    },
    {
      id: '14',
      nombre: "PROVOLONE Y MORRON GRANDE",
      descripcion: "Pizza con Salsa de Tomate Muzzarella Provolone Morrón Aceitunas Verdes y Orégano Grande",
      precio: 13499,
      imagen: "https://i.postimg.cc/852g766t/Provolone-y-Morro-n.jpg",
      categoria: "veggies",
      stock: 15
    }
  ];

export const getPizzas = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(pizzas)
    }, 2000)
  })
}

export const getIdPizza = (id) => {
  return new Promise((resolve, reject)=>{
    const pizza = pizzas.find((el) => (id === el.id))
    setTimeout(()=>{
      resolve(pizza)
    }, 2000)
  })
}