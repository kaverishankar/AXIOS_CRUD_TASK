import Prod from '../product/Product'
import './Home_module.css'

import { useState, useEffect } from "react";
import { getAllProd, deleteProd, createProd, getItemProd, editProd } from "../api_axios"

const initalValue = {
    title: '',
    qty: 0,
    price: 0,
    image: ''
};

const Home = () => {

    const [prodItem, setProdItem] = useState([]);
    const [newItem, setnewItem] = useState(initalValue);
    const [editId, seteditId] = useState(null);
    const [formOn, setFormOn] = useState(false);


    const openForm = () => {
        if (formOn) {
            setFormOn(false);
        }
        else {
            setFormOn(true);
        }
    };

    const formChange = (e) => {
        const { name, value } = e.target;
        setnewItem({
            ...newItem,
            [name]: value
        });
    };

    const loadProd = async () => {
        const data = await getAllProd();
        setProdItem(data);
    };
    const changeProd = async (id) => {
        seteditId(id);
        const item = await getItemProd(id);
        setnewItem(item);
        openForm();
    };

    const createItem = async () => {
        const addItem = await createProd(newItem);
        setProdItem([...prodItem, addItem]);

    };

    const editItem = async () => {
        const change = await editProd(editId, newItem);
        const index = prodItem.findIndex((pd) => pd.id === editId);
        const temp = [...prodItem];
        temp[index] = change;
        setProdItem(temp);
        seteditId(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            editItem();
        }
        else {
            createItem();
        }
        openForm();
        setnewItem(initalValue);

    }

    const removeItem = async (id) => {
        await deleteProd(id);
        setProdItem(prodItem.filter((pd) => pd.id !== id));
    };

    useEffect(() => {
        loadProd();
    }, []);



    return (
        <div className='contentbox'>
            <div style={{ paddingBottom: '50px' }}>
                <button className='btn' onClick={openForm} style={{ backgroundColor: 'aqua' }}>{'Add items'}</button>
            </div>
            {
                prodItem.map((val) =>
                (
                    <Prod {...val} key={val.id} removeItem={removeItem} changeProd={changeProd} />
                ))
            }
            {formOn && (
                <div className='overlay'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Title' name='title' value={newItem.title} onChange={formChange}></input>
                        <input type='number' placeholder='Quantity' name='qty' value={newItem.qty} onChange={formChange}></input>
                        <input type='number' placeholder='Price' name='price' value={newItem.price} onChange={formChange}></input>
                        <input type='url' placeholder='Image' name='image' value={newItem.image} onChange={formChange}></input>
                        <button style={{ marginRight: '10px' }} type='submit'>{'Add'}</button>
                        <button onClick={openForm}>{'Back'}</button>
                    </form>
                </div>
            )}

        </div>
    )
};

export default Home 