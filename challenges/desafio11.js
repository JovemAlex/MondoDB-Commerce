db.produtos.find(
  { $or: [
    { nome: { $nin: ["Big Mac", "McChicken"] } },
  ] },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 }
);