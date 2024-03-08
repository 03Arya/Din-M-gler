import React, { useEffect, useState } from 'react';
import Image from "next/image";


export default function AgentsLimited() {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch('https://dinmaegler.onrender.com/agents?_limit=3')
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                setAgents(data);
            })
            .catch(error => console.error('Error:', error));
        console.log("agents")

    }, []);


    return (
        <section className='agentsLimitedContainer'>
            <h4>Mød vores engangerede madarbejdere</h4>
            <p>Din Mægler er garant for altid veluddanet assistance i dit boligsalg.
                <br />
                Kontakt en af vores medarbejdere.
            </p>
            <div>
                {agents.map((agent, index) => {
                    const imageUrl = agent.image.url; // Access the first image in the array 

                    return (
                        <div className='agentsLimitedContent' key={index}>
                            <Image className='agentImage'
                                src={imageUrl}
                                width={540}
                                height={225} />
                            <p>{agent.name}</p>
                            <p>{agent.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}