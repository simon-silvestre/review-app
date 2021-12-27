import React from 'react'
import img from '../Assets/icon.png'
import star from '../Assets/star.png'

function Block() {
    return (
        <div className="block">
            <div className="left">
                <div className="image">
                    <img src={img} alt="profil" />
                </div>
                <div className="text">
                    <p>lighthouse</p>
                    <p>by <span>developer tools</span></p>
                </div>
            </div>

            <div className="right">
                <button>download now</button>
                <div className="review">
                    <div className="stars">
                        <img src={star} alt="etoile" />
                        <img src={star} alt="etoile" />
                        <img src={star} alt="etoile" />
                        <img src={star} alt="etoile" />
                        <img src={star} alt="etoile" />
                    </div>
                    <p>279</p>
                </div>
            </div>
        </div>
    )
}

export default Block
