import axios from "axios";
import { useEffect, useState } from "react";

export default function Images({ numberOfImages }) {
//   const URL = "https://api.escuelajs.co/api/v1/products";
const URL = "https://api.escuelajs.co/api/v1/users";
  const [images, setImages] = useState([]);

  // Function to fetch images from the API
  let getImages = async () => {
    try {
      const response = await axios.get(URL); // Make API request
      const shuffledImages = response.data.sort(() => Math.random() - 0.5); // Shuffle the images randomly
      const selectedImages = shuffledImages.slice(0, numberOfImages); // Get a subset of images based on the specified number
      setImages(selectedImages); // Update state with the selected images
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages(); // Call the getImages function when the component mounts
  }, [numberOfImages]);

  return (
    <div>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.avatar} alt={`Image ${index}`} />
          </div>
        );
      })}
    </div>
  );
}
