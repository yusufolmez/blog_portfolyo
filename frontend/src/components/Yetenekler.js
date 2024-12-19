import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Yetenekler = () => {
    const [mainSkills, setMainSkills] = useState([]);
    const [sideSkills, setSideSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/skills/')
            .then(response => {
                const data = response.data;
                let main = [];
                let side = [];
                
                // Veriyi gruba göre ayıralım
                data.forEach(skill => {
                    if (skill.group === 'Main') {
                        main.push(skill);
                    } else if (skill.group === 'Side') {
                        side.push(skill);
                    }
                });

                setMainSkills(main);
                setSideSkills(side);

            })
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    const calculateDuration = (index) => {
        return (index + 1) * 2; 

        
    };
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 w-full">
            <h1 className="font-press text-2xl text-center mt-2 mb-3 lg:mb-8 text-neutral-900 dark:text-neutral-100">
                Skills
            </h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 2 }}
                className="flex flex-wrap overflow-hidden items-center justify-center gap-4 pb-4 pt-4"
            >
                {mainSkills.map((skill, mainIndex) => (
                    skill.languages && skill.languages.length > 0 ? (
                        skill.languages.map((language, index) => {
                            const duration = calculateDuration(mainIndex);
                            return (
                                <motion.div
                                    key={language.id}
                                    initial={{ y: -10 }}
                                    animate={{ y: [10, -10] }}
                                    transition={{
                                        duration: duration,
                                        ease: 'linear',
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                    className="rounded-2xl border-4 border-neutral-800 p-5 w-20 h-20"
                                >
                                    <div className="mb-3">
                                        <span className="text-7xl text-cyan-400">
                                            <img
                                                src={language.logo}
                                                alt={language.name}
                                                className="h-8 w-8"
                                            />
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            No languages listed
                        </span>
                    )
                ))}
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0 ,x: -100}}
            transition={{ duration: 2}}
            className="flex flex-wrap overflow-hidden items-center justify-center gap-4 pb-4 pt-4">
                {sideSkills.map((skill) => (
                    skill.languages && skill.languages.length > 0 ? (
                        skill.languages.map((language, index) => {
                            const duration = calculateDuration(index); //
                            
                            return (
                                <motion.div
                                    key={language.id}
                                    initial={{ y: -5 }}
                                    animate={{ y: [5, -5] }}
                                    transition={{
                                        duration: duration,
                                        ease: 'linear',
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                    className="rounded-2xl border-4 border-neutral-800 p-5 w-20 h-20"
                                >
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
                                </motion.div>
                            );
                        })
                    ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            No languages listed
                        </span>
                    )
                ))}
            </motion.div>
        </div>
    );
};

export default Yetenekler;
