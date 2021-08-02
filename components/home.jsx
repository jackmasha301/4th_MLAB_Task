import React, { Component } from "react";
import menu from "./menu"
import '../App.css';
export default class home extends Component{
    render(){
        return (
        <menu />
        <h1>welcome to my home page</h1>
            <div class="resume_profile">
                <!--image-->
                <img src="profile.jpg" alt="profile_pic">
            </div>
        )
    } 
}