'use client';

interface ButtonProps {
    title: string;
    onClick: () => void;
}
  
export default function StyledButton({ title, onClick }:ButtonProps) {
    return (
        <button 
        className="
        bg-orange-100 
        p-2 px-4 
        rounded-lg 
        w-fit 
        whitespace-nowrap 
        hover:bg-orange-400 
        hover:text-white
        active:bg-orange-600
        transition-colors
        duration-75"
        onClick={onClick}>
            {title}
        </button>
    )
}