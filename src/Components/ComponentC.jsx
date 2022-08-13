import React, {useContext, useEffect} from "react";
import { UserContext,NameContext } from "./ComponentA";

const ComponentC = () => {
    const name = useContext(UserContext);
    useEffect(() => {
        console.log(name);
    }, [name]);

	return( 
    <div>
       Name:  {name.firstName} {name.lastName}
    </div>
    )
};

export default ComponentC;
