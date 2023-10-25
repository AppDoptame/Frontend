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
    images: string[];
    sex: "M" | "F";
    size: "XS" | "S" | "M" | "L" | "XL";
    sterilized: "true" | "false";
  }>({
    email: "",
    name: "",
    age: "",
    vaccines: [],
    race: "",
    images: [],
    sex: "M",
    size: "M",
    sterilized: "false",
  });

  const [postFormData, setPostFormData] = useState<{
    title: string;
    description: string;
    email: string;
    pet_id: string;
    images: string[];
  }>({
    title: "",
    description: "",
    email: "",
    pet_id: "",
    images: [],
  });

  const [uploadedImage, setUploadedImage] = useState<string>("");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result!.toString().split(",")[1];

      try {
        const response = await fetch(
          "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/upload-images",
          {
            method: "POST",
            body: base64data,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUploadedImage(data.image_url);
        } else {
          alert("Error uploading image: " + data.error);
        }
      } catch (error) {
        alert("There was an error uploading the image.");
      }
    };
  };

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/create-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...postFormData, images: [uploadedImage] }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Post created successfully");
        closeModal();
      } else {
        alert("Error creating post: " + data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("There was an error: " + error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const completeFormData = {
      ...formData,
      images: [uploadedImage],
    };

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/create-pet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completeFormData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Pet added successfully");
        console.log(data);
        closeModal();
      } else {
        console.log(data);
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
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
                <label>
                  Sex:
                  <select
                    value={formData.sex}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sex: e.target.value as "M" | "F",
                      })
                    }
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </label>
                <label>
                  Size:
                  <select
                    value={formData.size}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        size: e.target.value as "XS" | "S" | "M" | "L" | "XL",
                      })
                    }
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </label>
                <label>
                  Sterilized:
                  <select
                    value={formData.sterilized}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sterilized: e.target.value as "true" | "false",
                      })
                    }
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </label>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            ) : (
              <div>
                <h2>Add Post Form</h2>
                <form onSubmit={handlePostSubmit}>
                  <label>
                    Title:
                    <input
                      type="text"
                      value={postFormData.title}
                      onChange={(e) =>
                        setPostFormData({
                          ...postFormData,
                          title: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      value={postFormData.description}
                      onChange={(e) =>
                        setPostFormData({
                          ...postFormData,
                          description: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      value={postFormData.email}
                      onChange={(e) =>
                        setPostFormData({
                          ...postFormData,
                          email: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    Pet ID:
                    <input
                      type="text"
                      value={postFormData.pet_id}
                      onChange={(e) =>
                        setPostFormData({
                          ...postFormData,
                          pet_id: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <button className="submit-button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ModalComponent;
