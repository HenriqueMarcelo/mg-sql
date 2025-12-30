import { Button } from "flowbite-react";
import { useCallback, useContext, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { SQLCommand } from "src/App";
import { LoaderContext } from "../contexts/LoaderContext";
import { DBResponse } from "src/interface";
import { TableResultado } from "./TableResultado";

type Props = {
    sql: SQLCommand;
}

export function RunSql({ sql }: Props) {
    const { showLoader, hideLoader } = useContext(LoaderContext);
    const [response, setResponse] = useState<DBResponse | undefined>()

    const runCommand = useCallback(async function handleGetSqls() {
        showLoader()
        try {
            const respondeDB = await window.executeSQL(sql.SQL);
            setResponse(respondeDB);
            console.log('SQL Response:', respondeDB);
        } catch (error) {
            console.log('Error executing SQL:', error);
        } finally {
            hideLoader()
        }
    }, [sql, setResponse])

    return (

        <div className="font-semibold h-full w-full overflow-y-auto flex flex-col gap-6 px-6">

            <header className="flex justify-between px-8 py-4 bg-gray-100 text-2xl -mx-6 w-[calc(100%+3rem)]">
                <h1 className="flex flex-col">
                    <span className="capitalize">
                        {sql.NomeSQL}
                    </span>
                    <small className="text-sm font-normal">{sql.OBS}</small>
                </h1>
                <Button color="green" className="inline-flex gap-2 cursor-pointer" onClick={runCommand}>Executar <FaPlay /></Button>
            </header>

            <div className="w-full min-h-24 bg-gray-700 text-white p-6 overflow-y-auto font-mono rounded-lg cursor-not-allowed">
                <p>{sql.SQL}</p>
            </div>

            <div className="flex justify-center">
                <Button color="green" className="inline-flex gap-2 cursor-pointer" size="xl" onClick={runCommand}>Executar <FaPlay /></Button>
            </div>

            {response && <TableResultado data={response} />}
        </div>
    );
}