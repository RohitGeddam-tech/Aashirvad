import React, {useState, useEffect} from 'react';

const FullPage = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return(
        <div>
            {isMobile ? <>Hello</> : <>Bye</>}
        </div>
    )
}

export default FullPage;