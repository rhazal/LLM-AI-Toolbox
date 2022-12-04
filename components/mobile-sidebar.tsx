"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

interface MobilesideBarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({apiLimitCount}: MobilesideBarProps) => {
    const [isMounted, setIsMounted] = useState(false);

    //little trick for hydration 
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return ( 
        <Sheet>
          
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0">
            <Sidebar apiLimitCount={apiLimitCount} />
          </SheetContent>

        </Sheet>
     );
}
 
export default MobileSidebar;