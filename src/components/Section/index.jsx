import React from 'react'
import PropTypes from 'prop-types'
import StyledSection from './style'

const Section = ({ children }) => {
    return <StyledSection>{children}</StyledSection>
}

Section.propTypes = {
    children: PropTypes.node.isRequired
}

export default Section
