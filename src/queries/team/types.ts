import { OfficeType } from "types";

export type Team = {
    items: {
        employees: EmployeeType[]
    }
};

export type EmployeeType = {
    id: number,
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
        office_id?: string;
        office?: OfficeType;
    }
}
