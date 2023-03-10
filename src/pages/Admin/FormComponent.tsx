import React, {useState} from 'react';
import {IInputValues, IProduct} from "./Interfaces";
import axios from "axios";

interface IFormComponentProps {
    addNewProduct: (product:IProduct) => void
    setModal: (b: boolean) => void
}
const FormComponent = ({addNewProduct, setModal}:IFormComponentProps) => {
    const [error, setError] = useState<string>("")
    const [values, setValues] = useState<IInputValues>({
        title: "",
        price: "",
        description: ""
    })
    const newProduct:IProduct = {
        title: values.title,
        price: +values.price,
        description: values.description,
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 12,
            count: 31,
        }
    }
    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            if (values.description.trim().length !== 0 && values.title.trim().length !== 0 && values.price.trim().length !== 0) {
                setError("")
                setValues({title: "", price: "", description: ""})
                const response = await axios.post<IProduct>("https://fakestoreapi.com/products", newProduct)
                console.log(response)
                addNewProduct(newProduct)
                setModal(false)
            } else {
                setError("Заполните поле!")
            }
        } catch (e) {
            console.log(e)
        }
    }
    const handleChange = (event: React.ChangeEvent<any>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleForm} action="">
                <input
                    onChange={handleChange}
                    type="text" className="mb-2 px-2 py-1 border outline-0 w-full rounded"
                    placeholder="title"
                    name="title"
                    value={values.title}
                />
                <input
                    onChange={handleChange}
                    type="text" className="mb-2 px-2 py-1 border outline-0 w-full rounded"
                    placeholder="price"
                    name="price"
                    value={values.price}
                />
                <textarea
                    onChange={handleChange}
                    className="mb-2 px-2 py-1 border outline-0 w-full rounded"
                    placeholder="description"
                    name="description"
                    value={values.description}
                />
             <div className="flex items-center">
                 <button className="hover:bg-black/20 border  rounded px-4 py-1 bg-amber-400">
                     create
                 </button>
                 {error && <p className="mx-10 text-red-600 text-[14px]">{error}</p>}
             </div>
            </form>
        </div>
    );
};

export default FormComponent;