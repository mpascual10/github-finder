//rafc
import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

//.map because its a list of the repos
const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>);
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;