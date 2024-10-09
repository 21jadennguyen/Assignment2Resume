import React from 'react';

class WorkExperience extends React.Component {
  render() {
    const { workExperience, header } = this.props;

    return (
      <div className="section">
        <div className="section-header">
          <h3><i>{header}</i></h3>
        </div>
        <div className="content">
          {workExperience.map((job, index) => (
            <div key={index}>
              <h3>{job.jobTitle} ({job.period})</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WorkExperience;
