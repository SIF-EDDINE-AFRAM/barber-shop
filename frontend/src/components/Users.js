import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "../images/delete-svgrepo-com.svg";
import EditIcon from "../images/edit-3-svgrepo-com.svg";

export default function Users() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [newName, setNewName] = useState("");

  // const API_URL = "http://localhost:5050/employees"; 
  const API_URL = "http://api.auth.localhost/employees"; 

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL, { withCredentials: true });
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Edit employee
  const handleEditEmployee = async () => {
    try {
      await axios.put(
        API_URL,
        { _id: selectedEmployee._id, name: editedName },
        { withCredentials: true }
      );
      fetchEmployees(); 
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error editing employee:", error);
    }
  };

  // Delete employee
  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
      fetchEmployees(); 
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Add employee
  const handleAddEmployee = async () => {
    try {
      await axios.post(
        API_URL,
        { name: newName },
        { withCredentials: true }
      );
      fetchEmployees();
      setIsAddModalOpen(false);
      setNewName("");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  // Open edit modal
  const openEditModal = (employee) => {
    setSelectedEmployee(employee);
    setEditedName(employee.name);
    setIsModalOpen(true);
  };

  // Close modals
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Employees List</h2>
      <button 
        onClick={() => setIsAddModalOpen(true)} 
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
      <div className="overflow-x-auto border rounded-md border-gray-300 shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-center bg-red-800 text-white">
              <th className="py-4 px-3 text-lg font-medium">ID</th>
              <th className="py-4 px-3 text-lg font-medium">Name</th>
              <th className="py-4 px-3 text-lg font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id} className="border-b hover:bg-gray-100">
                <td className="text-center py-4 px-3">{employee._id}</td>
                <td className="text-center py-4 px-3">{employee.name}</td>
                <td className="text-center py-4 px-3 flex justify-center items-center">
                  <button onClick={() => openEditModal(employee)} className="px-3">
                    <img src={EditIcon} alt="Edit" className="w-6 h-6 cursor-pointer" />
                  </button>
                  <button onClick={() => handleDeleteEmployee(employee._id)} className="px-3">
                    <img src={DeleteIcon} alt="Delete" className="w-6 h-6 cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Employee Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Employee</h2>
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <div className="flex justify-end">
              <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">
                Cancel
              </button>
              <button onClick={handleEditEmployee} className="bg-green-800 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Employee</h2>
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="flex justify-end">
              <button onClick={closeAddModal} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">
                Cancel
              </button>
              <button onClick={handleAddEmployee} className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
