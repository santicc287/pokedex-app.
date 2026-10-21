import {IStat} from "./stat.model";

export interface IPokemon {
    id: number;
    name: string;
    type1: string;
// ?: indica que es una opcion 
    type2?: string;
    sprite: string;
    height: string;
    weight: string;
    abilities: string[];
    hidenAnility?: string;


    stat:IStat[]
    }

