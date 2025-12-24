
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { NovoComando } from "./NovoComando";
import { useCallback, useEffect, useState } from "react";
import { SQLCommand } from "src/App";

type Props = {
    setSqlSelecionado: (sql: SQLCommand) => void;
}

export function MenuLateral({ setSqlSelecionado }: Props) {
    const [sqls, setSqls] = useState([] as SQLCommand[])

    const handleGetSqls = useCallback(async function handleGetSqls() {
        try {
            const response = await window.executeSQL('SELECT * FROM SQL');
            setSqls(response.data as SQLCommand[]);
            console.log('SQL Response:', response);
        } catch (error) {
            console.log('Error executing SQL:', error);
        }
    }, [setSqls])

    useEffect(() => {
        handleGetSqls();
    }, [handleGetSqls]);

    return (
        <Sidebar aria-label="Relatórios">
            <SidebarItems>
                <SidebarItemGroup>
                    <NovoComando onCommandSaved={handleGetSqls} />
                </SidebarItemGroup>
                <SidebarItemGroup >
                    {sqls.map((sqlCommand, index) => (
                        <SidebarItem key={index} onClick={() => setSqlSelecionado(sqlCommand)} className="cursor-pointer capitalize">
                            {sqlCommand.NomeSQL}
                        </SidebarItem>
                    ))}
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
}
