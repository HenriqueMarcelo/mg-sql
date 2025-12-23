import { useEffect, useState } from 'react';
import { MenuLateral } from './components/MenuLateral';
import { NovoComando } from './components/NovoComando';
import { RunSql } from './components/RunSql';

export type SQLCommand = {
    NomeSQL: string;
    OBS: string;
    SQL: string;
};

export function App() {
    const [sqlSelecionado, setSqlSelecionado] = useState<SQLCommand | undefined>();

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
        <div className="w-full h-screen flex justify-between">
            <MenuLateral setSqlSelecionado={setSqlSelecionado} />
            {sqlSelecionado ? <RunSql sql={sqlSelecionado} /> : (
                <section className="flex flex-1 justify-center items-center text-gray-500 text-xl p-4">
                    Selecione um comando no menu ao lado ou crie um novo!
                </section>
            )}
        </div>
    );
}
