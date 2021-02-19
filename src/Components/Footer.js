import React, {useState, useEffect} from 'react';
import './CSS/Footer.css';

const Desktop = () => {
    return(
        <div className='insidefooter'>
            <div className='firstrectangle'>
                <h3 className='titlenames'>About Us</h3>
                <h3 className='titlenames'>PATHOLOGICAL EQUIPMENTS</h3>
                <h3 className='titlenames'>CONTACT US</h3>
                <h3 className='titlenames'>PRIVACY POLICY</h3>
                <h3 className='titlenames'>TERMS & CONDITIONS</h3>
            </div>
            <div className="midline"></div>
            <div className='secondrectangle'>
                <div className='innerrectangle'>
                    <a><i className="big facebook icon"></i></a>
                    <a><i className="big instagram icon"></i></a>
                    <a><i className="big linkedin icon"></i></a>
                </div>
            </div>
            <div className='lastrectangle'>
                <h3 className='lineatthelast'>copyright   <i class="copyright outline icon"></i>  2020 All Rights reserved </h3>
            </div>
        </div>
    )
}

const Mobile = () => {
    return(
        <div className='insidefooter'>
            <div className='firstmobrectangle'>
                <h3 className='titlenames'>About Us</h3>
                <h3 className='titlenames'>PATHOLOGICAL EQUIPMENTS</h3>
                <h3 className='titlenames'>CONTACT US</h3>
            </div>
            <div className='secondrectangle'>
                <div className='innerrectangle'>
                    <a><i className="big facebook icon"></i></a>
                    <a><i className="big instagram icon"></i></a>
                    <a><i className="big linkedin icon"></i></a>
                </div>
            </div>
            <div className='lastrectangle'>
                <h3 className='lineatthelast'>copyright   <i class="copyright outline icon"></i>  2020 All Rights reserved </h3>
            </div>
        </div>
    )
}


const Footer = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return (
        <div className='footerbox'>
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}


export default Footer;