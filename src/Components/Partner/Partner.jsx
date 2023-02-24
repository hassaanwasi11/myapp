import React from 'react'

import vectpr1 from '../../images/vector1.png'
import vectpr2 from '../../images/vector2.png'
import vectpr3 from '../../images/vetor3.png'
import vectpr4 from '../../images/vector4.png'

import kn from '../../images/bn.png'

import bn from '../../images/kn.png'
import vectpr5 from '../../images/Vector.png'
import { data } from '../Landing/Data'
const Partner = () => {
    return (
        <div className="nextsec1" >
            <p>Partners & Integrations</p>
            <div className="logos">
                <img src={kn} alt="" />
                <img src={bn} alt="" />
                <img src={kn} alt="" />
                <img src={bn} alt="" />
            </div>
            <h1>Blockchain Solution</h1>
            <h2>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellentesque nec quam ac molestie.</h2>
            <div className="divs">
                {data.map(val => (
                        <div className="support" id='support' key={val.heading}>
                            <div className="iconcircle">
                                <img src={val.img} alt="" />
                            </div>
                            <h1>{val.heading}</h1>
                            <p>{val.para}</p>
                        </div>
                ))

                }
            </div>

        </div>
    )
}

export default Partner