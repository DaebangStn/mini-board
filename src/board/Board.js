import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {
        if(data.id){
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                }: row)
            )
        }else{
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                }
            ))
        }
        nextId.current += 1;
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedDate = {
            id: item.current,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website,
        };
        console.log(selectedDate);
        setSelected(selectedDate);
    };

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    }

    return (
        <div className="container max-w-screen-lg mx-auto">
            <div className="text-cl font-bold mt-5 mb-3 text-center">
                고객 정보 리스트
            </div>
            <table className="min-w-full table-auto text-gray-800">
                <thead className="justify-between">
                <tr className="bg-gray-800">
                    <th className="text-gray-300 px-4 py-3">Id.</th>
                    <th className="text-gray-300 px-4 py-3">Name</th>
                    <th className="text-gray-300 px-4 py-3">Email</th>
                    <th className="text-gray-300 px-4 py-3">Phone No.</th>
                    <th className="text-gray-300 px-4 py-3">Website</th>
                    <th className="text-gray-300 px-4 py-3">Edit</th>
                    <th className="text-gray-300 px-4 py-3">Delete</th>
                </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
            </table>
            <Post onSaveData={handleSave}/>
            {modalOn &&
                <Modal
                    selectedData={selected}
                    handleCancel={handleCancel}
                    handleEditSubmit={handleEditSubmit} />
            }
        </div>
    );
};

export default Board;