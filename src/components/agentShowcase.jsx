"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function AgentShowcase() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch('https://dinmaegler.onrender.com/agents?_limit=3')
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                setAgents(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {agents.map(agent => {
                console.log('Image URL:', agent.image);
                return (
                    <div key={agent.id}>
                        <Image src={agent.image || 'https://via.placeholder.com/150'} alt={agent.name} layout="fill" objectFit="cover" />
                        <p>{agent.name}</p>
                    </div>
                );
            })}
        </div>
    );
}
