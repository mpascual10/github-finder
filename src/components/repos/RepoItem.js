import React from 'react';
import PropTypes from 'prop-types';
import Repos from './Repos';

const RepoItem = ({repo}) => {
    return (
        <div className='card'>
            <h3>

            <a href={Repos.html_url}>{repo.name}</a>

            </h3>
        </div>
    )
}

RepoItem.propTypes = {

    repo: PropTypes.object.isRequired

}

export default RepoItem;