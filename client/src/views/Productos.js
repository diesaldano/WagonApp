import Cards from "../components/Cards";
import data from "../data";

function Productos() {
  return (
    <div className="">
      <div
        class="w-full bg-cover bg-center h-1/3"
        style={{
          backgroundImage: `url(${data[0].productos.banner})`,
          height: "25vh"
        }}
      >
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"></div>
      </div>
      <h2 class="text-gray-700 m-5 font-sans text-3xl font-bold leading-5">
        Best Experience
      </h2>
      <h2 class="text-gray-600 m-5 font-sans text-xl font-regular leading-3">
        Discover your trip!
      </h2>
      <div class="relative text-gray-600 lg:hidden">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          class="bg-gray-200 h-10 ml-5 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg
            class="h-4 w-4 fill-current"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      <nav class="m-5 lg:hidden">
        <ul class="flex flex-row justify-between">
          <li>
            <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Chair
            </button>
          </li>
          <li>
            <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Chair
            </button>
          </li>
          <li>
            <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Table
            </button>
          </li>
          <li>
            <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Lair
            </button>
          </li>
          <li>
            <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Floor
            </button>
          </li>
        </ul>
      </nav>

      <Cards />
    </div>
  );
}

export default Productos;
