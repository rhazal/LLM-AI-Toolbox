<!-- Introduction Text -->
<div align="center">
    <h1>Fullstack AI Toolbox</h1>
    <h4>(Portfolio Project)<h4>
    <h3> 
      <a href='', target='_blank'>
        www.LLM AI TOOLBOX.com 
      <a/>
    <h5>live demo</h5>
    </h3>
        <h6>
            built with <a href="https://nextjs.org">Next.js</a> &
            hosted by <a href="https://vercel.com/">Vercel</a> 
        </h6>
</div>

<!-- Logo -->
<p align='center'>
    <img src="" alt="Demo" title="DemoImage" width="500" height="300">
</p>


<!-- Tech Used in this Project
<p align='center'>
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=ts,tailwind,nextjs,vercel,github,vscode" />
    </a>
</p>
<hr> -->


<!-- -------------------------------------------------------------------------- -->

<h1 align='center'> Welcome & Introductory </h1>

<!-- -------------------------------------------------------------------------- -->



### Brief Introduction:
<!-- -------------------------------------------------------------------------- -->
<hr/>

Introducing "LLM AI Toolbox: SaaS Suite," your comprehensive and user-friendly GitHub repository featuring a vast array of Language Model-based AI tools. This all-in-one platform offers seamless access to multiple LLM AI capabilities, including natural language processing, sentiment analysis, and text generation, all within a single webpage. Embrace the power of AI with our SaaS-based approach, enabling effortless integration and utilization of these cutting-edge tools for your projects and applications. Revolutionize your data processing and analysis with the versatility and convenience of this all-inclusive toolbox, empowering you to level up your AI game and gain deeper insights from textual data.


<br><br>



#### Key Features of this project:
<!-- -------------------------------------------------------------------------- -->
<hr>

<!-- Small container -->
<details>
<summary> Click here to see all the features: </summary>
<br/>

Let's dive into the key features that make this project shine! 💡

<div>
    <ul>
        <li> 💳 Stripe integration: Seamlessly handle secure payment transactions for premium subscriptions.</li>
        <li> 💎 Sleek UI with Tailwind design: Enjoy a visually stunning and modern user interface.</li>
        <li> 🌟 Tailwind animations and transition effects: Enhance the user experience with smooth and captivating animations.</li>
        <li> 📱 Full responsiveness for all devices: The application adapts flawlessly to various screen sizes and devices.</li>
        <li> 🔐 Credential authentication with Supabase: Safeguard user data and ensure secure access to the platform.</li>
        <li> 🚀 Github authentication integration: Simplify the registration and login process using GitHub credentials.</li>
        <li> 📁 File and image upload using Supabase storage: Store user-uploaded files and images securely in the cloud.</li>
        <li> 📝 Client form validation and handling using react-hook-form: Provide a seamless and error-free form submission experience for users.</li>
        <li> 🚦 Server error handling with react-toast: Display meaningful error messages and ensure smooth error handling.</li>
        <li> ▶️ Play song audio: Enjoy an immersive music experience with the ability to play songs directly from the app.</li>
        <li> ❤️ Favorites system: Users can mark their favorite songs and easily access them for future listening.</li>
        <li> 💰 Stripe recurring payment integration: Enable seamless subscription billing and automate payment handling.</li>
        <li> 🔄 Using POST, GET, and DELETE routes in route handlers (app/api): Implement a robust backend API to handle data operations.</li>
        <li> 🌐 Fetch data with server React components: Optimize performance by directly accessing the database without relying on API calls.</li>
        <li> ⚡️ Handling relations between Server and Child components in a real-time environment: Ensure consistent data synchronization and real-time updates.</li>
        <li> 🛑 Cancelling Stripe subscriptions: Allow users to easily cancel their subscription plans.</li>
    </ul> 
</div>

<!-- CLOSING DIV -->
</details>
<br/>


