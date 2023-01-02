export type Team = {
    items: {
        employees: []
    }
};

export type EmployeeType = {
    id: string,
    type: string,
    value: {
        birthdate: string,
        favorite_food: string,
        favorite_pet: string,
        function: string,
        image: {
            alt: string,
            small: string,
            large: string,
            mobile: string,
        },
        name: string,
        office_id: string;
    }
}
