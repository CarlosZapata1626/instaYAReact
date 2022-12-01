import { useParams } from "react-router-dom";
import Ordenes from "./ordenes";
const Delete = ()=>{
    const {id} =useParams()
    return(
        <div>
            <h1>delete # {id}:</h1>
        </div>
        );
}
export default Delete;