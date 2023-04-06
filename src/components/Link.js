import NextLink from "next/link";
import React from 'react'

const Link = (props) => {
    const { children, ...restProps } = props

    return (
        <NextLink style={{ fontSize: "30px" }} {...restProps}>{children}</NextLink>
    )
}

export default Link