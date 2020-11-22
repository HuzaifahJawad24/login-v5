import React, { useState } from "react";

import Pic from "../images/pic.jpg";

import '../css/master.css'
import '../css/dropdown.css'

const Master = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [showSubMenu, setShowSubMenu] = useState({home : false, user : false, menu : false , setting: false});
    const updateSearchField = (e) => setSearchValue(e.target.value)

    const toggle = () => setIsOpen(!isOpen)

    const updateSubMenu = (type) => {
        console.log(type)

        if (type === 'home'){
            setShowSubMenu({home: !showSubMenu.home, user : false, menu : false , setting: false})
        }
        if (type === 'user'){
            setShowSubMenu({home: false , user : !showSubMenu.user, menu : false , setting: false})
        }
        if (type === 'menu'){
            setShowSubMenu({home: false , user : false, menu : !showSubMenu.menu , setting: false})
        }
        if (type === 'setting'){
            setShowSubMenu({home: false , user : false, menu : false , setting: !showSubMenu.setting })
        }

    }

    return (
        <div className={`wrapper ${isOpen ? "" : "collapse"}`}>
            <div className="top_navbar">
                <div className="hamburger" onClick={toggle}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>               
                </div>
                {isOpen && (
                    <div className="hamburger-styling">
                        <b className="color-white">
                            ESDash
                        </b>
                    </div>
                )} 
                <div className="top_menu">
                    <div className="search">
                        {isOpen && (
                            <div>
                                <button className="search-btn" type="button">
                                    <i className="fa fa-search search-icon"></i>
                                </button>
                                <input type="text" name="search" className="search" placeholder="Search" value={searchValue} onChange={updateSearchField}/>
                            </div>  
                        )}                                      
                    </div>
                    <ul className="menu-item">
                        <li>
                            <i className="fa fa-bell"></i>
                        </li>
                        <li>
                            <i className="fa fa-user"></i>
                        </li>
                        <li>
                            <img src={Pic} className="image-styling" alt=""></img>                          
                        </li>
                        <li className="arrow-styling">
                            <i className="fa fa-sort-down"></i>
                        </li>
                    </ul>
                </div>
            </div>  
            <div className="sidebar">
                <ul>
                    {isOpen && (
                        <li>
                            <span className="icon">
                            <img src={Pic} className="image-styling" alt=""></img>
                            </span>
                            <span className="title margin-bottom">ABCD</span>
                        </li>
                    )}
                    <li className={showSubMenu.home ? "curser-pointer active" : "curser-pointer"} onClick={() => updateSubMenu('home')}>
                        <span className="icon">
                            <i className="fa fa-home"></i>
                        </span>

                        <span className="title">Home</span>
                        {isOpen && (
                            <ul className = {showSubMenu.home ? "font-size" : "dropdown"}>
                                <li><a href="/master" className="color-white">Home 1</a></li>
                                <li><a href="/master" className="color-white">Home 2</a></li>
                                <li><a href="/master" className="color-white">Home 3</a></li>
                                <li><a href="/master" className="color-white">Home 4</a></li>
                            </ul>
                        )}
                    </li>
                    <li className={showSubMenu.user ? "curser-pointer active" : "curser-pointer"} onClick={() => updateSubMenu('user')}>
                        <span className="icon">
                            <i className="fa fa-user"></i>
                        </span>
                        <span className="title">Users</span>
                        {isOpen && (
                            <ul className = {showSubMenu.user ? "font-size" : "dropdown"}>
                                <li><a href="/master" className="color-white">User 1</a></li>
                                <li><a href="/master" className="color-white">User 2</a></li>
                                <li><a href="/master" className="color-white">User 3</a></li>
                                <li><a href="/master" className="color-white">User 4</a></li>
                            </ul>
                        )}
                    </li>
                    <li className={showSubMenu.menu ? "curser-pointer active" : "curser-pointer"} onClick={() => updateSubMenu('menu')}>
                        <span className="icon">
                            <i className="fa fa-bars"></i>
                        </span>
                        <span className="title">Menu</span>
                        {isOpen && (
                            <ul className = {showSubMenu.menu ? "font-size" : "dropdown"}>
                                <li><a href="/master" className="color-white">Menu 1</a></li>
                                <li><a href="/master" className="color-white">Menu 2</a></li>
                                <li><a href="/master" className="color-white">Menu 3</a></li>
                                <li><a href="/master" className="color-white">Menu 4</a></li>
                            </ul>
                        )}
                    </li>
                    <li className={showSubMenu.setting ? "curser-pointer active" : "curser-pointer"} onClick={() => updateSubMenu('setting')}>
                        <span className="icon">
                            <i className="fa fa-cogs"></i>
                        </span>
                        <span className="title">Settings</span>
                        {isOpen && (
                            <ul className = {showSubMenu.setting ? "font-size" : "dropdown"}>
                                <li><a href="/master" className="color-white">Settings 1</a></li>
                                <li><a href="/master" className="color-white">Settings 2</a></li>
                                <li><a href="/master" className="color-white">Settings 3</a></li>
                                <li><a href="/master" className="color-white">Settings 4</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="main_container">
                {/*  */}
            </div>
        </div>
    );

}

export default Master