import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
    name: string,
    birthdate: string,
    favorite_food: string,
    favorite_pet: string,
    function: string,
};

type Props = {
    addEmployee: (employee: Inputs) => void;
}

export const EmployeeForm = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => props.addEmployee({
        birthdate: data.birthdate,
        favorite_food: data.favorite_food,
        favorite_pet: data.favorite_pet,
        function: data.function,
        name: data.name,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        <input {...register("birthdate", { required: true })} />
        <input {...register("favorite_food", { required: true })} />
        <input {...register("favorite_pet", { required: true })} />
        <input {...register("function", { required: true })} />
                
        <input type="submit" />
        </form>
    );
}