import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BookingApp = () => {
  const [view, setView] = useState("home");
  const [appointments, setAppointments] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const availableDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const handleBooking = () => {
    if (selectedDay && selectedTime && email) {
      setAppointments([...appointments, { day: selectedDay, time: selectedTime, email, extraInfo }]);
      alert("Booking confirmed! We will contact you soon.");
      setSelectedDay("");
      setSelectedTime("");
      setEmail("");
      setExtraInfo("");
    } else {
      alert("Please select a day, time, and enter your email.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {view === "home" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <Button className="w-full mb-2" onClick={() => setView("book")}>Book Your Class</Button>
          <Button className="w-full mb-2" onClick={() => setView("contact")}>Contact Me</Button>
          <Button className="w-full mb-2" onClick={() => setView("updates")}>Daily Learning Videos</Button>
          <Button className="w-full mb-2" onClick={() => setView("info")}>All Basic You Need to Know</Button>
          <Button className="w-full mb-2" onClick={() => setView("books")}>Books, eBooks, Audio Books, and Games</Button>
        </div>
      )}

      {view === "updates" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Daily Learning Videos</h1>
          <video controls className="w-full rounded shadow">
            <source src="/mnt/data/No%20es%20fellow%20COMPLETE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button className="w-full mt-4" onClick={() => setView("home")}>Back to Home</Button>
        </div>
      )}
    </div>
  );
};

export default BookingApp;
