import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";
import {
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "", // Honeypot field
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check
    if (form.botField && form.botField.trim() !== "") {
      console.warn("Bot submission blocked.");
      return;
    }

    // 2. Trim inputs
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    // 3. Validation patterns
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !nameRegex.test(name)) {
      Swal.fire({ icon: "error", title: "Invalid Name", text: "Name must be 3–50 letters only." });
      return;
    }
    if (!email || !emailRegex.test(email)) {
      Swal.fire({ icon: "error", title: "Invalid Email", text: "Enter a valid email address." });
      return;
    }
    if (!subject || subject.length < 3 || subject.length > 100) {
      Swal.fire({ icon: "error", title: "Invalid Subject", text: "Subject must be 3–100 characters." });
      return;
    }
    if (!message || message.length < 10 || message.length > 1000) {
      Swal.fire({ icon: "error", title: "Invalid Message", text: "Message must be between 10–1000 characters." });
      return;
    }
    if (/<script.*?>.*?<\/script>/gi.test(message)) {
      Swal.fire({ icon: "error", title: "Invalid Content", text: "HTML or script tags are not allowed." });
      return;
    }

    // 4. Passed all checks → Send email
    setLoading(true);
    emailjs
      .send(
        "service_bgil5hd",
        "template_vtc095g",
        {
          name,
          to_name: "Aakash Kasturiya",
          from_email: email,
          subject,
          message,
          time: new Date().toLocaleString(),
        },
        "V1GTJPSJ0XZ1hkHj2"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Thank you. I will get back to you soon.",
            confirmButtonColor: "#6b4bff",
          });
          setForm({ name: "", email: "", subject: "", message: "", botField: "" });
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#6b4bff",
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">Get In</span> Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6b4bff33] rounded-md mr-4">
                  <IoIosMail className="text-xl text-[#6b4bff]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-300">aakashkasturiya@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6b4bff33] rounded-md mr-4">
                  <FaMapMarkerAlt className="text-xl text-[#6b4bff]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-300">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6b4bff33] rounded-md mr-4">
                  <IoTimeSharp className="text-xl text-[#6b4bff]" />
                </div>
                <div>
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-gray-300">Monday - Friday, 9AM - 6PM IST</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-[#ffffff33] rounded-md">
                <TiSocialLinkedin className="text-3xl text-[#6B4BFF]" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-[#ffffff33] rounded-md">
                <TiSocialYoutube className="text-3xl text-[#6B4BFF]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-[#ffffff33] rounded-md">
                <TiSocialGithub className="text-3xl text-[#6B4BFF]" />
              </a>
              <a href="https://instagram.com" target="_blank" className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-[#ffffff33] rounded-md">
                <SlSocialInstagram className="text-3xl text-[#6B4BFF]" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg glow-border">
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Honeypot Field - hidden */}
              <div style={{ position: "absolute", left: "-9999px" }}>
                <label htmlFor="botField">Leave this empty</label>
                <input
                  type="text"
                  name="botField"
                  value={form.botField}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex="-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-md text-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-md text-white"
                  placeholder="abc@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-md text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-md text-white"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 bg-[#6b4bff] hover:bg-opacity-80 text-white font-medium rounded-md"
              >
                {loading ? "Sending..." : "Send Message"}
                <IoIosSend className="ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
