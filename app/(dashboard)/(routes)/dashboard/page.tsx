import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return ( 
        <div>
            <div>
            dashboard
            </div>
            <UserButton 
              afterSignOutUrl="/"
            />
        </div>
     );
}
 
export default DashboardPage;