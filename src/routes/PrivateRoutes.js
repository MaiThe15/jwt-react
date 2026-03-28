import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoutes = (props) => {
    let history = useHistory();
    const { user } = useContext(UserContext);
    useEffect(() => {
        console.log(">>> check context user: ", user);
        let session = sessionStorage.getItem('account');
        if(!session){
            history.push('/login');
        }
        if(session){
            
        }
    }, [])

    return(
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRoutes;