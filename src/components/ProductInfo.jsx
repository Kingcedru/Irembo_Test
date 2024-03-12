import React from "react";

export default function ProductInfo() {
  return (
    <div className="border border-blue-600">
      <h1 className="form-Header bg-blue-400 text-start font-semibold text-blue-800 px-5 py-2">
        Product Information
      </h1>
      <div className="form-group px-5 flex flex-col gap-5 py-5 w-4/6">
        <h2 className="form-title text-start font-semibold">
          Important details
        </h2>
        <div className="mb-4 flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-state">
              Product category<span className="text-red-500 pl-1">*</span>
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state required">
                <option>Select product category</option>
                <option>General purpose</option>
                <option>Construction</option>
                <option>Chemicals</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col ">
              <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                Product name
                <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Product name"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Weight<span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Weight (kgs)"
                required
              />
            </div>
          </div>
          <div className="flex"></div>
          <div className="flex">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Quantity of product
                <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="quantity"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className=" text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-state">
                unit of measurement<span className="text-red-500 pl-1">*</span>
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state required">
                  <option>Enter unit of measurement</option>
                  <option>Kgs</option>
                  <option>tones</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Description of products
                <span className="text-red-500 pl-1">*</span>
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="textArea"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
