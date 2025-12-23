import { useEffect, useState } from 'react';

export function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const response = await window.executeSQL('SELECT * FROM grupo');
                console.log('SQL Response:', response);
            } catch (error) {
                console.log('Error executing SQL:', error);
            }
        })();
    }, []);

    return (
        <div className='p-4 bg-gray-100'>
            <h1 className="text-3xl font-bold text-gray-800">
                Hello, React! ⚛️
            </h1>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" onClick={() => setCounter(counter + 1)}>Click counter {counter}</button>
        </div>
    );
}
