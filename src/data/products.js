const products = [
    {
        name: "Café Caramel con Chocolate",
        price: 59.9,
        image: "cafe_01",
        category_id: 1,
        id: 1
      },
      {
        name: "Café Frio con Chocolate Grande",
        price: 49.9,
        image: "cafe_02",
        category_id: 1,
        id: 2
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        image: "cafe_03",
        category_id: 1,
        id: 3
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        image: "cafe_04",
        category_id: 1,
        id: 4
      },
      {
        name: "Malteada Fria con Chocolate Grande",
        price: 54.9,
        image: "cafe_05",
        category_id: 1,
        id: 5
      },
      {
        name: "Café Mocha Caliente Chico",
        price: 39.9,
        image: "cafe_06",
        category_id: 1,
        id: 6
      },
      {
        name: "Café Mocha Caliente Grande con Chocolate",
        price: 59.9,
        image: "cafe_07",
        category_id: 1,
        id: 7
      },
      {
        name: "Café Caliente Capuchino Grande",
        price: 59.9,
        image: "cafe_08",
        category_id: 1,
        id: 8
      },
      {
        name: "Café Mocha Caliente Mediano",
        price: 49.9,
        image: "cafe_09",
        category_id: 1,
        id: 9
      },
      {
        name: "Café Mocha Frio con Caramelo Mediano",
        price: 49.9,
        image: "cafe_10",
        category_id: 1,
        id: 10
      },
      {
        name: "Café Mocha Frio con Chocolate Mediano",
        price: 49.9,
        image: "cafe_11",
        category_id: 1,
        id: 11
      },
      {
        name: "Café Espresso",
        price: 29.9,
        image: "cafe_12",
        category_id: 1,
        id: 12
      },
      {
        name: "Café Capuchino Grande con Caramelo",
        price: 59.9,
        image: "cafe_13",
        category_id: 1,
        id: 13
      },
      {
        name: "Café Caramelo Grande",
        price: 59.9,
        image: "cafe_14",
        category_id: 1,
        id: 14
      },
      {
        name: "Paquete de 3 donuts de Chocolate",
        price: 39.9,
        image: "donas_01",
        category_id: 4,
        id: 15
      },
      {
        name: "Paquete de 3 donuts Glaseadas",
        price: 39.9,
        image: "donas_02",
        category_id: 4,
        id: 16
      },
      {
        name: "Donut de Fresa ",
        price: 19.9,
        image: "donas_03",
        category_id: 4,
        id: 17
      },
      {
        name: "Donut con Galleta de Chocolate ",
        price: 19.9,
        image: "donas_04",
        category_id: 4,
        id: 18
      },
      {
        name: "Donut glass con Chispas Sabor Fresa ",
        price: 19.9,
        image: "donas_05",
        category_id: 4,
        id: 19
      },
      {
        name: "Donut glass con Chocolate ",
        price: 19.9,
        image: "donas_06",
        category_id: 4,
        id: 20
      },
      {
        name: "Donut de Chocolate con MÁS Chocolate ",
        price: 19.9,
        image: "donas_07",
        category_id: 4,
        id: 21
      },
      {
        name: "Paquete de 3 donuts de Chocolate ",
        price: 39.9,
        image: "donas_08",
        category_id: 4,
        id: 22
      },
      {
        name: "Paquete de 3 donuts con Vainilla y Chocolate ",
        price: 39.9,
        image: "donas_09",
        category_id: 4,
        id: 23
      },
      {
        name: "Paquete de 6 donuts",
        price: 69.9,
        image: "donas_10",
        category_id: 4,
        id: 24
      },
      {
        name: "Paquete de 3 Variadas",
        price: 39.9,
        image: "donas_11",
        category_id: 4,
        id: 25
      },
      {
        name: "Donut Natural con Chocolate",
        price: 19.9,
        image: "donas_12",
        category_id: 4,
        id: 26
      },
      {
        name: "Paquete de 3 donuts de Chocolate con Chispas",
        price: 39.9,
        image: "donas_13",
        category_id: 4,
        id: 27
      },
      {
        name: "Donut Chocolate y Coco",
        price: 19.9,
        image: "donas_14",
        category_id: 4,
        id: 28
      },
      {
        name: "Paquete Galletas de Chocolate",
        price: 29.9,
        image: "galletas_01",
        category_id: 6,
        id: 29
      },
      {
        name: "Paquete Galletas de Chocolate y Avena",
        price: 39.9,
        image: "galletas_02",
        category_id: 6,
        id: 30
      },
      {
        name: "Paquete de Muffins de Vainilla",
        price: 39.9,
        image: "galletas_03",
        category_id: 6,
        id: 31
      },
      {
        name: "Paquete de 4 Galletas de Avena",
        price: 24.9,
        image: "galletas_04",
        category_id: 6,
        id: 32
      },
      {
        name: "Galletas de Mantequilla Variadas",
        price: 39.9,
        image: "galletas_05",
        category_id: 6,
        id: 33
      },
      {
        name: "Galletas de sabores frutales",
        price: 39.9,
        image: "galletas_06",
        category_id: 6,
        id: 34
      },
      {
        name: "Hamburguesa Sencilla",
        price: 59.9,
        image: "hamburguesas_01",
        category_id: 2,
        id: 35
      },
      {
        name: "Hamburguesa de Pollo",
        price: 59.9,
        image: "hamburguesas_02",
        category_id: 2,
        id: 36
      },
      {
        name: "Hamburguesa de Pollo y Chili",
        price: 59.9,
        image: "hamburguesas_03",
        category_id: 2,
        id: 37
      },
      {
        name: "Hamburguesa Queso y  Pepinos",
        price: 59.9,
        image: "hamburguesas_04",
        category_id: 2,
        id: 38
      },
      {
        name: "Hamburguesa Cuarto de Libra",
        price: 59.9,
        image: "hamburguesas_05",
        category_id: 2,
        id: 39
      },
      {
        name: "Hamburguesa Doble Queso",
        price: 69.9,
        image: "hamburguesas_06",
        category_id: 2,
        id: 40
      },
      {
        name: "Hot Dog Especial",
        price: 49.9,
        image: "hamburguesas_07",
        category_id: 2,
        id: 41
      },
      {
        name: "Paquete 2 Hot Dogs",
        price: 69.9,
        image: "hamburguesas_08",
        category_id: 2,
        id: 42
      },
      {
        name: "4 Rebanadas de Pay de Queso",
        price: 69.9,
        image: "pastel_01",
        category_id: 5,
        id: 43
      },
      {
        name: "Waffle Especial",
        price: 49.9,
        image: "pastel_02",
        category_id: 5,
        id: 44
      },
      {
        name: "Croissants De la casa",
        price: 39.9,
        image: "pastel_03",
        category_id: 5,
        id: 45
      },
      {
        name: "Pay de Queso",
        price: 19.9,
        image: "pastel_04",
        category_id: 5,
        id: 46
      },
      {
        name: "Pastel de Chocolate",
        price: 29.9,
        image: "pastel_05",
        category_id: 5,
        id: 47
      },
      {
        name: "Rebanada Pastel de Chocolate",
        price: 29.9,
        image: "pastel_06",
        category_id: 5,
        id: 48
      },
      {
        name: "Pizza Spicy con Doble Queso",
        price: 69.9,
        image: "pizzas_01",
        category_id: 3,
        id: 49
      },
      {
        name: "Pizza Jamón y Queso",
        price: 69.9,
        image: "pizzas_02",
        category_id: 3,
        id: 50
      },
      {
        name: "Pizza Doble Queso",
        price: 69.9,
        image: "pizzas_03",
        category_id: 3,
        id: 51
      },
      {
        name: "Pizza Especial de la Casa",
        price: 69.9,
        image: "pizzas_04",
        category_id: 3,
        id: 52
      },
      {
        name: "Pizza Chorizo",
        price: 69.9,
        image: "pizzas_05",
        category_id: 3,
        id: 53
      },
      {
        name: "Pizza Hawaiana",
        price: 69.9,
        image: "pizzas_06",
        category_id: 3,
        id: 54
      },
      {
        name: "Pizza Tocino",
        price: 69.9,
        image: "pizzas_07",
        category_id: 3,
        id: 55
      },
      {
        name: "Pizza Vegetales y Queso",
        price: 69.9,
        image: "pizzas_08",
        category_id: 3,
        id: 56
      },
      {
        name: "Pizza Pepperoni y Queso",
        price: 69.9,
        image: "pizzas_09",
        category_id: 3,
        id: 57
      },
      {
        name: "Pizza Aceitunas y Queso",
        price: 69.9,
        image: "pizzas_10",
        category_id: 3,
        id: 58
      },
      {
        name: "Pizza Queso, Jamón y Champiñones",
        price: 69.9,
        image: "pizzas_11",
        category_id: 3,
        id: 59
      }
]

export {
    products 
}