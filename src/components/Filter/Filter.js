import React from 'react'
import PropTypes from 'prop-types'

function Filter({ value, onChange }) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange} />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;