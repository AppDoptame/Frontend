import React, { ReactNode, useState } from "react";
import "./styles.css";
import Image from "next/image";
import {
  FaHouse,
  FaUser,
  FaMagnifyingGlass,
  FaDog,
  FaRightFromBracket,
  FaGear,
  FaBars,
  FaPlus,
  FaRocketchat,
} from "react-icons/fa6";
import Link from "next/link";
import ChatComponent from "../chat/Chat";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    age: string;
    vaccines: string[];
    race: string;
  }>({
    email: "",
    name: "",
    age: "",
    vaccines: [],
    race: "",
  });

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/create-pet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Pet added successfully");
        closeModal();
      } else {
        alert("Error adding pet: " + data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("There was an error: " + error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  const openChat = () => {
    setShowChat(true);
  };

  return (
    <>
      <div className={`sidebar-container`}>
        <div className="image-container">
          <Image
            src="/AppDoptame/logo_transparent_orange_long.png"
            width={150}
            height={55}
            alt=""
          />
        </div>
        {/* <button className="button-34" onClick={() => openModal("post")}>
          Add Post
        </button> */}
        <>
          <div className="sidebar-ul-container">
            <Link href="/home">
              <FaHouse style={{ fontSize: "3rem", color: "var(--orange)" }} />
              <span>Home</span>
            </Link>
            <Link href="/pets">
              <FaDog style={{ fontSize: "3rem", color: "var(--orange)" }} />
              <span>Pets</span>
            </Link>
            <button className="add-pet-btn" onClick={() => openModal("pet")}>
              <FaPlus style={{ fontSize: "3rem", color: "var(--orange)" }} />
              <span>Add Pet</span>
            </button>
            <button className="chatbot-btn" onClick={() => openChat()}>
              <FaRocketchat
                style={{ fontSize: "3rem", color: "var(--orange)" }}
              />
              <span>ChatBot</span>
            </button>

            <Link href="/profile">
              <FaUser style={{ fontSize: "3rem", color: "var(--orange)" }} />
              <span>Profile</span>
            </Link>
          </div>

          <div className="bottom-icons">
            <FaRightFromBracket size={24} />
            <FaGear size={24} />
          </div>
        </>
      </div>
      <ChatComponent showChat={showChat} closeChat={() => setShowChat(false)} />

      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            {modalType === "pet" ? (
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Name:
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </label>
                <label>
                  Vaccines:
                  <input
                    type="text"
                    value={formData.vaccines}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        vaccines: e.target.value.split(","),
                      })
                    }
                    placeholder="Separate vaccines with commas"
                  />
                </label>
                <label>
                  Race:
                  <input
                    type="text"
                    value={formData.race}
                    onChange={(e) =>
                      setFormData({ ...formData, race: e.target.value })
                    }
                  />
                </label>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            ) : (
              <div>
                {/* Post Form Goes Here */}
                <h2>Add Post Form</h2>
                {/* ... other form fields ... */}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