#### Important points to note:
<!-- -------------------------------------------------------------------------- -->
<hr>

<!-- Small container -->
<details>
<summary> Click here to see all the features: </summary>
<br/>

- This project is for educational purposes only and not affiliated with ...


<!-- CLOSING DIV -->
</details>

<br><br>










<!-- -------------------------------------------------------------------------- -->

<h1 align='center'> Development Journey</h1>

<!-- -------------------------------------------------------------------------- -->
<br>

## 1.  Setting up the Environment & Clerk Authentication
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### Setting Up the Environment
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>To kickstart the project, I created a new Next.js app using the `create-next-app` command with additional configurations:</strong>

```shell
npx create-next-app@latest my-app --typescript --tailwind --eslint
```
<br><br>
<strong>Ran into a little issue:</strong>

Issue Description:  Resolving 'Cannot find module' Error
While working on the LLM AI Toolbox project, I encountered the following error:

```js
Error: Cannot find module 'F:\My documents\VSCodeFiles\my_React-projects\LLM AI Toolbox\.next\server\app\(landing)\page_client-reference-manifest.js'
Require stack:
```
<br><br>

<strong>Next, I used the shadcn-ui CLI to set up the project:</strong>

```shell
npx shadcn-ui@latest init
```
During the initialization process, I configured the components.json file to define various project settings, such as style, colors, global CSS file location, and import aliases.

<br><br>

<strong>App Structure</strong>

I organized my Next.js app into the following structure:
```css
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```
In this structure:
-  The app folder contains the layout.tsx and page.tsx files, providing a base layout for the app.
-  UI components are placed in the components/ui folder for better organization.
-  Other components, such as <PageHeader /> and <MainNav />, reside in the components folder.
-  Utility functions are stored in the lib folder, with utils.ts housing the cn helper.
-  Global CSS is located in the styles folder.


<br><br>

<strong>Adding Components</strong>

With the environment and project structure set up, I can easily add components to the project using the shadcn-ui CLI. For example, to add a Button component, I ran:

```shell
npx shadcn-ui@latest add button
```

Once added, I can import and use the Button component in my code:
```jsx
import { Button } from "@/components/ui"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

This setup and organization facilitate a clean and scalable codebase, making it easy to develop and maintain the Next.js app.

<!--  heading container closed -->
</details>
<br/><br/>




### Setting up Clerk Authentication
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

1. Signing up and Registering Account with Clerk.com
I signed up and registered an account with Clerk.com to utilize their authentication services for my project.

2. Enabling Github, Google, and Email Sign-In
I enabled multiple sign-in methods, including Github, Google, and Email, to provide users with convenient authentication options.

3. Creating .env Environment
I created a .env file to store sensitive information, such as API keys and environment-specific variables, securely.

4. Adding Clerk Keys
I added the Clerk API keys to the .env file to connect my application to the Clerk authentication service.

5. Adding Clerk Library to the Project
To integrate Clerk authentication into my Next.js application, I installed the Clerk library using the following command:
```shell
npm install @clerk/nextjs
```

6. Mounting Clerk Provider into the Layout
I wrapped all children components inside the Clerk Provider in the layout.tsx file to make authentication available throughout the application.

7. Setting Up Middleware for Authentication
I implemented middleware to protect specific routes that should be accessible only to authenticated users. This allowed me to define which pages are public and which ones need authentication.

8. Creating Auth Route with Clerk Components
Using Clerk's prebuilt components, <SignIn /> and <SignUp />, I set up an auth route to embed the sign-in and sign-up functionalities into my Next.js application.

9. Updating Environment Variables for Clerk Paths
I added environment variables for the paths required by Clerk, such as signIn, signUp, afterSignUp, and afterSignIn.

10. Creating General Layout File for Styling
I created a general layout file to style the <SignIn /> and <SignUp /> pages/components consistently.

11. Adding Buttons to Home Screen
I added buttons to the home screen to link users to the <SignIn /> and <SignUp /> pages/components for easy navigation.

12. Adding <UserButton /> to the Dashboard
I included the <UserButton /> component on the dashboard, allowing users to access their account details and perform user-related actions.

13. Updating the signout Redirect back to the base path
```tsx
<UserButton 
  afterSignOutUrl="/"
