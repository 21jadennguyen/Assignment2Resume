import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Zh Rimel',
      jobTitle: 'Data Scientist',
      contact: {
        email: 'abc@gmail.com',
        web: 'abc.github.io/abc',
        phone: '01234567890',
        emailPreheader: 'Email:',
        webPreheader: 'Web:',
        phonePreheader: 'Mobile:',
      },
      profile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      workExperience: [
        {
          jobTitle: 'Job Title at Company',
          period: 'August 2022 - December 2023',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
          jobTitle: 'Job Title 2 at Company 2',
          period: 'August 2020 - December 2021',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
      ],
      skills: ['A Key skill', 'A Key skill', 'A Key skill',
               'A Key skill', 'A Key skill', 'A Key skill', 
               'A Key skill', 'A Key skill', 'A Key skill'],
      education: [
        {
          school: 'New Jersey Institute of Technology',
          degree: 'BS in Computer Science',
          period: '2018 - 2022',
          gpa: 'GPA: 3.9',
        },
        {
          school: 'New Jersey Institute of Technology',
          degree: 'MS in Data Science',
          period: '2022 - 2023',
          gpa: 'GPA: 4.0',
        },
      ],
      sectionHeaders: {
        personalProfile: 'Personal Profile',
        workExperience: 'Work Experience',
        keySkills: 'Key Skills',
        education: 'Education',
      }
    };
  }

  render() {
    const { name, jobTitle, contact, profile, workExperience, skills, education, sectionHeaders } = this.state;
    
    return (
      <div className="container">
        <Header name={name} jobTitle={jobTitle} contact={contact} />
        <PersonalProfile profile={profile} header={sectionHeaders.personalProfile} />
        <WorkExperience workExperience={workExperience} header={sectionHeaders.workExperience} />
        <Skills skills={skills} header={sectionHeaders.keySkills} />
        <Education education={education} header={sectionHeaders.education} />
      </div>
    );
  }
}

export default App;
