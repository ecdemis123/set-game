import { getDeck } from '../lib/library';

module.exports = {
  getDeck: (req, res) => {
    const deck = getDeck();
    res.json({ deck });
    // await the creation of the randomized deck
    // if there is no error return the cards, else return an error
  },

};
