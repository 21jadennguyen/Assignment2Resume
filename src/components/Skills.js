import React from 'react';

class Skills extends React.Component {
  render() {
    const { skills, header } = this.props;

    return (
      <div className="section">
        <div className="section-header">
          <h3><i>{header}</i></h3>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
