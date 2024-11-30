import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
}


export interface searchManufacturerProps{
    selected: string;
    setSelected: (manufacturer:string) => void;
}

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:4;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string
    model:string;
    transmission:string;
    year:number;

}


export interface FilterProps {
    manufacurer:string;
    year:number;
    fuel:string;
    limit:number
    model:string;
}


export interface optionProps{
    title: string;
    value: string | number;
}


export interface CustomFilterProps{
    title: string;
    options: optionProps[];
    setFilter : (value : any)=> void
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext : boolean;
    setLimit : (newLimit:number) => void;
}