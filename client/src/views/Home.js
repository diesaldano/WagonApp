import data from "../data";
import HeroImage from '../components/HeroImage'
import './home.css'

function InitPage() {
  return (
    <div>
      
      <HeroImage />
      <div class="flex flex-row my-10" style={{ height: '50vh'}}>
        <div class="w-1/3 my-auto">
        <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{backgroundImage: "url("+"https://dummyimage.com/1200X1200/ebebeb/450dde"+")"}}>
          <div class="md:w-1/2">
            <p class="font-bold text-sm uppercase">Services</p>
            <p class="text-3xl font-bold">Multimedia products</p>
            <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
            <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
            </div>  
        </div>
        </div>
        <div class="w-2/3">
            {/* Slider of products */}
            <div class="w-full bg-white rounded overflow-x-hidden flex snap-x vh-slider h-full">
              <div
                class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
                id="slide-1"
              >
                <img
                  src={data[0].slider.uno}
                  class="h-full w-full object-cover absolute inset-0 z-10 opacity-50"
                />
                <h1 class="z-20 text-center">{data[0].textslider.uno}</h1>
              </div>
              <div
                class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
                id="slide-2"
              >
                <img
                  src={data[0].slider.dos}
                  class="h-full w-full object-cover absolute inset-0 z-10 opacity-70"
                />
                <h1 class="z-20 text-center">{data[0].textslider.dos}</h1>
              </div>
              <div
                class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
                id="slide-3"
              >
                <img
                  src={data[0].slider.tres}
                  class="h-full w-full object-cover absolute inset-0 z-10 opacity-70"
                />
                <h1 class="z-20 text-center">{data[0].textslider.tres}</h1>
              </div>
              <div
                class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
                id="slide-4"
              >
                <img
                  src={data[0].slider.cuatro}
                  class="h-full w-full object-cover absolute inset-0 z-10 opacity-25"
                />
                <h1 class="z-20 text-center">{data[0].textslider.cuatro}</h1>
              </div>
            </div>

            {/* <div class="flex mt-8">
              <a
                class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
                href="#slide-1"
              >
                <button
                  id="Button1"
                  onClick="sliderButton1()"
                  class="bg-red-600 rounded-full w-4 p-2 "
                ></button>
              </a>
              <a
                class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
                href="#slide-2"
              >
                <button
                  id="Button2"
                  onClick="sliderButton2()"
                  class="bg-red-600 rounded-full w-4 p-2 "
                ></button>
              </a>
              <a
                class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
                href="#slide-3"
              >
                <button
                  id="Button3"
                  onClick="sliderButton3()"
                  class="bg-red-600 rounded-full w-4 p-2 "
                ></button>
              </a>
              <a
                class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
                href="#slide-4"
              >
                <button
                  id="Button4"
                  onClick="sliderButton4()"
                  class="bg-red-600 rounded-full w-4 p-2 "
                ></button>
              </a>
            </div> */}
          {/*<div class="grid grid-cols-3 gap-2 h-full	px-2">
             <div class="flex flex-col">
              <div class="w-full max-w-sm my-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url("+"https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"+")"}}>
                      <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      </button>
                  </div>
                  <div class="px-5 py-3">
                      <h3 class="text-gray-700 uppercase">Chanel</h3>
                      <span class="text-gray-500 mt-2">$12</span>
                  </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="w-full max-w-sm my-auto rounded-md shadow-md overflow-hidden">
                    <div class="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url("+"https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"+")"}}>
                        <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                    <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">Chanel</h3>
                        <span class="text-gray-500 mt-2">$12</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
              <div class="w-full max-w-sm my-auto rounded-md shadow-md overflow-hidden">
                    <div class="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url("+"https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"+")"}}>
                        <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                    <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">Chanel</h3>
                        <span class="text-gray-500 mt-2">$12</span>
                    </div>
                </div>
            </div> 
          </div>*/}
        </div>

      </div>
      {/* <div class="grid grid-cols-3">
        <div class="flex flex-col ">
           <span class="flex justify-center">Icono</span>
           <span class="flex justify-center">Envio a todo el pais</span>
        </div>
        <div class="flex flex-col">
        <span class="flex justify-center">Icono</span>
        <span class="flex justify-center">Todos los medios de pago</span>
        </div>
        <div class="flex flex-col">
          <span class="flex justify-center">Icono</span>
          <span class="flex justify-center">Escribinos por wsp</span>
        </div>
      </div> */}
      {/* <section class="container mx-5 mx-auto">
        <div class="flex justify-center">
            <span>icono</span>
            <span>palailas deco</span>
        </div>
        <div class="flex justify-center">
            <button> seguinos</button>
        </div>
        <div class="flex flex-col">
            <h1 class="flex justify-center">Recibi novedades en tu mail</h1>
            <h5 class="flex justify-center">registrate con tu mail para tener mas novedades</h5>
            <input type="email"></input>
            <label name="email" placeholder="email"></label>
            <button>Enviar</button>
        </div> 

      </section>*/}
      {/* <footer class="container mx-5 mx-auto">
        <div class="flex justify-center">
            <span>instagram</span>
            <span>facebook</span>
        </div>
        <ul class="flex justify-center">
            <li>home</li>
            <li>productos</li>
            <li>compra mayorista</li>
            <li>About Palailas deco</li>
        </ul>
        <div class="flex justify-center">
            <span>icono mail</span>
            <span>mail</span>
        </div>
        <div class="flex justify-center">
            <span>imagen medios de pago y mercado pago</span>
        </div>
        <div class="flex justify-center">
            <span>copyright</span>
            <span>desarrollado por</span>
            <span>Todos los derechos reservados</span>
        </div>
      </footer> */}

      
      
    </div>
  );
}

export default InitPage;
