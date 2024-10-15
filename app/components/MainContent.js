import React from 'react';

const MainContent = () => {
    return (
        <div className="flex flex-col w-full max-w-3xl mx-auto p-4">
            <textarea
                className="w-full h-40 p-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua mensagem aqui..."
            />
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        Salvar
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        Carregar
                    </button>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default MainContent;