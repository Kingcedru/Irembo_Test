import React from "react";

export default function BusinessDetails() {
  return (
    <div className="border border-blue-600">
      <h1 className="form-Header bg-blue-400 text-start font-semibold text-blue-800 px-5 py-2">
        Business Details
      </h1>
      <div className="form-group px-5 flex flex-col gap-5 py-5 w-4/6">
        <h2 className="form-title text-start font-semibold">
          Business Details
        </h2>
        <div className="mb-4 flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-state">
              Business type<span className="text-red-500 pl-1">*</span>
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state required">
                <option>Business Type</option>
                <option>Retailer</option>
                <option>Wholesale</option>
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
                Company name <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="company name"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                TIN number<span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="tin number"
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
                Registration date<span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Location<span className="text-red-500 pl-1">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Location"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
