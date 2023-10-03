"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useNativeStorage from "@/app/Hooks/useNativeStorage";

const ThemeSwitch = () => {
  const setStorage = useNativeStorage();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Select</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setStorage({ key: "theme", value: "dark" })}
          >
            Dark mode
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setStorage({ key: "theme", value: "light" })}
          >
            Light mode
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitch;
