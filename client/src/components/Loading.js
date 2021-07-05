
// import './Skeleton.css';

import React from 'react';

const Skeleton = (props) => {
	console.log(props)
  return (
		<div
		class="px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 py-5 "
		style={{ backgroundColor: "#e2e8f0" }}
	>
		{props.data.map(data =>{
			return(
				<div key={data.id} class="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
							{/* <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div> */}
							<div class="flex flex-col flex-1 pb-5 sm:p-2">
								<div class="bg-gray-200 w-full animate-pulse h-screen" >					
								</div>
								<div class="flex flex-1 flex-col gap-3">
									<div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
									<div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
								</div>
								<div class="mt-auto pt-5 flex gap-3">
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
								</div>
							</div>
				</div> 
			)
		})}
	</div>
  );
};

export default Skeleton;