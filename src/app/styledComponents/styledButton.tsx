'use client';

interface ButtonProps {
    title: string;
    passedfunction: () => void;
}
  
export default function StyledButton({ title, passedfunction }:ButtonProps) {
    return (
        <button className="bg-orange-100 p-2 px-4 rounded-lg w-fit whitespace-nowrap hover:bg-orange-400 hover:text-white " onClick={passedfunction}>{title}</button>
    )
}