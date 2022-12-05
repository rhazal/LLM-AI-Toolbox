import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const isPro = await checkSubscription();
    const apiLimitCount = await getApiLimitCount();


    return ( 
        <div className="h-full relative">

            {/* SIDE BAR STUFF */}
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </div>


            {/* MAIN PAGE STUFF */}
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>

        </div>
     );
}
 
export default DashboardLayout;