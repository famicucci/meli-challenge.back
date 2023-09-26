exports.list = async (req, res) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
    );
    const data = await response.json();
    res.status(200).send({
      author: { name: "Francisco", lastname: "Micucci" },
      categories: [],
      items: data.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.oneItem = async (req, res) => {
  try {
    // promise all
    const [item, description] = await Promise.all([
      fetch(`https://api.mercadolibre.com/items/${req.params.id}`),
      fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`),
    ]);

    const itemData = await item.json();
    const descriptionData = await description.json();

    res.status(200).send({
      author: { name: "Francisco", lastname: "Micucci" },
      categories: [],
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
          decimals: 0,
        },
        picture: itemData.thumbnail,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: descriptionData.plain_text,
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
