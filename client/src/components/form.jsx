import {  RiMagicFill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import unloaded from "../pages/images/unloaded.png"
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";





export const Form = ()=>{
      const navigate = useNavigate();
      const [imageblob,setblob] = useState(null);

      async function geturl(prompt){
      const response = await fetch('http://localhost:1000/api/v1/dalle/generate',{
        method:"POST",
        headers :{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          prompt:prompt,
        })
      });
  
      if(!response.ok){
        console.log('res not ok');
        return;
      }
        const imgbuf = await response.arrayBuffer();
        const blob = new Blob([imgbuf], { type: 'image/jpeg' });
        setblob(blob);
        console.log('hiiii');
        const url = URL.createObjectURL(blob);
        return url;
    }



    const[url,seturl]=useState("");
    const[prompt,setprompt] = useState("");
    const [loading,setloading] = useState(false);
    const [username,setusername] = useState("");
    const [share,setshare] = useState(false);
    
    const handlesubmit=async (e)=>{
        e.preventDefault();
            if(!imageblob){   
              alert('generate image first');
              return;
            }
            
            try {
              setshare(true);
              const formData = new FormData();

              formData.append('file', imageblob, 'generated_image.jpg');
              formData.append('username', username);
              formData.append('prompt', prompt);
              const response = await fetch('http://localhost:1000/api/v1/post/submit',
                {
                  method:'POST',
                  body : formData,
                }
              )
             if(!response.ok){
              alert('oops problem in server');
              return;
             }else{
               navigate("/Community")
             }

            } catch (error) {
              console.log('error in submit');
            } finally {
              setshare(false);
            }

           


           
          

            

       }



       const generate= async(e)=>{
        e.preventDefault();
        try {
          setloading(true);

          const imageurl = await geturl(prompt);
           seturl(imageurl);
          
        } catch (error) {
          console.log('error in getting url');
        } finally {
          setloading(false);
        }


       }
         //api part

      

return<>
    <form onSubmit={handlesubmit}>
        <div className="formcontent">
        <div className="inputs">
             <input type="text" name = 'username' required autoComplete="off" placeholder="username"
             onChange={(e)=>{setusername(e.target.value)}} value={username}/>
         <br />
             <textarea name="prompt" placeholder="Show your creativity..." required onChange={(e)=>{setprompt(e.target.value)}} value={prompt}> 
             </textarea>
        </div>
        <div className="gene-img">

          {loading ?
           ( <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          /> )
            :(<div> 
            {url ? (<img src={url} width="100%" alt="loading..." />):
            (<img src ={unloaded} alt="loading"/>)}
            </div>)}

            <a href={url} download={prompt + "T2I"}>

        <button type="button" > Download</button>
            </a>
        </div>
        
        </div>
        <div className="but">
            <button id="generate" onClick={generate}><RiMagicFill />  Generate</button>
            <button id="community" type="Submit" ><IoHomeOutline size={15}/>

              {share ? ("sharing"):("Share with community")}
               </button>
        </div>
    </form>
    
</>
}