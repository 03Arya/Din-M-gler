import React from 'react';

export default function Hero() {
    return (
        <section>
            <div className='sectionBg'>
                <h1>Søg efter din drømmebolig</h1>

                <div className='searchContainer'>
                    <p className='searchText1'><span className='textUnderline'>Søg</span> blandt 158 boliger til salg i 74 butikker</p>
                    <p className='searchText2'>Hvad skal din næste bolig indeholde</p>
                    <form action="">
                        <input className='searchField' type="text" placeholder='Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignede' />
                        <button className='submitButton' type='submit'>Søg</button>
                    </form>
                </div>
            </div>
        </section>
    );
}