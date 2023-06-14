import React, { useEffect, useState } from 'react';

const Aesthetic = ({ numberOfImages }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = [];
        for (let i = 0; i < numberOfImages; i++) {
          const randomId = Math.floor(Math.random() * 1000); // Generate a random ID
          urls.push(`https://picsum.photos/id/${10 + randomId}/200/300`);
        }
        setImageUrls(urls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [numberOfImages]);

  return (
    <div className='aesthetic-div'>
      {imageUrls.map((url, index) => (
        <img className='aesthetic-imgs' key={index} src={url} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default Aesthetic;
