import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id);
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <tr className="bg-white border-2 border-gray-200">
            <td className="px-4 py-3">{item.id}</td>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.email}</td>
            <td className="px-4 py-3">{item.phone}</td>
            <td className="px-4 py-3">{item.website}</td>
            <td onClick={onEdit}
                className="text-center text-purple-400 cursor-pointer show-modal">
                <FontAwesomeIcon icon={faEdit}/>
            </td>
            <td onClick={onRemove}
                className="text-center text-purple-400 cursor-pointer">
                <FontAwesomeIcon icon={faTrashAlt}/>
            </td>
        </tr>
    )
}

export default Td;