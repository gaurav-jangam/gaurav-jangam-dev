import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import ResumeApi2 from "./ResumeApi2"
import Card from "./Card"
import CV from '../../assets/Gaurav-Jangam-Resume.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>1 YEAR OF EXPERIENCE</h4>
            <h1>My Resume</h1>
            <br />
            <a className='btn_shadow' rel="noreferrer" target='_blank' href={CV}><AiOutlineDownload /> Download Resume</a>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left left1'>
              <div className='heading'>
                <h4>2015-2022</h4>
                <h1>Education Quality</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                })}
              </div>
            </div>
            <div className='left left2'>
              <div className='heading'>
                <h4>2020-2022</h4>
                <h1>Job Experience</h1>
              </div>
              <div className='content'>
                {ResumeApi2.map((val, index) => {
                  return (
                    <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
