import React, { useState } from "react";
import "./styles.css";

interface ModalProps {
  showModal: boolean;
  modalType: string;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  showModal,
  modalType,
  closeModal,
}) => {
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
    <>
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
                <label>
                  Image:
                  <input type="file" accept="image/*" />
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

export default ModalComponent;
