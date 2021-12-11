import React from 'react';
import './Header.css';
import { IoIosHome } from 'react-icons/io';
import { FaProjectDiagram, FaBriefcase, FaUser } from 'react-icons/fa';
import { RiMailOpenFill } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="header">
            <div className="d-flex align-items-center h-100">
                <div className="w-100">
                    <ul>
                        <li><a href="#" className="home nav-btn"><IoIosHome /></a></li>
                        <li><a href="#" className="about nav-btn"><FaUser /></a></li>
                        <li><a href="#" className="services nav-btn"><FaBriefcase /></a></li>
                        <li><a href="#" className="projects nav-btn"><FaProjectDiagram /></a></li>
                        <li><a href="#" className="contactMe nav-btn"><RiMailOpenFill /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;