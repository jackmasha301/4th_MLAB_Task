import React from "react";
export default Profile;
import '../App.css';

const profile = () =>{
    return (
        <div class = "container">
            <h1>Profile</h1>
            <p>I am young energetic and well-presented man with strong morals and problem solving skills. i enjoy working with others and mmotivating them to give it thier best. working alone is not a problem as i complete tasks assigned to me without
                        being reminded or checked on. i possess strong interpersonal skills, demostrating the utmost discretion and integrity when dealing with confidencial information.</p>
            </p>
                <ul>
                    <li>
                        <div class="icon"><i class="fas fa-home"></i></div>
                        <div class="data">
                            A1147b Moremadi Park MAnkweng 0727<br/>RSA
                        </div>
                    </li>
                    <li>
                        <div class="icon"><i class="fas fa-phone"></i></div>
                        <div class="data">
                            +277 137 7552
                        </div>
                    </li>
                    <li>
                        <div class="icon"><i class="fas fa-envelope-square"></i></div>
                        <div class="data">
                            jackmasha301@gmail.com
                        </div>
                    </li>
                </ul>
        </div>
    )
}