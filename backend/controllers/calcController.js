const calculate = (req, res) => {
  const { longueur, largeur, type } = req.body;

  const materials = {
    mdf: 5000,
    bois: 6000,
    contreplaque: 6000,
    charniere: 600,
    rails: 4000,
    poignee: 400,
    vis: 1500,
    vernis: 2500,
    peinture: 2000,
    stratifié: 3000,
    silicone: 1200,
    meuble_cuisine: 25000,
    plan_travail: 10000,
    evier: 15000,
    hotte: 35000,
    cable_electrique: 200,
    carrelage: 3000,
    wc: 40000,
    lavabo: 30000,
    robinet: 8000
  };

  const surface = longueur * largeur;
  const prix = materials[type] || 0;
  const total = surface * prix;

  res.json({
    surface,
    prix,
    total
  });
};

module.exports = {
  calculate
};