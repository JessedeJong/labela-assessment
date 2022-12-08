import fetch from 'node-fetch';

export default (req, res) => {
  fetch('https://cms.labela.nl/api/v1/team')
    .then((data) => data.json())
    // Data has type any because you have to type it yourself in the queries!
    .then((data: any) => {
      const offices = data.items[0].offices_block.offices;

      res.status(200).json({ items: [{ offices }] });
    });
};
