"use client";

import { ServerWithMembersWithProfiles } from "@/types";

import { ChannelType, memberRole } from "@prisma/client";
import { ActionTooltip } from "../action-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
    label: string;
    role?: memberRole;
    sectionType: "channels" | "members";
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
  };

export const ServerSection = ({
    label,
    role,
    sectionType,
    channelType,
    server
}: ServerSectionProps) =>{
    const {onOpen} =  useModal();

    return(
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
            {role !== memberRole.GUEST && sectionType == "channels" &&(
                <ActionTooltip label="Create channel" side="top">
                    <button 
                        className="text-zin-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        onClick={()=> onOpen("createChannel", {channelType})}
                    >
                        <Plus className="h-4 w-4"/>
                    </button>
                </ActionTooltip>
            )}
            {role !== memberRole.GUEST && sectionType == "members" &&(
                <ActionTooltip label="Manage members" side="top">
                    <button 
                        className="text-zin-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        onClick={()=> onOpen("members", {server})}
                    >
                        <Settings className="h-4 w-4"/>
                    </button>
                </ActionTooltip>
            )}

        </div>
    )
}