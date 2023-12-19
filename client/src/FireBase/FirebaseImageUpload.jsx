import React, { useEffect, useState } from 'react';
import { imageDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function FirebaseImageUpload({ handleImageUpdate }) {
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState([]);

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `file/${uuidv4()}`);
      uploadBytes(imgRef, img).then(value => {
        console.log(value);
        getDownloadURL(value.ref).then(url => {
          setImgUrl(data => [...data, url]);
          handleImageUpdate(url); // Pass the uploaded image URL back to the parent component
        });
      });
    }
  };


  
  

  useEffect(() => {
    listAll(ref(imageDb, 'files')).then(imgs => {
      console.log(imgs);
      imgs.items.forEach(val => {
        getDownloadURL(val).then(url => {
          setImgUrl(data => [...data, url]);
        });

      });
    });
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    console.log(file);

    setImg(file); // Set the file in the component state
  };
  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} /> {/* File input */}
      <button onClick={handleClick}>Upload</button>
      <br />
      {imgUrl.map(dataVal => (
        <div key={dataVal}>
          <img src={dataVal} alt="Uploaded" height="200px" width="200px" />
          <br />
        </div>
      ))}
    </div>
  );
}

export default FirebaseImageUpload;
