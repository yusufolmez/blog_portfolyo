import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../index.css';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const drawPixelatedImage = (img, canvas) => {
        const ctx = canvas.getContext('2d');
        const pixelSize = 50; // Her 64 piksel için bir renk belirlemek için
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Görseli pikselleştirmek
        for (let y = 0; y < img.height; y += pixelSize) {
            for (let x = 0; x < img.width; x += pixelSize) {
                const red = data[((img.width * y) + x) * 4];
                const green = data[((img.width * y) + x) * 4 + 1];
                const blue = data[((img.width * y) + x) * 4 + 2];

                // 64 pikseli bir renge dönüştür
                ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                ctx.fillRect(x, y, pixelSize, pixelSize);
            }
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 w-full">
            <h1 className="font-press text-2xl text-center mt-2 mb-3 lg:mb-8 text-neutral-900 dark:text-neutral-100">
                Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {projects.map(project => (
                    <div key={project.id} className="bg-transparent rounded-lg shadow dark:border-gray-700 flex flex-col">
                        <a href={project.url} >
                        {/* Görsel Kapsayıcı */}
                        <div className="w-full h-full relative group">
                            {/* Orijinal Fotoğraf */}
                            <img
                                className="w-full h-full rounded-t-lg object-cover transition-opacity duration-300 group-hover:opacity-100"
                                src={project.image}
                                alt={project.title}
                                style={{
                                    zIndex: 1,
                                    
                                }} 
                            />
                            {/* Pikselleştirilmiş Görsel */}
                            <canvas
                                className="w-full h-full rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                                ref={canvas => {
                                    if (canvas) {
                                        const img = new Image();
                                        img.crossOrigin = 'Anonymous'; // Görseli CORS ile uyumlu şekilde yükle
                                        img.src = project.image;

                                        img.onload = () => {
                                            drawPixelatedImage(img, canvas);
                                        };
                                    }
                                }}
                                alt={project.title}
                                style={{
                                    zIndex: 2,
                                    filter: 'blur(0.2px)',
                                }} 
                            />
                        </div>
                        </a>
                        <div className="p-3 flex-grow">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
                            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {project.languages && project.languages.length > 0 ? (
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        {project.languages.map(language => (
                                            <span key={language.id} className="flex items-center">
                                                <img
                                                    src={language.logo}
                                                    alt={language.name}
                                                    className="object-cover h-12 w-12"
                                                />
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No languages listed</span>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
