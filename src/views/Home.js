import data from "../data";
import Slider from "../components/slider";
function InitPage() {
  return (
    <div>
      <Slider />
      <h2 class="text-center	text-2xl	font-light font-bold">{data[0].title}</h2>
      <p class="text-gray-600 text-center font-light mb-5 mx-5">
        {data[0].subtitle}
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center w-100">
        <div class="lg:w-1/4 md:w-1/3 rounded-md sm:w-1/3">
          <a
            href="/productos"
            class=" flex items-center mx-auto justify-center px-4 py-1 border border-transparent text-base font-medium  rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 sm:text-sm"
          >
            {data[0].button}
          </a>
        </div>
      </div>
    </div>
  );
}

export default InitPage;
