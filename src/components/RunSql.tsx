import { Button } from "flowbite-react";
import { FaPlay } from "react-icons/fa";
import { SQLCommand } from "src/App";

type Props = {
    sql: SQLCommand;
}

export function RunSql({ sql }: Props) {
    return (
        <div className="w-full h-screen font-semibold">
            <div className="flex justify-between w-full px-8 py-4 bg-gray-100 text-2xl">
                <h1 className="flex flex-col">
                    <span className="capitalize">
                        {sql.NomeSQL}
                    </span>
                    <small className="text-sm font-normal">{sql.OBS}</small>
                </h1>
                <Button color="green" className="inline-flex gap-2 cursor-pointer">Executar <FaPlay /></Button>
            </div>

            <div className="p-8">
                <div className="w-full h-full bg-gray-700 text-white p-6 font-mono overflow-y-auto font-mono rounded-lg cursor-not-allowed">
                    <p>{sql.SQL}</p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button color="green" className="inline-flex gap-2 cursor-pointer" size="xl">Executar <FaPlay /></Button>
                </div>
            </div>
        </div>
    );
}