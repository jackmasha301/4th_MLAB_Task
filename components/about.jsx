import React from "react";
export default about
import '../App.css';

const about=()=>{
    return (
        <div class = "container">
            <h1>Jack Resume</h1>
            <div class="resume_left">
              <div class="resume_content">
                <div class="resume_item resume_info">
                    <div class="title">
                        <p class="bold">jack magabjane masha</p>
                        <p class="regular">Resume</p>
                    </div>
                </div>

                <div class="resume_item resume_skils">
                    <div class="title">
                        <p class="bold">Coding skill's</p>
                    </div>
                    <ul>
                        <li>
                            <div class="skill_name">
                                HTML
                            </div>
                            <div class="skill_progress">
                                <span style="width: 60%;"></span>
                            </div>
                            <div class="skill_per">60%</div>
                        </li>

                        <li>
                            <div class="skill_name">
                                C++
                            </div>
                            <div class="skill_progress">
                                <span style="width: 67%;"></span>
                            </div>
                            <div class="skill_per">67%</div>
                        </li>

                        <li>
                            <div class="skill_name">
                                CSS
                            </div>
                            <div class="skill_progress">
                                <span style="width: 56%;"></span>
                            </div>
                            <div class="skill_per">56%</div>
                        </li>

                        <li>
                            <div class="skill_name">
                                MySQL
                            </div>
                            <div class="skill_progress">
                                <span style="width: 76%;"></span>
                            </div>
                            <div class="skill_per">76%</div>
                        </li>

                    </ul>
                </div>

                <!--Social Networks-->
                <div class="resume_item resume_social">
                    <div class="title">
                        <p class="bold">Social</p>
                    </div>
                    <ul>
                        <li>
                            <div class="icon">
                                <i class="fab fa-facebook-square" aria-hidden="true"></i>
                            </div>
                            <div class="data">
                                <p class="semi-bold">
                                    Facebook
                                </p>
                                <p>jackmasha@facebook</p>
                            </div>
                        </li>

                        <li>
                            <div class="icon">
                                <i class="fab fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div class="data">
                                <p class="semi-bold">
                                    twitter
                                </p>
                                <p>jackmasha@twiter</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                            </div>
                            <div class="data">
                                <p class="semi-bold">
                                    Linkedin
                                </p>
                                <p>jackmasha301\linkedin</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!---social End here-->
            </div>
        </div>


        <div class="resume_right">
            <div class="resume_item resume_Eductaion">
                <div class="title">
                    <p class="bold">Education</p>
                    <lu>
                        <li>
                            <div class="semi-bold">2018 - 2021</div>
                            <div class="info">
                                <p class="regular">National Diploma IT Software Development </p>
                                <p>Tshwane University of technology</p>
                            </div>
                        </li>

                        <li>
                            <div class="semi-bold">2016</div>
                            <div class="info">
                                <p class="regular">Diesel Machanical Enginerring N1, N2 & N3</p>
                                <p>Capricorn Bokoni Satelite Campus TVET College</p>
                            </div>
                        </li>
                        <li>
                            <div class="semi-bold">2011 - 2015</div>
                            <div class="info">
                                <p class="reqular">Grade 12 </p>
                                <p>Makopole 1 senior secondary school></p>
                            </div>
                        </li>
                    </lu>
                </div>
            </div>
            <!--End resume Education-->

            <div class="resume_item resume_hobby">
                <div class="title">
                    <p class="bold">Hobbies</p>
                </div>
                <ul>
                    <li><i class="fas fa-book" aria-hidden="true"></i></li>
                    <li><i class="fas fa-gamepad" aria-hidden="true"></i></li>
                    <li><i class="fas fa-music" aria-hidden="true"></i></li>
                    <li><i class="fab fa-pagelines" aria-hidden="true"></i></li>
                </ul>
            </div>

            <!--REFERENCE-->
            
            <div class="resume_item resume_reference">
                <div class="title">
                    <p class="bold">reference</p>
                </div>
                <ul>
                    <li>DR Moeti,HOD, Tshwane University of Technology</li>
                    <ul>
                        <li><i class="fas fa-phone" aria-hidden="true"> +27 645105455</i></li>
                        <li><i class="fas fa-fax" aria-hidden="true"></i> 012-297-7609</li>
                    </ul>
            </div>
    </div>
        </div>
    )
}