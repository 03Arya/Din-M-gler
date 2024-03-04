"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

import logo from "@/images/logo.png";

export default function Navigation() {
    return (
        <header>
            <nav>
                <ul className='upperNav'>
                    <div>
                        <li className='mailLogo'><FontAwesomeIcon icon={faPaperPlane} /><p className='mail'>4000@dinmaegler.com</p></li>
                        <li className='phoneLogo'><FontAwesomeIcon icon={faPhone} /><p className='phonenumber'>+45 7070 4000</p></li>
                    </div>
                    <li className='login'><FontAwesomeIcon icon={faUser} /><p>Log ind</p></li>
                </ul>

                <ul className='underNav'>
                    <a href="/">
                        <li className='menu'><Image className="" src={logo} alt='logo' /></li>
                    </a>
                    <div>
                        <li className='menu'>Boliger til salg</li>
                        <li className='menu'>Mæglere</li>
                        <li className='menu'>Mine favoritter</li>
                        <li className='menu'>Kontakt os</li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}