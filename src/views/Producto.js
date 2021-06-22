import "./producto.css";
import React, { useState, useEffect } from "react";

//import productsData from "../db/camionetas.json";

export default function Product(props) {
  const [localdata, setLocaldata] = React.useState({});
  //const { productId } = useParams();

  console.log(props.location.state.data);
  //src="https://picsum.photos/1200/800?grayscale"
  return (
    <div className="">
      <img
        src={props.location.state.data.photo_header}
        alt="imagen de muestra"
      />
      <div class="px-5">
        <h2 class="uppercase text-black text-2xl font-medium pt-4">
          {props.location.state.data.marca} {props.location.state.data.modelo}
        </h2>
        <small class="uppercase">{props.location.state.data.year}</small>
      </div>
      <div class="px-2">
        <p class="text-gray-600 text-black text-sm p-3 text-justify">
          The Nike Epic React Flyknit 1 provides crazy comfort that lasts as
          long as you can run. Its Nike React foam cushioning is responsive yet
          lightweight, durable yet soft. This attraction of opposites creates a
          sensation that not only enhances the feeling of moving forwards, but
          makes running feel fun, too.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 p-2">
        <img
          class="rounded-md"
          src={props.location.state.data.photo_header}
          alt="imagen de muestra"
        />
        <img
          class="rounded-md"
          src={props.location.state.data.photo_header}
          alt="imagen de muestra"
        />
        <img
          class="rounded-md"
          src={props.location.state.data.photo_header}
          alt="imagen de muestra"
        />
      </div>
      <div class="flex justify-between px-5 mt-5 ">
        <div class="flex">
          <h3 class="mr-1">color: {props.location.state.data.color}</h3>
          <span class="w-5 h-5 bg-green-400 rounded-full mx-1" />
        </div>
        <div>buttons</div>
      </div>
      <hr class="w-100 border-gray-300 px-5 m-5" />
      <div class="flex justify-between px-5 mb-5">
        <h1 class="text-xl font-semibold text-black">
          {props.location.state.data.precio}
        </h1>
        <div>
          <button class="text-white mx-4 px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <span>Buy now</span>
          </button>
          <button class=" text-white bg-green-500 hover:bg-green-700 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 ">
            <svg viewBox="0 0 32 32" class="whatsapp-ico">
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
