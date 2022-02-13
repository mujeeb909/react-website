import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/4380747.jpg";
import "../index.css";
import { Common } from './Common';

export const Home = () => {
  return (
    <div>
      <Common
      name="Grow Your Business with"
      btname="Get Started"
      imgsrc={web}
      dir="/services"
      />
    </div>
  );
}
