import axios from "axios"
import { useEffect, useState } from "react"

export default function NewPage(){

    const [people, setPeople] = useState([])

    useEffect(() => {
      
      axios.get("https://swapi.dev/api/people")
      .then((res)=>{
        
        console.log(res.data.results);
        setPeople(res.data.results)

      })

    }, [])
    
    return(
        <div>
            {

                // for insaan in people:
                //      return(
                //          <div>
                //              {insaan.name}
                //          </div>
                // )

                people.map( (insaan) => {
                    return(
                        <div>
                            {insaan.name}
                        </div>
                    )
                } )
            }
        </div>
    )
}