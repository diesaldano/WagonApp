import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Tabletop from "tabletop";
import Loading from '../components/Loading'

export default function Cards() {
  // const [productos, setProductos] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [dataChild, setDataChild] = useState({});
  const [isLoading, SetIsLoading] = useState(true)
  

  // const getProductos = () =>
  //   fetch("../db/camionetas.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   }).then(res => res.json());

  // useEffect(() => {
  //   getProductos().then(productos => setProductos(productos));
  // }, []);

  useEffect(() => {
    SetIsLoading(true);
    Tabletop.init({
      key: "1BCWRoOwjpoIIZUnYYpc8p6fzcz4JNCecsJIE0xm3Ts8",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
    new Promise( res =>{
      setTimeout(()=>{
        res()
      }, 3000)
    }).then(()=>{
      SetIsLoading(false);
    })
  }, []);

  let productToRender;

  if(isLoading){
    return(
      <Loading data={data}/>
    )
  } else {
    productToRender = data.map(data => {
      return (
        <div
          key={data.id}
          class="relative bg-white rounded-3xl my-4 shadow-xl shopping-cart"
          id="container"
        >
          <img
            id="producto-foto"
            class="rounded-t-xl object-cover h-48 w-full"
            src={data.photo_card}
            alt="Sunset in the mountains"
          />
  
          <div
            class="relative bg-white py-6 px-6 rounded-3xl "
            id="producto-detail"
          >
            <div>
              <p class="text-xl font-semibold my-2">
              {data.id} - {data.marca} - {data.modelo}
              </p>
              <div class="flex space-x-2 text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Model: {data.year}</p>
              </div>
              <div class="flex space-x-2 text-gray-600 text-sm my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>Precio: {data.precio}</p>
              </div>
              <div class="border-t-2"></div>
  
              <div class="flex justify-between">
                <div class="my-2">
                  <p class="font-semibold text-base mb-2">Recomendations</p>
                  <div class="flex space-x-2">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="foto 2"
                      class="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="foto 2"
                      class="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" alt="foto 2"
                      class="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
                <div class="my-2 flex flex-col">
                  <button
                    type="button"
                    // onClick={handleChange}
                    onClick={() => handleChange(open, data)}
  
                    class="p-0 text-base mb-2 font-semibold hover:text-red-700  mouse transition ease-in duration-200 focus:outline-none"
                  >
                    Reservar
                  </button>
                  <Link
                    to={{
                      pathname: `/productos/${data.id}`,
                      state: { data: data }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleMore(data)}
                      class="p-0 text-base mb-2 font-semibold hover:text-red-700  mouse transition ease-in duration-200 focus:outline-none"
                    >
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }


  
  


  /** Open Modal*/
  function handleChange(open,e) {
    console.log(e)
    setDataChild( e)
    setOpen((open = true));

  }
  /** Close Modal */
  function handleChangeClose(open) {
    setOpen(open);
  }

  function handleMore(e) {
    console.log("handle more", e);
  }

  return (
    <div
      class="px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 "
      style={{ backgroundColor: "#ebebeb" }}
    >
      {productToRender}
      <Modal open={open} onUpdate={handleChangeClose} data={dataChild} />
    </div>
  );
}
