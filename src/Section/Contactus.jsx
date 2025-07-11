import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && message.trim()) {
      const serviceId = "service_d9lndo8";
      const templateId = "template_ker7bjr";
      const publicKey = "rUiP4QK4ZB-MoCT0J";

      const templateParams = {
        from_name: name,
        from_mail: email,
        to_name: "Kishore",
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully", response);
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message. Please try again.");
        });
    } else {
      toast.error("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-700 via-black to-purple-700 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto mt-20 backdrop-blur-sm border border-white/40 mb-5">
      {/* ✅ Toaster for notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <h2 className="text-4xl font-bold text-center text-white mb-10">📬 Contact us</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-extrabold text-amber-500 mb-1">
            Name
          </label>
          <div className="flex items-center bg-black text-white rounded-xl shadow-sm border border-gray-300 px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A12.083 12.083 0 0112 15c2.279 0 4.388.642 6.121 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-extrabold text-amber-500 mb-1">
            Email
          </label>
          <div className="flex items-center bg-black text-white rounded-xl shadow-sm border border-gray-300 px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l-4 4m4-4l4-4m4 8l-4-4 4-4" />
            </svg>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-extrabold text-amber-500 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 bg-black text-white focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black hover:bg-purple-700 text-purple-500 hover:text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
