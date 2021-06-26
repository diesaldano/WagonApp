import React,{ Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";


export default function Modal(props) {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data)

  const cancelButtonRef = useRef(null);

  function handleChange() {
    setOpen(false);
    props.onUpdate(open);
  }
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-red-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <form class="grid bg-white rounded-lg ">
                        <div class="flex justify-center">
                          <div class="flex">
                            <h1 class="text-gray-600 font-bold md:text-2xl pb-5 text-xl">Formulario de compra</h1>
                          </div>
                        </div>
                        <div class="flex justify-center">
                          <div class="flex w-2/6	">
                            <img src={props.data.photo_card} alt={props.data.marca} />                      
                          </div>
                          <div class="flex flex-col w-3/6 px-3">
                            <h3 id="product-description" class="text-gray-900 text-lg leading-6 font-medium">{props.data.marca} {props.data.modelo} {props.data.year}</h3>
                            <h3 id="unit-price" class="text-gray-600 ">{props.data.precio}</h3>
                          </div>
                        </div>

                        <div class="grid grid-cols-1 mt-5 mx-7">
                          <label for="money" class=" duration-300 top-3 left-5 -z-1 origin-0 text-gray-500 uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</label>
                          <input id="quantity"  type="number" name="money"  placeholder="Ingress the quantity" onChange={updatePrice}
                            class="form-control pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
                          {/* <label for="money" class=" duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Quantity</label> */}
                          {/* <input id="quantity" type="number" name="money"  placeholder="Ingress the quantity" class="form-control pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/> */}
                          <div class="py-4 color-grey-500">
                            <h3 class="text-gray-900 text-lg leading-6 font-medium">Cart</h3>
                            <div class="summary-item"><span class="text">Subtotal</span><span class="price" id="cart-total"></span></div>
                            {/* <button class="btn btn-primary btn-lg btn-block" id="checkout-btn">Checkoutttt</button> */}
                          </div>
                        </div>

                        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                          {/* <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                          <button class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button> */}
                          <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            open={props.open}
                            onClick={handleChange}
                            ref={cancelButtonRef}
                          >
                            Cancelar
                          </button>
                          <button
                            id="checkout-btn"
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={checkoutMp}
                          >
                            Checkout
                          </button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
              <section class="payment-form dark">
                <div class="container_payment">
                  <div class="block-heading">
                    <h2>Checkout Payment</h2>
                    <p>This is an example of a Mercado Pago integration</p>
                  </div>
                  <div class="form-payment">
                    <div class="products">
                      <h2 class="title">Summary</h2>
                      <div class="item">
                        <span class="price" id="summary-price"></span>
                        <p class="item-name">
                          <span id="summary-quantity"></span>
                        </p>
                      </div>
                      <div class="total">
                        Total<span class="price" id="summary-total"></span>
                      </div>
                    </div>
                    <div class="payment-details">
                      <div class="form-group col-sm-12">
                        <br />
                        <div id="button-checkout"></div>
                        <br />
                        <a id="go-back" onClick={handleBack}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 10 10"
                            class="chevron-left"
                          >
                            <path
                              fill="#009EE3"
                              fill-rule="nonzero"
                              id="chevron_left"
                              d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"
                            ></path>
                          </svg>
                          Go back to Shopping Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

 
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function checkoutMp() {
  console.log("Opening checkout");

  let orderData = {
    quantity: document.getElementById("quantity").value,
    description: document.getElementById("product-description").innerHTML,
    price: document.getElementById("unit-price").innerHTML
  };
  console.log(orderData);

  fetch("/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (preference) {
      createCheckoutButton(preference.id);
      document.querySelector(".shopping-cart").fadeOut(500);
      setTimeout(() => {
        document.querySelector(".container_payment").show(500).fadeIn();
      }, 500);
    })
    .catch(function () {
      alert("Unexpected error");
      // document.getElementById("#checkout-btn").attr("disabled", false)
    });
  
}

//Create preference when click on checkout button
function createCheckoutButton(preference) {
  var script = document.createElement("script");
  
//   // The source domain must be completed according to the site for which you are integrating.
//   // For example: for Argentina ".com.ar" or for Brazil ".com.br".
  script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  script.type = "text/javascript";
  script.dataset.preferenceId = preference;
  document.getElementById("button-checkout").innerHTML = "";
  document.querySelector("#button-checkout").appendChild(script);
}


//Handle price update

function updatePrice() {
  let quantity = document.getElementById("quantity").value;
  let unitPrice = document.getElementById("unit-price").innerHTML;
  let amount = parseInt(unitPrice) * parseInt(quantity)
  console.log(amount, unitPrice, quantity)
  document.getElementById("cart-total").innerHTML = "$ " + amount;
  document.getElementById("summary-price").innerHTML = "$ " + unitPrice;
  document.getElementById("summary-quantity").innerHTML = quantity;
  document.getElementById("summary-total").innerHTML = "$ " + amount;
}   
//document.getElementById("quantity").addEventListener("change", updatePrice);
//updatePrice();

function handleBack(){
  document.querySelector(".container_payment").fadeOut(500);
  setTimeout(() => {
    document.querySelector(".shopping-cart").show(500).fadeIn();
  }, 500);
  document.querySelector("#checkout-btn").attr("disabled", false);
}

