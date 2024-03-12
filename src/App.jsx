import { useState } from "react";
import "./App.css";

function App() {
  const [citizenship, setCitiziship] = useState();
  const [Identification, setidentification] = useState();
  const [passport, setPassport] = useState();
  const [nationality, setNationality] = useState();
  const [surname, setSurname] = useState();
  const [othername, setOtherName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [Location, setLocation] = useState();

  const handleSubmit = () => {
    console.log(
      citizenship,
      surname,
      othername,
      nationality,
      phone,
      email,
      Location
    );
  };
  return (
    <div className="flex flex-col gap-10 m-20 w-5/6 shadow-2xl px-2 py-5">
      <form>
        {/* Business Owner*/}
        <div className="border border-blue-600">
          <h1 className="form-Header bg-blue-400 text-start font-semibold text-blue-800 px-5 py-2">
            Business Owner Details
          </h1>
          <div className="form-group px-5 flex flex-col gap-5 py-5 w-4/6">
            <h2 className="form-title text-start font-semibold">
              Business Owner Details
            </h2>
            <div className="mb-4 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  className=" text-gray-700 text-sm font-bold mb-2"
                  htmlFor="grid-state">
                  Applicant citizenship
                  <span className="text-red-500 pl-1">*</span>
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => setCitiziship(e.target.value)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state required">
                    <option value="">Select citizenship</option>
                    <option value="Rwandan">Rwandan</option>
                    <option value="Foreigner">Foreigner</option>
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
                    Identification document number
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <input
                    onChange={(e) => setidentification(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Identification document number"
                    required
                  />
                </div>
                <div className="flex flex-col ">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name">
                    passport number
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <input
                    onChange={(e) => setPassport(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="passport number"
                    required
                  />
                </div>
                {citizenship !== "Rwandan" || citizenship == "" ? (
                  <div className="flex flex-col ">
                    <label
                      className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name">
                      Nationality<span className="text-red-500 pl-1">*</span>
                    </label>
                    <input
                      onChange={(e) => setNationality(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Nationality"
                      required
                    />
                  </div>
                ) : null}
              </div>
              {citizenship !== "Rwandan" ? (
                <div className="flex">
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name">
                      Surnames<span className="text-red-500 pl-1">*</span>
                    </label>
                    <input
                      onChange={(e) => setSurname(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Surname"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name">
                      Other names<span className="text-red-500 pl-1">*</span>
                    </label>
                    <input
                      onChange={(e) => setOtherName(e.target.value)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Other names"
                      required
                    />
                  </div>
                </div>
              ) : null}
              <div className="flex justify-between">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state">
                    Phone number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                      </svg>
                    </div>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      id="phone-input"
                      aria-describedby="helper-text-explanation"
                      className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 block ps-10 p-2.5 "
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 ">
                    Email address
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="john@gmail.com"
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
                    onChange={(e) => setLocation(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="District location"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    Registration date
                    <span className="text-red-500 pl-1">*</span>
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
        {/* Product information*/}
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
                    unit of measurement
                    <span className="text-red-500 pl-1">*</span>
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
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-1/6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
