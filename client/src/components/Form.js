import React, { useState } from 'react';

export default function Form(props){
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		description: ""
	});
	
	function handleChange(e){
		this.setForm({
			[e.target.name]: e.target.value,
		})
	}

	function handleClick(e) {
		setForm({
			[e.target.name]: e.target.value,
		})
			console.log('Button clicked')
		}

		function handleSubmit(e) {
			e.preventDefault();
			console.log('Form was submitted')
			console.log(form)
		}

    return (
        <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
				style ={ { backgroundImage: "url("+"https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"+")" }}>
            <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                <div class="text-center">
                    <h2 class="mt-6 text-3xl font-bold text-gray-900">
                        Escribe tu consulta!
                    </h2>
                </div>

                <form class="mt-8 space-y-6" onSubmit={handleSubmit} >
                    <div class="relative">
                        {/* <div class="absolute right-0 mt-4">
													<svg xmlns="http://www.w3.org/2000/svg"
															class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
																	d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
													</svg>
                        </div> */}
                        <label class="text-sm font-bold text-gray-700 tracking-wide">Nombre</label>
                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
													type="text" placeholder="Nombre" name="firstName" value={props.formValues.firstName} onChange={props.onChange}/>
                    </div>
										<div class="relative">
                        {/* <div class="absolute right-0 mt-4">
													<svg xmlns="http://www.w3.org/2000/svg"
															class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
																	d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
													</svg>
                        </div> */}
                        <label class="text-sm font-bold text-gray-700 tracking-wide">Apellido</label>
                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
													name="lastName" type="text" placeholder="Apellido" value={props.formValues.lastName} onChange={props.onChange}/>
                    </div>
										<div class="relative">
                        {/* <div class="absolute right-0 mt-4">
														<svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div> */}
                        <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                        <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
												 	name="lastName" type="email" placeholder="mail@gmail.com" value={props.formValues.email} onChange={props.onChange}/>
                    </div>
										<div class="flex-auto w-full mb-1 text-xs space-y-2">
											<label class="font-semibold text-gray-600 py-2">Description</label>
											<textarea required="true" type="email" name="message" id=""  value={props.formValues.description} onChange={props.onChange}
												class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Send your consulting" spellcheck="false"></textarea>
										</div>
                    <div>
                        <button onClick={handleClick} class="w-full flex justify-center bg-red-600 text-gray-100 p-4  rounded-full tracking-wide
														font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-700 shadow-lg cursor-pointer transition ease-in duration-300">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}