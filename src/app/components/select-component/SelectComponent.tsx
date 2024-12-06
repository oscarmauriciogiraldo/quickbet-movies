import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { Genres } from "@/interface/types";


const SelectComponent = async () => {

  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
    
  return (

    <DropdownMenu>
      <DropdownMenuTrigger className=" flex items-center justify-between px-2 py-[10px] w-[100%] bg-[#1c1c1c] rounded-none border-0">
        Genres... <FaChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-[300px] bg-[#1c1c1c] rounded-none border-0">
        <DropdownMenuLabel className="text-white">Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((genre) => (
          <DropdownMenuItem 
            key={genre?.id} 
            className=" flex justify-start cursor-pointer w-[100%] hover:bg-[#454545] rounded-none"
          >
            <Link className="text-white " href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre?.name}
            </Link>
          </DropdownMenuItem>

        ))}
        
      </DropdownMenuContent>
    </DropdownMenu>
    
  );
};

export default SelectComponent;
