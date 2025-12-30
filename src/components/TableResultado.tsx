
import { DBResponse } from "src/interface";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

type Props = {
    data: DBResponse;
}

function GenerateTableHeaders({ data }: { data: DBResponse }) {
    if (!data) return null;
    return data.columns.map((text) => (
        <TableHeadCell key={text}>{text}</TableHeadCell>
    ));
}

function GenerateTableRows({ data }: { data: DBResponse }) {
    return data.data.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
            {Object.values(row).map((value, cellIndex) => (
                <TableCell key={cellIndex}>{value}</TableCell>
            ))}
        </TableRow>
    ));
}

export function TableResultado({ data }: Props) {
    return (

        <article className="flex-1 h-32 w-full overflow-auto">
            <Table>
                <TableHead>
                    <TableRow>
                        <GenerateTableHeaders data={data} />
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    <GenerateTableRows data={data} />
                </TableBody>
            </Table>
        </article>
    );
}