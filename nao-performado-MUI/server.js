module.exports = () => {
  const data = {
    produtos: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.produtos.push({
      id: i + 1,
      preco: 50,
      titulo: `Camiseta ${i + 1}`,
    });
  }

  return data;
};
