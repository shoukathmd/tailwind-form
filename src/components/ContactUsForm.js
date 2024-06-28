import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "General Enquiry",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.consent) {
      newErrors.consent = "You must consent to being contacted";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <div className="bg-white">
        <form
          onSubmit={handleSubmit}
          className="grid grid-rows-7 grid-cols-2 gap-x-4 bg-white p-8 border auto-rows-auto"
        >
          <h1 className="col-span-2 text-3xl font-bold">Contact Us</h1>
          <div className="col-span-1 flex flex-col">
            <label className="col-span-1 text-xs">First Name :</label>
            <input
              className="border-solid border border-gray-100 rounded-md py-2 cursor-pointer"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="text-red-400">{errors.firstName}</span>
            )}
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="col-span-1 text-xs">Last Name :</label>
            <input
              className="border-solid border border-gray-100 rounded-md py-2 cursor-pointer"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="col-span-2 text-xs">Email Address :</label>
            <input
              className="border-solid border border-gray-100 rounded-md py-2 cursor-pointer"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <fieldset className="col-span-2">
            <div className="grid grid-rows-1 grid-cols-2 gap-2 auto-rows-auto">
              <label className="col-span-2 text-xs row-height-1">
                Query Type :
              </label>
              <div className="col-span-1 border-solid border border-gray rounded-md p-2 hover:bg-green-300">
                <input
                  id="GeneralEnquiry"
                  className="peer/draft"
                  type="radio"
                  name="queryType"
                  value="General Enquiry"
                  checked={formData.queryType === "General Enquiry"}
                  onChange={handleChange}
                />
                <label
                  htmlFor="GeneralEnquiry"
                  className="peer-checked/draft:text-sky-500"
                >
                  General Enquiry
                </label>
              </div>
              <div className="col-span-1 border-solid border border-gray rounded-md p-2 hover:bg-green-300">
                <input
                  id="SupportRequest"
                  className="peer/published"
                  type="radio"
                  name="queryType"
                  value="Support Request"
                  checked={formData.queryType === "Support Request"}
                  onChange={handleChange}
                />
                <label
                  htmlFor="SupportRequest"
                  className="peer-checked/published:text-sky-500"
                >
                  Support Request
                </label>
              </div>
              {errors.consent && (
                <span className="text-red-600">{errors.consent}</span>
              )}
            </div>
          </fieldset>
          <fieldset className="col-span-2 flex flex-col">
            <label className="col-span-2 text-xs">Message :</label>
            <textarea
              className="border-solid border border-gray-100 rounded-md cursor-pointer"
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </fieldset>
          <div className="col-span-2 py-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label>I consent to being contacted by the team</label>
          </div>
          <button
            type="submit"
            className="col-span-2 bg-green-600 rounded-lg hover:shadow-2xl hover:bg-green-700"
          >
            Submit
          </button>
        </form>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Mohammed Shoukath Ali</a>.
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
