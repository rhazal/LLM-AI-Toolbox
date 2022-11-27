import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            Home landing page (unprotected)
            
            {/* LINKS/BUTTONS TO AUTH */}
            <div>

                {/* SIGN IN BUTTON */}
                <Link href="/sign-in">
                    <Button> 
                        Login
                    </Button>
                </Link>
                
                {/* SIGN-UP BUTTON */}
                <Link href="/sign-up">
                    <Button> 
                        Register
                    </Button>
                </Link>

            </div>
        </div>
     );
}
 
export default LandingPage;