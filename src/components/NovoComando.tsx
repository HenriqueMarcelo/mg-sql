
"use client";

import { Button, Label, Modal, ModalBody, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export function NovoComando() {
    const [openModal, setOpenModal] = useState(false);
    const [nome, setNome] = useState("");
    const [sql, setSql] = useState("");
    const [obs, setObs] = useState("");

    function onCloseModal() {
        setOpenModal(false);
        setNome("");
        setSql("");
        setObs("");
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} color="blue" className="w-full cursor-pointer">
                <IoMdAdd className="mr-2 h-5 w-5" />
                Adicionar Novo
            </Button>
            <Modal show={openModal} size="xl" onClose={onCloseModal} popup dismissible >
                <ModalHeader>
                    Novo Comando SQL
                </ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nome">Nome</Label>
                            </div>
                            <TextInput
                                id="nome"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="obs">Observação</Label>
                            </div>
                            <TextInput
                                id="obs"
                                value={obs}
                                onChange={(event) => setObs(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="sql">Comando SQL</Label>
                            </div>
                            <Textarea id="sql" rows={4} placeholder="Escreva seu comando SQL aqui..." value={sql} onChange={(event) => setSql(event.target.value)} />
                        </div>
                        <div className="w-full flex justify-end gap-4">
                            <Button color="green">Salvar</Button>
                            <Button color="alternative" onClick={() => setOpenModal(false)}>Cancelar</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}
