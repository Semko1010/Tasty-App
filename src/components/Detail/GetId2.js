import { useParams } from "react-router-dom";
import Detail from "./Detail"

const GetId2 = () => {
    let { id } = useParams()
    return (
        <>
            <Detail id={id} />
        </>
    );
}

export default GetId2;