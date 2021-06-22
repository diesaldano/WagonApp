import data from "../data";
import "../components/slider.css";
function Slider() {
  console.log(data);
  return (
    <div class="flex flex-col items-center my-2">
      <div class="w-full bg-white rounded overflow-x-hidden flex snap-x vh-slider">
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

      <div class="flex mt-8">
        <a
          class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-1"
        >
          <button
            id="Button1"
            onclick="sliderButton1()"
            class="bg-red-600 rounded-full w-4 p-2 "
          ></button>
        </a>
        <a
          class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-2"
        >
          <button
            id="Button2"
            onclick="sliderButton2()"
            class="bg-red-600 rounded-full w-4 p-2 "
          ></button>
        </a>
        <a
          class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-3"
        >
          <button
            id="Button3"
            onclick="sliderButton3()"
            class="bg-red-600 rounded-full w-4 p-2 "
          ></button>
        </a>
        <a
          class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-4"
        >
          <button
            id="Button4"
            onclick="sliderButton4()"
            class="bg-red-600 rounded-full w-4 p-2 "
          ></button>
        </a>
      </div>
    </div>
  );
}

export default Slider;
