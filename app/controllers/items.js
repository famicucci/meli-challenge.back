exports.list = async (req, res) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}`
    );
    const data = await response.json();
    res.status(200).send({
      author: { name: "Francisco", lastname: "Micucci" },
      categories: [],
      items: data.results,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};