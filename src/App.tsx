import { useEffect, useState } from 'react';

import { Button } from "flowbite-react";



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
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Hello, React! ⚛️
            </h1>
            <Button onClick={() => setCounter(counter + 1)}>Click counter {counter}</Button>
        </div >
    );
}
