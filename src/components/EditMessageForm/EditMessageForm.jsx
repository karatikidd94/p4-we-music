import { useState } from 'react';

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
            <input name='content' value={formData.content} onChange={handleChange}></input>
            <button type="submit">Save</button>
          </form>
    )
}