import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaHouse,
  FaUser,
  FaMagnifyingGlass,
  FaDog,
  FaPlus,
} from "react-icons/fa6";
import ModalComponent from "../modal/Modal";

const BottomBar = () => {
  const [showButtons, setShowButtons] = useState(false);
  // Define refs with proper type
  const plusIconRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the modal is open, do nothing and return
      if (showModal) return;

      if (
        buttonsRef.current &&
        !buttonsRef.current.contains(event.target as Node) &&
        plusIconRef.current &&
        !plusIconRef.current.contains(event.target as Node)
      ) {
        setShowButtons(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]); // <-- Added showModal to the dependency array

  return (
    <>
      <div className="bottom-nav">
        <Link href="/home" className="nav-link">
          <FaHouse />
        </Link>
        <Link href="/home" className="nav-link">
          <FaDog />
        </Link>
        <div ref={plusIconRef} onClick={toggleButtons} className="nav-link">
          <FaPlus />
        </div>
        <Link href="/home" className="nav-link">
          <FaMagnifyingGlass />
        </Link>
        <Link href="/profile" className="nav-link">
          <FaUser />
        </Link>
      </div>
      {showButtons && (
        <>
          <div ref={buttonsRef} className="create-buttons">
            <button onClick={() => openModal("pet")}>Add Pet</button>
            <button onClick={() => openModal("post")}>Add Post</button>
          </div>
          <ModalComponent
            showModal={showModal}
            modalType={modalType}
            closeModal={closeModal}
          />
        </>
      )}
    </>
  );
};

export default BottomBar;
