const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  // Calculer le prix total TTC
  const totalTTC = products.reduce((total, product) => total + product.price * 1.25, 0);

console.log(totalTTC); // 106.25