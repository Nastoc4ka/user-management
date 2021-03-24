import React, {useState} from 'react';
import CategoryCreate from "./CategoryCreate";
import {Button} from "react-bootstrap";

export const AddCategory = () => {
    const [categoryForm, setCategoryForm] = useState(false);

    return <>
        {categoryForm ? <CategoryCreate hide={() => setCategoryForm(false)}/> :
            <Button variant="outline-info" className='w-100 mt-3' onClick={() => setCategoryForm(true)}>ADD NEW
                CATEGORY</Button>}
    </>
};