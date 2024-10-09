import React from 'react';

class Education extends React.Component {
  render() {
    const { education, header } = this.props;

    return (
      <div className="section">
        <div className="section-header">
          <h3><i>{header}</i></h3>
        </div>
        <div className="content">
          {education.map((school, index) => (
            <div key={index}>
              <h3>{school.school}</h3>
              <p>{school.degree}</p>
              <p>{school.period}</p>
              <p>{school.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
