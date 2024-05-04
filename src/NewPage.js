import axios from "axios"
import { useEffect } from "react"

export default function NewPage(){

    useEffect(() => {
      
      axios.get("https://swapi.dev/api/people")
      .then((res)=>{
        console.log(res.data.results);
      })

    }, [])
    
    return(
        <div>
            hello guys
        </div>
    )
}