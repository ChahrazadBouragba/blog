import React, { useState, useEffect } from "react";
import axios from "axios";

function AestheticPicture({ numberOfPictures }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchAestheticPictures();
  }, [numberOfPictures]);

  const fetchAestheticPictures = async () => {
    try {
      const requests = Array.from({ length: numberOfPictures }, (_, index) =>
        axios.get(`https://picsum.photos/seed/${index}/200/200`)
      );

      const responses = await Promise.all(requests);
      const urls = responses.map((response) => response.request.responseURL);
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
