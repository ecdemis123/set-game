import Card from '../models/Card';

module.exports = {
  getGame: (req, res) => {
    const card = new Card('blue', 'diamond', 1, 'solid');
    res.json({ card });
    // await the creation of the randomized deck
    // if there is no error return the cards, else return an error
  },

};
