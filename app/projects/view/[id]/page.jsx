"use client"
import React from 'react'
import { projectList } from '../../projectList'
import { useParams } from 'next/navigation'

export default function ShowProjects() {
    const { id } = useParams()
    const pro = projectList.find(p => p.id === parseInt(id))
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <img src={pro.image} alt="Project preview" className="rounded-lg w-64" />
                    <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                        Ver Projeto
                    </button>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">
                        {pro.title}</h2>
                    <p className="mb-4">
                        {pro.description}
                    </p>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Tecnologias Utilizadas:</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{pro.technologies[0]}</span>
                            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{pro.technologies[1]}</span>
                        </div>
                    </div>
                    <a href="#" className="text-blue-400 hover:underline">Ver mais detalhes →</a>
                </div>
            </div>
        </div>
    )
}
