import React from 'react'

export default function ImgSection({children,imgClass}) {
    return (
        <header className={imgClass}>
        {children}
        </header>
    )
}

ImgSection.defaultProps = {
    imgClass:"defaultImg"
}
