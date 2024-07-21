import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";


export const Community = ()=>{

    const [showdata,setdata] = useState(null);
    useEffect(()=>{
        async function getdata(){
            const response = await fetch('http://localhost:1000/api/v1/post/data');
            const result = await response.json();

            const array = await result.map((ele,index)=>{
                    return <>
                      
                    <a href={ele.image} target="blank" key={ele.image}>    

                     <div className="image" >
                

                        <img src={ele.image} alt="loading" />
                
                  
                        <div className="text">
                         <h3>{"-"+ele.username}</h3>
                         <p>{ele.prompt}</p>
                        </div>
                        

                         </div>
                    
                         </a>
                    
                    </>
                         } )

               
            setdata(array.reverse());
        }
        getdata();
        
    },[]);
    

    return<>
    <div className="main">

    <div className="gallery">
        {showdata}   
    </div>
    </div>
    </>
}