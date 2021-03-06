import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';
import PropTypes from "prop-types";

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[test].js will be matched via props.as
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink