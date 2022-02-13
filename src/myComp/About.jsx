import React from 'react'
import { Common } from './Common';
import web from "../images/4380747.jpg";

export const About = () => {
  return (
    <div>
      <Common
      name="Welcome to About Page"
      btname="Contact us"
      imgsrc={web}
      dir="/contact"
      />
    </div>
  )
}
