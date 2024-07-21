import React, { useEffect, useState } from "react";
import "./page-css/home.css";
import img1 from "../pages/images/img1.png"
import img2 from "../pages/images/img2.png"
import img3 from "../pages/images/img3.png"
import { Form } from "../components/form";

export const Home = () => {
  const [index, changeindex] = useState(0);
  const imgarr = [img1,img2,img3];
  const promptarr = ["A fantastical circus in the clouds, with acrobats performing breathtaking stunts on floating platforms and whimsical animals juggling glowing orbs.",
    "A serene, futuristic beach where holographic waves gently lap against the shore and sleek, transparent buildings rise from the sand.",
    "A grand dragon’s lair in a cavern filled with sparkling gemstones, ancient scrolls, and a treasure hoard, with the dragon perched majestically atop the pile."

]

  useEffect(() => {
    const interval = setInterval(() => {
      changeimage();
    }, 10000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index]); // Add index as a dependency to useEffect

  function changeimage() {
    if (index + 1 === 2) {
      changeindex(0);
    } else {
      changeindex(index + 1);
    }
  }





  return (
    <div className="main">
        <section>

      <div className="left-text">
        <h1>Welcome to Text2Image Converter!</h1>
        <p>
          Transform your words into stunning visuals with our easy-to-use Text2Image Converter. Whether you need custom graphics for social media, presentations, or creative projects, our tool provides a quick and efficient solution.
        </p>
        <div className="why-to">
          <h2>Why Use Text2Image Converter?</h2>
          <ul>
            <li>---- TOTALLY FREE ----</li>
            <li>User-Friendly: Intuitive interface designed for everyone, from beginners to professionals</li>
            <li>High Quality: Generate high-resolution images perfect for any platform or medium.</li>
          </ul>
        </div>
      </div>
      
      <div className="right-slider">
          <img src={imgarr[index]} alt="loading" />
          <div className="slider-text">
            <p>
             {promptarr[index]}
            </p>
          </div>
        
      </div>
        </section>
      <Form/>
    </div>

  );
};

// const [imageUrl, setImageUrl] = useState(null); // Use state to manage the image URL

// useEffect(()=>{
//   async function geturl(){
//     const response = await fetch('http://localhost:1000/api/v1/dalle/',{
//       method:"POST",
//       headers :{
//         'Content-Type':'application/json'
//       },
//     });

//     if(!response.ok){
//       console.log('res not ok');
//       return;
//     }
//     const result = await response.json();
//     setImageUrl(result.imageUrl); 
//   }
//   geturl();
// },[])
