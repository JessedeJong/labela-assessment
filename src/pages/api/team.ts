import fetch from 'node-fetch';

import { foodOptions, getRandomDate, getRandomNumber, petOptions } from 'services';

export default (req, res) => {
  fetch('https://cms.labela.nl/api/v1/team')
    .then((data) => data.json())

    // Data has type any because you have to type it yourself in the queries!
    .then((data: any) => {
      const offices = data.items[0].offices_block.offices;

      const team = {
        items: [
          {
            employees: data.items[0].employees.map((employee) => ({
              ...employee,
              value: {
                name: employee.value.name,
                function: employee.value.function,
                image: employee.value.image,
                office_id: offices[getRandomNumber(2)].id,
                birthdate: getRandomDate(),
                favorite_pet: petOptions[getRandomNumber(petOptions.length)],
                favorite_food: foodOptions[getRandomNumber(foodOptions.length)],
              },
            })),
          },
        ],
      };
      res.status(200).json(team);
    });
};
