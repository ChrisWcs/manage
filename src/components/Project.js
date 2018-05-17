import React from 'react';
import PropTypes from 'prop-types';

const Project = ({projectName, owner}) => (
    <div>
        <h2 className="Title">{projectName}</h2>
        <h2 className="SubTitle">{owner}</h2>
    </div>
);

Project.propTypes = {
    projectName: PropTypes.string,
    owner: PropTypes.string
};

export default Project;