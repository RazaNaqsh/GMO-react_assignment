import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <div className="w-[40vw] p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Fill out the form:</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
