import Head from "./header";
import Container from "./conainerr";
import Foot from "./footer";
function Total(){
    return(
        <div className="flex-box bb"> 
            <Head/>
            <Container/>
            <Foot/>
        </div>
    )
}
export default Total;
