import { useState } from 'react';
import './EditMessageForm.css';

export default function EditMessagingForm({ onEdit }) {
    const [ formData, setFormData ] = useState({
        content: '',
    });

    function handleChange(evt) {
        setFormData({
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onEdit(formData);
        setFormData({
            content: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <input className='input-btn' name='content' value={formData.content} onChange={handleChange}></input>
            <button className='save-btn' type="submit">Save</button>
          </form>
    )
}