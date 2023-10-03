"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { memberRole } from "@prisma/client";
import 
    { DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuSeparator,
     DropdownMenuTrigger
    } from "../ui/dropdown-menu";
import { ChevronDown,
         LogOut,
         PlusCircle,
         Settings,
         Trash,
         User,
         UserPlus
        } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: memberRole;
};

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) =>{
    const { onOpen} = useModal();

    const isAdmin = role === memberRole.ADMIN;
    const isModerator = isAdmin || role === memberRole.MODERATOR


    return(
        <DropdownMenu>
            <DropdownMenuTrigger
            className="focus:outline-none"
            asChild
            >
                <button
                className="w-full text-md font-semibold px-3 flex items-center h-12 border-natural-200 
                dark:text-white-500 border-b-2 dark:hover:text-white hover:zinc-700/10 dark:hover:bg-zinc-700/50 transition"
                >
                    {server.name}
                    <ChevronDown 
                    className="h-5 w-5 ml-auto"
                    />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 text-xs font-medium  dark:text-natural-400 space-y-[2px]"
            >
                {isModerator && (
                    <DropdownMenuItem
                        onClick={() => onOpen("invite", { server }) }
                        className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
                    >
                        Invite People
                        <UserPlus className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                    <DropdownMenuItem
                        className="px-3 py-2 text-sm cursor-pointer"
                    >
                        Server settings
                        <Settings className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isAdmin && (
                    <DropdownMenuItem
                        className=" px-3 py-2 text-sm cursor-pointer"
                    >
                        Manage members
                        <User className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem
                        className=" px-3 py-2 text-sm cursor-pointer"
                    >
                        Create channel
                        <PlusCircle className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuSeparator/>
                )}
                {isAdmin && (
                    <DropdownMenuItem
                        className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
                    >
                        Delete server
                        <Trash className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {!isAdmin && (
                    <DropdownMenuItem
                        className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
                    >
                        Leave server
                        <LogOut className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                
                
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}