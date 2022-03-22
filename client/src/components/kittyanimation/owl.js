import * as React from 'react';
import './owl.css'

function Owl() {
    return(
            <div className="thecontainer">
                <div className='branch'>
                    <div></div>
                </div>
                <div className='owl'>
                    <div className='ear-l'></div>
                    <div className='ear-r'></div>
                    <div className='wing-l'></div>
                    <div className='wing-r'></div>
                    <div className='eye-l'>
                        <div className='eyeball'></div>
                        <div className='eyelid'></div>
                    </div>
                    <div className='eye-r'>
                        <div className='eyeball'></div>
                        <div className='eyelid'></div>
                    </div>
                </div>
            </div>
    );
}

export default Owl;