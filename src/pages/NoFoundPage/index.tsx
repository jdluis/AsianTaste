import { FC } from "react";
import { Link } from "react-router-dom";

interface NoFoundPageProps {}
 
const NoFoundPage: FC<NoFoundPageProps> = () => {
    return ( <div>
        <h3>Eh! This is not the page, come <Link to={'/'}>Back</Link> to the home</h3>
    </div> );
}
 
export default NoFoundPage;