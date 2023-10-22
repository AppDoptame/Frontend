import React, { ReactNode, useState } from "react";
import Image from "next/image";

import "./styles.css";
import mail from "../../../public/mail.svg";
import bell from "../../../public/bell.svg";
import circle from "../../../public/circle.svg";

interface DashboardProps {
  children: ReactNode;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <section>
      <nav className="flex justify-between header-bar ">
        <div className="flex align-center gap-10">
          <Image
            src="/AppDoptame/logo_transparent_orange_long.png"
            width={150}
            height={55}
            alt=""
          />
        </div>

        <div className="flex align-center gap-20">
          <Image src={mail} width="30" height="28" alt="Mail Logo" />
          <Image src={bell} width="25" height="25" alt="Notifications Logo" />
          <Image src={circle} width="40" height="25" alt="Profile picture" />
        </div>
      </nav>
      <div className="container">
        <aside className="lateral-navigation">
          <button className="button-34" onClick={() => openModal("pet")}>
            Add Pet
          </button>
          <button className="button-34" onClick={() => openModal("post")}>
            Add Post
          </button>
        </aside>
        <div className="content-dashboard">{children}</div>

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
      </div>
    </section>
  );
};
