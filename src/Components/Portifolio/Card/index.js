/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './style.scss';

const Card = ({ link, imgUrl, title, subTitle }, ...props) => {
    return (
        <a className="card" target="_blank" href={link}>
            <img src={imgUrl} className="img" alt="card" />
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <svg viewBox="0 0 28 25">
                <path
                    fill="#fff"
                    d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                />
            </svg>
        </a>
    )
}

export default Card