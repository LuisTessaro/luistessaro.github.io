/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './style.scss';

const Card = ({ link, imgUrl, title, subTitle }, ...props) => {
    return (
        <a className="card" target="_blank" href={link}>
            <img src={imgUrl} className="img" alt="card" />
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <i className="fas fa-arrow-right absolute right-0 bottom-0 text-3xl p-6" />
        </a>
    )
}

export default Card