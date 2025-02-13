import { useEffect, useState } from "react";
import DeleteIcon from '../images/delete-svgrepo-com.svg';
import DownloadIcon from '../images/edit-3-svgrepo-com.svg';
import CloseIcon from '../images/close-circle-svgrepo-com.svg';
import axios from "axios";

export default function Servicesdash() {
  const [services, set_services] = useState([
    { _id: "1", name: "Service 1" },
    { _id: "2", name: "Service 2" },
    { _id: "3", name: "Service 3" },
  ]);
  async function get_services(){
  //  try {
  //    const response = await axios.get(`${`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/services`}`, { withCredentials: true });
  //    console.log("S",response.data);
     
  //    set_services(response.data);
  //  }
  try {
    const response = await axios.get(`${`http://api.auth.localhost/services`}`, { withCredentials: true });
    console.log("S",response.data);
    
    set_services(response.data);
  }catch (error) {
     console.error("Error fetching employees:", error);
   }
 };
  useEffect(()=>{
    get_services()
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [editedName, setEditedName] = useState("");

  const openEditModal = (service) => {
    setSelectedService(service);
    setEditedName(service.name);
    setIsModalOpen(true);
  };

  const openAddServiceModal = () => {
    setEditedName("");
    setIsAddServiceModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddServiceModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="p-6 relative">
      <div className="absolute inset-0">
        <img
          className="brightness-75 grayscale object-cover h-[100vh] object-left-bottom w-full"
          src="https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-3.jpg"
          alt="Background"
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Services List</h2>

        <button
          onClick={openAddServiceModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          Add Service
        </button>

        <div className="overflow-x-auto border rounded-md border-gray-300 shadow-md">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-center bg-red-800 text-white">
                <th className="w-1/6 py-4 px-3 text-lg font-medium">ID</th>
                <th className="w-1/6 py-4 px-3 text-lg font-medium">Name</th>
                <th className="w-1/6 py-4 px-3 text-lg font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white/50">
              {services.map((service) => (
                <tr
                  key={service._id}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="text-center py-4 px-3 text-base font-medium">
                    {service._id}
                  </td>
                  <td className="text-center py-4 px-3 text-base font-medium">
                    {service.name}
                  </td>
                  <td className="text-center py-4 px-3 flex justify-center items-center">
                    <a
                      onClick={() => openEditModal(service)}
                      className="inline-block px-6 py-2.5 font-medium transition-colors"
                    >
                      <img
                        src={DownloadIcon}
                        alt="Edit"
                        className="w-6 h-6 text-green-500 cursor-pointer"
                      />
                    </a>
                    <a 
                      onClick={()=>{
                        // const API_URL = "http://localhost:5050/services"; 
                        const API_URL = "http://api.auth.localhost/services"; 
                        const handleEditEmployee = async () => {
                          try {
                            await axios.delete(
                              API_URL+'/'+service._id,
                              { withCredentials: true }
                            );
                            get_services(); 
                            setIsModalOpen(false);
                          } catch (error) {
                            console.error("Error editing employee:", error);
                          }
                        };
                        handleEditEmployee()
                      }}
                      className="inline-block px-6 py-2.5 font-medium transition-colors ml-2"
                    >
                      <img
                        src={DeleteIcon}
                        alt="Delete"
                        className="w-10 h-8 text-red-500 cursor-pointer"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Service</h2>

              <label className="block mb-2 text-gray-700">Service Name</label>
              <input
                type="text"
                className="w-full p-2 border border-red-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-600 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500 focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={()=>{
                    // const API_URL = "http://localhost:5050/services"; 
                    const API_URL = "http://api.auth.localhost/services"; 
                    const handleEditEmployee = async () => {
                      try {
                        await axios.put(
                          API_URL,
                          { _id: selectedService._id, name: editedName },
                          { withCredentials: true }
                        );
                        get_services(); 
                        setIsModalOpen(false);
                      } catch (error) {
                        console.error("Error editing employee:", error);
                      }
                    };
                    handleEditEmployee()
                  }}
                  className="bg-green-800 text-white px-4 py-2 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {isAddServiceModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-md mx-auto mt-24">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Add Service</h2>
              </div>

              <div className="flex flex-col space-y-5">
                <input
                  type="text"
                  placeholder="Enter service name"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg font-medium placeholder:font-normal"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />

                <div className="flex justify-between space-x-2">
                  <button
                    onClick={closeModal}
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-gray-300 text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      async function get_services(){
                        // try {
                        //   const response = await axios.post(
                        //     `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/services`,
                        //     { name: editedName },
                        //     { withCredentials: true }
                        //   );
                        //   set_services((prev)=>([...prev, response.data]));
                        // }
                        try {
                          const response = await axios.post(
                            `http://api.auth.localhost/services`,
                            { name: editedName },
                            { withCredentials: true }
                          );
                          set_services((prev)=>([...prev, response.data]));
                        } catch (error) {
                          console.error("Error fetching employees:", error);
                        }
                      };
                      get_services()
                      closeModal();
                    }}
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
