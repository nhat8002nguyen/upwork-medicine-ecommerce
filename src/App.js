import * as React from "react";

export default function App(props) {
  const windowWith = window?.innerWidth
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="flex w-full flex-col items-center gap-3 pt-3.5 max-md:max-w-full bg-gradient-to-r from-[#52924F] to-[#6EC569] md:pl-6 md:pr-6">
        <div className="self-stretch flex items-center justify-between gap-2 mx-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="hidden md:block w-12 h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

            <div className="text-white text-2xl font-semibold leading-6 tracking-tight self-center my-auto">
              MEDICINES
            </div>
          </div>

          <div className="justify-between items-center border border-[color:var(--Light-Gray-Light-Gray-2,#DDE2E4)] bg-white flex gap-5 pl-4 pr-2 py-2 rounded-md border-solid self-start max-md:max-w-full max-md:flex-wrap ">
            <div className="text-neutral-400 text-sm leading-6 tracking-normal xl:w-[40rem] lg:w-[20rem] my-auto">
              Search medicines
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="cursor-pointer w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </div>
          <div className="flex gap-10">
            <div className="cursor-pointer items-stretch self-center flex gap-2 my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              <div className="text-white text-lg leading-6 tracking-normal">
                Orders
              </div>
            </div>
            <div className="cursor-pointer self-center flex gap-2 my-auto items-end">
              <div class="relative inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  3
                </span>
              </div>
              <div className="text-white text-lg leading-6 tracking-normal self-stretch grow whitespace-nowrap">
                Cart
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-center text-md leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Light-Gray-Light-Gray-2,#DDE2E4)] bg-white justify-center px-4 py-2 rounded-md border-solid self-start cursor-pointer">
            Sign In
          </div>
        </div>
        <div className="flex md:w-[80%] max-w-full items-center justify-center gap-10 mt-3.5 md:px-5 sm:px-3 max-md:flex-wrap">
          <div className="cursor-pointer text-white text-center text-lg font-bold leading-6 tracking-normal my-auto">
            DOCTOR CONSULTATION
          </div>
          <div className="cursor-pointer text-white text-center text-lg font-bold leading-6 tracking-normal">
            TREATMENTS
          </div>
          <div className="cursor-pointer underline text-white text-center text-lg font-bold leading-6 tracking-normal self-stretch">
            MEDICINES
          </div>
        </div>
        <div className="bg-gray-200 self-stretch flex min-h-[1px] w-full flex-col mt-4 max-md:max-w-full" />
      </div>
      <div className="self-center w-full max-w-[1240px] mt-10 mb-7 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:gap-0">
          {windowWith <= 1024 ? <CategoryBar /> :
            <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-1.5 px-5 max-md:mt-9">
                <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal">
                  Shop By Manufacturer
                </div>
                <CategoryItem name={"Vaidyaratnam"} isChecked={true} />
                <CategoryItem name={"AVP"} />
                <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal mt-4">
                  Shop By Medicines
                </div>
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal mt-4">
                  Shop By Category
                </div>
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
                <CategoryItem name={"Capsules & Tablets"} />
              </div>
            </div>}
          <div className="flex flex-col items-stretch max-lg:w-[77%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col max-md:max-w-full max-md:mt-7">
              <div className="self-stretch mt-6 px-5 max-md:max-w-full">
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                </div>
              </div>
              <div className="self-stretch mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                    description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                    price={'$599'} />
                </div>
              </div>
              <div className="self-stretch mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                    title={"Gulguluthikthakam Kashayam Tablet 10’S"}
                    description={"An Ayurvedic Tablet with multiple systemic benefits!\nAVP…"}
                    price={'$599'}
                  />
                </div>
              </div>
              <div className="cursor-pointer text-stone-950 text-sm font-semibold leading-6 tracking-normal whitespace-nowrap border bg-white self-center justify-center items-stretch mt-6 px-6 py-2.5 rounded-md border-solid border-green-400 max-md:px-5">
                Load more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryBar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay and category list container */}
      <div className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-50 `} onClick={togglePopup}>
        {/* Overlay */}
        <div className="bg-black opacity-50 w-full h-full" onClick={togglePopup}></div>

        {/* Actual category list */}
        <div className="bg-white w-64 h-full shadow-xl p-4 absolute left-0 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}">
          {/* Close button inside the popup */}
          <button className="absolute top-0 right-0 mt-3 mr-3" onClick={togglePopup}>
            {/* Include SVG for X icon here */}
          </button>

          {/* Category Content */}
          <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-1.5 px-5 max-md:mt-9">
              <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal">
                Shop By Manufacturer
              </div>
              <CategoryItem name={"Vaidyaratnam"} isChecked={true} />
              <CategoryItem name={"AVP"} />
              <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal mt-4">
                Shop By Medicines
              </div>
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <div className="text-gray-800 text-sm font-semibold leading-6 tracking-normal mt-4">
                Shop By Category
              </div>
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
            </div>
          </div>
          {/* Category items */}
        </div>
      </div>

      {/* Category bar expand icon */}
      <button className="fixed right-4 bottom-4 z-50 xl:hidden" onClick={togglePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>

      </button>
    </>
  );
}

const CategoryItem = ({ name, isChecked = false, onClick }) => {
  return (
    <div className="items-center flex justify-between gap-2 mt-1.5">
      <div
        className={`cursor-pointer rounded border ${isChecked ? 'border-blue-500' : 'border-gray-400'} bg-slate-50 flex w-4 shrink-0 h-4 flex-col my-auto`}
        onClick={() => onClick && onClick()}
      >
        {/* Optional: Include a checkmark or some content when the div is checked */}
        {isChecked && (
          <svg className="w-full h-full fill-current text-blue-500" viewBox="0 0 20 20">
            {/* This is a checkmark SVG path */}
            <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
          </svg>
        )}
      </div>
      <div className="text-gray-800 text-sm leading-6 tracking-normal self-stretch grow whitespace-nowrap">
        {name}
      </div>
    </div>
  )
}

const Card = ({ image_src, title, description, price }) => {
  return (
    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
      <div className="border border-[color:var(--Light-Gray-Light-Gray-3,#E5E9EB)] bg-white flex w-full grow flex-col items-stretch mx-auto pl-6 pb-3.5 border-solid max-md:pl-5">
        <div className="flex items-stretch justify-between gap-0">
          <img
            loading="lazy"
            srcSet={image_src}
            className="cursor-pointer aspect-square object-contain object-center w-full overflow-hidden grow basis-[0%]"
          />
          <div className="flex basis-[0%] flex-col items-center mt-2 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69fd2d7a1aef5717b01eb3cf1351490a89fc287e1f642cf4e68adb37b207ca6a?apiKey=7b88b562a25d48f4a13544f631a99bf0&"
              className="aspect-[1.13] object-contain object-center w-9 justify-center items-center overflow-hidden"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc14d3f8e4ce163bf1de5670d31a6c55f558cc4ca01a373f4aa72e6634f22d3?apiKey=7b88b562a25d48f4a13544f631a99bf0&"
              className="aspect-[1.13] object-contain object-center w-9 justify-center items-center overflow-hidden"
            />
          </div>
        </div>
        <div className="cursor-pointer text-gray-800 text-xl leading-6 tracking-normal mt-1">
          {title}
        </div>
        <div className="cursor-pointer text-gray-800 text-sm leading-6 tracking-normal mt-3">
          {description}
        </div>
        <div className="flex items-center justify-between gap-5 mt-3 pr-7 max-md:pr-5">
          <div className="text-gray-800 text-lg font-semibold leading-6 tracking-tight my-auto">
            {price}
          </div>
          <div className="cursor-pointer text-white text-sm font-semibold leading-6 tracking-normal whitespace-nowrap bg-[#66B662] self-stretch justify-center items-stretch px-5 py-2.5 rounded-md max-md:pr-5">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}