/>
```

By following these steps, I was able to integrate the Clerk authentication service seamlessly into my LLM AI Toolbox project, providing users with a secure and user-friendly authentication experience.


<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>




## 2.  Creating the SideBar and Dashboard
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>

Working on the dashbord and creating a new sidebar (mobile and desktop versions)

### Sidebar funcitonality 
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

created the sidebar and main page sections 

created a `navbar` componenent 
- with hamburger menue that will appear when sidebar dissapears (media queries)
- added the `<userButton>` to the navbar instead

creating a `sidebar` component 
  - adding a logo 
  - creating a name 
  - using some creative styling using `cn` and `twMerge` library - ensuring proper way to add additonal dynamic classnames without risk of being overridden
      ```tsx
      import { Montserrat } from "next/font/google";

      import { cn } from "@/lib/utils";

      const montserrat = Montserrat({ weight: "600", subsets: ["latin"]});  
      ```
      ```tsx
      <h1 className={cn("text-2xl font-bold", montserrat.className)}>Ai Toolbox</h1>
      ```
      - creating an array of the various routs that will be in the app, for example
      ```tsx
      const routes = [
        {
          label: 'Dashboard',
          icon: LayoutDashboard,
          href: '/dashboard',
          color: "text-sky-500"
      ```
  - creating a map funciton to map over the route objects and passing the details into `<links>` and `<divs>`


updating the `sidebar` and creating `MobileSidebar` component 
  - extracting the `<Button>` & `<Menu>` into a new component:  `MobileSidebar`
  - adding the sheet form shadcn - to slide the menue open
    ```shell
    npx shadcn-ui@latest add sheet
    ```
  -  wrapping the entire component inside this sheet tool and creating a trigger 
  -  creating the sheet content and simply importing the sidebar component into the sheetcontent container 



<!--  heading container closed -->
</details>
<br/><br/>

### Fixing hydration and specific highlighting heading/route
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>Running into hydration issues with the `MobileSidebar` component</strong> 

used a little useEffect and useState trick to fix this
```tsx
const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
      setIsMounted(true);
  }, []);

  if (!isMounted) {
      return null;
  }
```
<br><br>

<strong>Highlighting effect</strong>

Creating a highlight effect for the sidebar component so that when on a certain path the sidebar route will be highlighted
  - used usePathname from the next/navigation library
  ```tsx
  import { usePathname } from "next/navigation";

  const Sidebar = () => {
  const pathname = usePathname();
  return (
    //rest of code
    className={cn(
        "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
    )}
    //rest of code
  )
  ```

<!--  heading container closed -->
</details>
<br/><br/>



### Dashboard functionality
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

-  creating some headings and styling 
-  creating a const of tools (eventually i will use some abstraction and put this elsewhere)
```tsx
const tools = [
  {
    label: "Converstations",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-ciolet-500/10",
    href: "/conversation",
  }
]
```
-  importing the card component from shadcn
    ```shell
    npx shadcn-ui@latest add card
    ```

-  creating a map funciton to map over the tools (there will be more soon)
   -  passing details into a Card component
   -  creating some styling for the card and passing the elements into them
   
   -  creating an onclick function to take us to the correct page
      -  using `useRouter` from 'next/navigation
          ```tsx
          <Card
          onClick={() => router.push(tool.href)}
          ```


<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>

## x.  TEMPLATE HEADING
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### Small Heading
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

TEXT TEXT

<!--  heading container closed -->
</details>
<br/><br/>




### SMALL HEADING
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

TEXT TEXT


<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>


## temp

### heading