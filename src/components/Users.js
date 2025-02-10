import { useState } from "react";
import DeleteIcon from '../images/delete-svgrepo-com.svg';
import DownloadIcon from '../images/edit-3-svgrepo-com.svg';
import CloseIcon from '../images/close-circle-svgrepo-com.svg'

export default function Users() {
  const [users] = useState([
    { id: 1, email: "user1@example.com", password: "******" },
    { id: 2, email: "user2@example.com", password: "******" },
    { id: 3, email: "user3@example.com", password: "******" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditedEmail(user.email);
    setEditedPassword("");
    setIsModalOpen(true);
  };

  const openAddUserModal = () => {
    setEditedEmail("");
    setEditedPassword("");
    setIsAddUserModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddUserModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Users List</h2>

      <button
        onClick={openAddUserModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      >
        Add User
      </button>

      <div className="overflow-x-auto border rounded-md border-gray-300 shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-center bg-red-800 text-white">
              <th className="w-1/6 py-4 px-3 text-lg font-medium">ID</th>
              <th className="w-1/6 py-4 px-3 text-lg font-medium">Email</th>
              <th className="w-1/6 py-4 px-3 text-lg font-medium">Password</th>
              <th className="w-1/6 py-4 px-3 text-lg font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="text-center py-4 px-3 text-base font-medium">
                  {user.id}
                </td>
                <td className="text-center py-4 px-3 text-base font-medium">
                  {user.email}
                </td>
                <td className="text-center py-4 px-3 text-base font-medium">
                  {user.password}
                </td>
                <td className="text-center py-4 px-3 flex justify-center items-center">
                  <a
                    onClick={() => openEditModal(user)}
                    className="inline-block px-6 py-2.5 font-medium transition-colors"
                  >
                    <img
                      src={DownloadIcon}
                      alt="Edit"
                      className="w-6 h-6 text-green-500 cursor-pointer"
                    />
                  </a>
                  <a
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
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit User</h2>

            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-red-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />

            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-red-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
              placeholder="New password"
            />

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500 focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                className="bg-green-800 text-white px-4 py-2 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddUserModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-md mx-auto mt-24">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Add User</h2>
            </div>

            <div className="flex flex-col space-y-5">
              <input
                type="email"
                placeholder="Enter email"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg font-medium placeholder:font-normal"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter password"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg font-medium placeholder:font-normal"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
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
  );
}
