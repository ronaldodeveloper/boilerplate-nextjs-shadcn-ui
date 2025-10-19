"use client"
import React, { useState } from 'react';
import Button from './../../components/Button';
import Input from './../../components/Input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { SearchIcon } from 'lucide-react';

const Example = () => {
    
    const [nome, setNome]= useState<string>('')
    const [cpf, setCpf]= useState<string>('')
    console.log(nome) 

    const HandleClick: React.MouseEventHandler = (event) => console.log(event.target)
    const HandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setNome(e.target.value)

    return (
        <div className={`container flex flex-col gap-4 mt-8`}>

            <Button onClick={HandleClick}>Buttom  <span className="icones icone-arrow-right"></span></Button>
            <Button onClick={HandleClick} disabled>Disabled  <span className="icones icone-arrow-right"></span></Button>
            <Button onClick={HandleClick} iconeName="icones icone-arrow-right" iconeDirection="right"></Button>

            <Input 
            label='Nome completo' 
            iconeName='icone-user-circle' 
            onChange={HandleChange}/>

            <Input 
            label='CPF' 
            iconeName='icone-user-circle' 
            required
            onChange={(event)=> setCpf(event.currentTarget.value)}
            error={`${"CPF inválido!"}`}/>


            <InputGroup className='custom'>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon align={"inline-end"}>
                    <SearchIcon />
                </InputGroupAddon>
                {/* <InputGroupAddon align="inline-end">
                    <InputGroupButton>Search</InputGroupButton>
                </InputGroupAddon> */}
            </InputGroup>

        </div>
    );
};

export default Example;