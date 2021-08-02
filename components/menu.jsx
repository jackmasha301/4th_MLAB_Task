import { react } from "react";
import { broswerRouter as Router, link, router, switch} from "react-router-module";
export default menu
import user from "./user"
import { about } from "./About";
import profile from "./Profile";
import '../App.css';

const menu =()=>{
    return(
        <>
            <Router>
                <div>
                    <nav class = "Navigation"   >
                        <<ul>
                            <li>
                                <link ="/">home</link> 
                            </li>
                            <li>
                                <link ="/profile">Profile</link> 
                            </li>
                            <li>
                                <link ="/about">About</link> 
                            </li>
                        </ul>
                    </nav>
                    
                    <switch>
                        <Route path ="/profile">
                            <Profile />
                        </Route>                        
                        <Route path="/about">
                            <About />
                        </Router>
                        <Route path="/">
                            <main />
                        
                        </Router>
                        
                    </switch>
                </div>
            </Router>
        </>
    )
}