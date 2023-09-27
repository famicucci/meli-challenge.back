const checkSignature = (req, res, next) => {
  if (!req.headers["user-signature"]) {
    return res.status(400).send({ msg: "Signature not valid" });
  }

  const userSignature = req.headers["user-signature"];

  if (userSignature !== "FRANCISCO-MICUCCI") {
    return res.status(400).send({ msg: "Signature not valid" });
  }

  next();
};

module.exports = {
  checkSignature: checkSignature,
};
