import React, { useState, useEffect } from "react";
import "./styles.css";

import PetCard from "../petCard/PetCard";

type Pet = {
  id: string;
  name: string;
  race: string;
  age: number;
  sex: string;
  size: string;
  city: string;
  department: string;
  sterilized: boolean;
  adopted: boolean;
  images: string[];
  vaccines: string[];
  email: string;
};

const AllPets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const response = await fetch(
          `https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/get-all-pets`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setPets(data);
        } else {
          throw new Error("Received data is not an array");
        }
        setLoading(false);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllPets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {pets.map((pet, index) => (
        <PetCard
          key={index}
          name={pet.name}
          vaccines={pet.vaccines}
          images={pet.images[0]}
          race={pet.race}
          age={pet.age}
          sex={pet.sex}
          city={pet.city}
          department={pet.department}
          sterilized={pet.sterilized}
          adopted={pet.adopted}
          email={pet.email}
          />
        // <div key={pet.id}>
        //   <h3>{pet.name}</h3>
        //   <p>Race: {pet.race}</p>
        //   <p>Age: {pet.age}</p>
        //   <p>Sex: {pet.sex}</p>
        //   <p>Size: {pet.size}</p>
        //   <p>City: {pet.city}</p>
        //   <p>Department: {pet.department}</p>
        //   <p>Sterilized: {pet.sterilized}</p>
        //   <p>Adopted: {pet.adopted}</p>
        //   <p>Email: {pet.email}</p>
        // </div>
      ))}
    </div>
  );
};

export default AllPets;
