import React, { useState } from 'react';
import Form from '../components/Form';

export default function FormNew(){
    const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		description: ""
	});

    function handleChange(e){
        setForm({
            form: {
							...form,
							[e.target.name]: e.target.value,
            }
        })
    }

    return (
		<div
      class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1| "
      style={{ backgroundColor: "#ebebeb" }}
    >
			<Form 
				onChange={handleChange}
				formValues={form}	/>
		</div>
    )
}