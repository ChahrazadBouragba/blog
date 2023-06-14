import React, { useState, useEffect } from "react";
import axios from "axios";
import Aside from "./Aside";

function AestheticPicture({ numberOfPictures }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchAestheticPictures();
  }, [numberOfPictures]);

  const fetchAestheticPictures = async () => {
    try {
      const urls = [];
      for (let i = 0; i < numberOfPictures; i++) {
        const randomId = Math.floor(Math.random() * 1000); // Generate a random ID
        const response = await axios.get(
          `https://picsum.photos/id/${randomId}/200/200`
        );
        urls.push(response.request.responseURL);
      }
      setImageUrls(urls);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Aesthetic ${index}`} />
      ))}
    </div>
  );
}

export default AestheticPicture;
