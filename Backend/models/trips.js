const FirstChar = require('../Classes/firstCharToUpper')

const TripeInfo = require("../schemas/tripeInfoSchema");
const { tripeInfoVaildation } = require("../schemas/validation");

const addTrip = async (req, res) => {
  const { error } = tripeInfoVaildation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  const { title, place, numOfPeople, price } = req.body;
  let FirstChars = new FirstChar().FirstCharToUpperCase(place)
  const { email, phone } = req.user;
  const tripeInfo = new TripeInfo({
    title,
    place: FirstChars,
    numOfPeople,
    price,
    email,
    phone,
  });
  try {
    const saveTripeInfo = await tripeInfo.save();
    res.send(saveTripeInfo);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  addTrip,
};
