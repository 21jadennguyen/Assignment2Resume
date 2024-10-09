import React from 'react';

class PersonalProfile extends React.Component {
  render() {
    const { profile, header } = this.props;

    return (
      <div className="profile-section">
        <div className="section-header">
          <h3><i>{header}</i></h3>
        </div>
        <p>{profile}</p>
      </div>
    );
  }
}

export default PersonalProfile;
