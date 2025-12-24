import { useContext, useState } from 'react';
import { MenuLateral } from './components/MenuLateral';
import { RunSql } from './components/RunSql';
import { LoaderContext } from './contexts/LoaderContext';
import { LoaderLine } from './components/LoaderLine';

export type SQLCommand = {
    NomeSQL: string;
    OBS: string;
    SQL: string;
};

export function Router() {
    const [sqlSelecionado, setSqlSelecionado] = useState<SQLCommand | undefined>();
    const { shown } = useContext(LoaderContext);

    return (
        <>
            {shown && <LoaderLine />}
            <div className="w-full h-screen flex justify-between">
                <MenuLateral setSqlSelecionado={setSqlSelecionado} />
                {sqlSelecionado ? <RunSql sql={sqlSelecionado} /> : (
                    <section className="flex flex-1 justify-center items-center text-gray-500 text-xl p-4">
                        Selecione um comando no menu ao lado ou crie um novo!
                    </section>
                )}
            </div>
        </>
    );
}
