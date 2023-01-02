export type Offices = {
    items: {
        offices: OfficeType[]
    }
}

export type OfficeType = {
    id: string,
    type: string,
    value: {
        street: string,
        street_number: number,
        zip_code: string,
        city: string,
        phone_number: string,
        email_address: string,
        image: {
            large: string,
            alt: string,
            mobile: string,
        }
    }
}