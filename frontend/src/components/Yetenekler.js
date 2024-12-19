import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Yetenekler = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/skills/')
            .then(response => setSkills(response.data))
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 w-full">
            <h1 className="font-press text-2xl text-center mt-2 mb-3 lg:mb-8 text-neutral-900 dark:text-neutral-100">
                Skills
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
                {skills.map(skill => (
                    skill.languages && skill.languages.length > 0 ? (
                        skill.languages.map(language => (
                            <div
                                key={language.id}
                                className="rounded-2xl border-4 border-neutral-800 p-5 w-20 h-20"
                            >
                                {/* Dil bilgileri */}
                                <div className="mb-3">
                                    <span
                                        className="text-7xl text-cyan-400"
                                    >
                                        <img
                                            src={language.logo}
                                            alt={language.name}
                                            className="h-8 w-8"
                                        />
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            No languages listed
                        </span>
                    )
                ))}
            </div>
        </div>
    );
};

export default Yetenekler;
