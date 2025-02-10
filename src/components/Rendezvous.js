import { useState } from "react";
import DeleteIcon from '../images/delete-svgrepo-com.svg';
import DownloadIcon from '../images/edit-3-svgrepo-com.svg';
import CloseIcon from '../images/close-circle-svgrepo-com.svg';

export default function SchedulePage() {
  const [barbers] = useState([
    { id: "1", name: "Barber 1" },
    { id: "2", name: "Barber 2" },
    { id: "3", name: "Barber 3" },
  ]);
  
  const [services] = useState([
    { _id: "1", name: "Haircut" },
    { _id: "2", name: "Shave" },
    { _id: "3", name: "Beard Trim" },
  ]);
  
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 15; hour++) {
      const ampm = hour < 12 ? "AM" : "PM";
      const formattedHour = hour > 12 ? hour - 12 : hour;
      slots.push(`${formattedHour}:00 ${ampm}`);
      slots.push(`${formattedHour}:30 ${ampm}`);
    }
    return slots;
  };

  const handleSubmit = () => {
    console.log(`Appointment: ${selectedService} with ${selectedBarber} on ${selectedDate} at ${selectedTime}`);
    closeModal();
  };

  const closeModal = () => setIsModalOpen(false);

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
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Schedule Appointment</h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          Schedule Appointment
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Your Appointment Details</h2>

              <label className="block mb-2 text-gray-700">Select Barber</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedBarber}
                onChange={(e) => setSelectedBarber(e.target.value)}
              >
                <option value="">Select Barber</option>
                {barbers.map((barber) => (
                  <option key={barber.id} value={barber.name}>{barber.name}</option>
                ))}
              </select>

              <label className="block mb-2 text-gray-700">Select Service</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service._id} value={service.name}>{service.name}</option>
                ))}
              </select>

              <label className="block mb-2 text-gray-700">Select Date</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              <label className="block mb-2 text-gray-700">Select From</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {generateTimeSlots().map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
                
              <label className="block mb-2 text-gray-700">Select To</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {generateTimeSlots().map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>

              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-800 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700 focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900 focus:ring-2 focus:ring-blue-400"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
