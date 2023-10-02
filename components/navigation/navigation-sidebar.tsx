import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const NavigationSideBar = async () =>{
    const profile = await currentProfile();

    if (!profile) {
        return redirect("/");
    }

    const servers = await db.server.findMany({})
    return(
        <div>
            Navigation Sidebar
        </div>
    )
}