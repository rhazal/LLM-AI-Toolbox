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

## 3.  Conversation UI and Open AI API Integration
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### Conversation UI
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

created a conversation route under the `(dashboard)/(routes)/conversation/page.tsx`<br><br>

<strong>creating a `<Heading />` component and importing into the `conversation/page.tsx`</strong>
- I defined the HeadingProps interface to specify the expected props for the Heading component, such as title, description, icon, iconColor, and bgColor.
- I created the Heading component as a functional component, taking the HeadingProps as its props.
- Inside the component, I structured the content by using the Icon prop and displaying it within a rounded container with the specified background color (bgColor) if provided.
- I applied various styles to the component using Tailwind CSS classes to achieve the desired layout and visual presentation. The title was styled as a bold heading, while the description was styled as smaller text with a muted foreground color.
- Lastly, I exported the Heading component at the end of the file, making it accessible for use in other parts of the project.

<br><br>

<strong>Fleshin out the `page.tsx` input section w/ forms</strong> 

- Importing the form from shadcn
  ```shell
  npx shadcn-ui@latest add form
  ```

- Using the z library for handling schema validation with zod and the `zodResolver` from `@hookform/resolvers/zod` to integrate zod with `react-hook-form`

- Creating a form schema in a new file `constants.ts`, where I will handle the form validation

- Set up a form using `react-hook-form` and `zodResolver` to handle form validation based on the provided `formSchema`. The form also has a default value for the prompt field.

- Defined a variable `isLoading` to track the form submission state, which will be used later to disable form inputs during the submission process.

- Defined an `onSubmit` function to handle form submissions. However, the actual API call implementation is yet to be done. <br>Currently, the `onSubmit` function logs the form values to the console.

- Rendering the Form component 
  - Installing the Input component form shadcn
    ```shell
    npx shadcn-ui@latest add input
    ```
  - creating a div with all the form requirements (not going to list out the steps for this)

<!--  heading container closed -->
</details>
<br/><br/>




### Open AI API Integration
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>Set up</strong>
- Creating an Open AI account [open AI](https://platform.openai.com/)
- Getting the API secret key and adding to the .env file
- Installing the Open Ai package into the project
```shell
npm i openai
```
<br><br>

<strong>creating an api folder with:  (`app/api/conversation/route.ts`)</strong>
-  I imported the required modules and libraries, including @clerk/nextjs, next/server, and openai.

-  Setting up the OpenAI configuration with my API key was the next step. I created a new Configuration instance and initialized the OpenAIApi with this configuration.
  ```ts
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  ```

-  I defined the POST function that would handle the API call. Inside this function, I retrieved the `userId` using `auth()` from `@clerk/nextjs`. I also parsed the incoming request body using `req.json()` to extract the messages field.

- Created variouse checks with responses using NextResponse:
  -  To ensure user authentication, I checked if `userId` was present. If not, I returned a 401 Unauthorized response using NextResponse.
  -  To verify that the OpenAI API key was properly configured, I checked the `apiKey` field in the configuration. If it wasn't set, I returned a 500 Internal Server Error response.
  -  I validated the presence of the messages field in the request body. If it was missing, I returned a 400 Bad Request response.

-  Using the openai.createChatCompletion method, I made the API call to OpenAI. I specified the model as `"gpt-3.5-turbo"` and provided the messages.

-  For further customization and handling of the response, I added a TODO comment in the code.

-  I implemented error handling by using a try-catch block. In case of an error, I logged the error and returned a 500 Internal Server Error response.

-  Lastly, I returned a success response with a 200 OK status.

<br><br>

<strong>Completing the response section in `conversation` ui</strong>

preamble;
   - installed and imported the packed axios for http requests
   ```shell
   npm i axios
   ```
   - brought the package `useRouter` into to the file to refresh the browser page (note, from next/navigation)
   - Needed to implement `useState` for the setting of messages, with a specific type defined by openAI doc's and default being an empty array
   ```ts
   const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
   ```

<br><br>

In the onsubmit button 
  -  created a try, catch, finally block 
     -  catch; and `console.log` any error's
     -  finally;  `router.refresh();`
     -  try; 
     ```tsx
      //define what the user message is    
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      //an array of the user's message's 
      const newMessages = [...messages, userMessage];
      //api call
      const response = await axios.post('/api/conversation', { messages: newMessages });            
      //set the message 
      setMessages((current) => [...current, userMessage, response.data]);
      //reset the form back to default 
      form.reset();
      ```
      <br><br>
The Open AI Model is working ! 🥳🤖


<!--  heading container closed -->
</details>
<br/><br/>

### Styling, adding loading states & empty states
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong> Styling, adding loading states & empty states </strong>

- adding empty state, while rendering will check if there are no messages 
  - created a new component `<empty />`

- adding a simple loading state, while message is loading 
  - created a new component `<loader />`

- styling the messages;
  - created conditional styling that will adjust depending on source of message (user or bot)
  ```tsx
  {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
  ```
  - with a bit of help from shadcn created two new components 
    ```shell
    npx shadcn-ui@latest add avatar
    ```
  - created a new component:  `<UserAvatar />` 
  - created a new component:  `<BotAvatar />` 

<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>


## 4.  Developing remaining AI Tools 
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>

### Code Generation
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

Created a new route `app\(dashboard)\(routes)\code\page.tsx`

<strong>Creating the UI and styling </strong>

This was really simple to implement as it also uses the openAI model and just involved copy/pasting the conversation UI and tweaking few things;
  - Image
  - Main Heading
  - Sub Heading text
  - Basic colors
  - Display message

<br><br>

<strong> Creating new API route</strong>

creating a new `route.tsx` in the api folder under a new folder called code

Also very simple to implement as it is very similar to the conversation generator, so essentially copy paste and tweak

- first we want to give the ai some instructions;
  ```ts
  const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
  };
  ```

- then when calling the api we want to feed this instruction first and then the message from the user;
  ```tsx
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [instructionMessage, ...messages]
  });
  ```
<br><br>

<strong> Updating how we render the response from ai </strong>

Currently it will out put the response in a text format and that is hard to read and practically useless, therefore need to update the way we present this response
Need to create a way for the code to come out in a react markdown format.  Luckyly there is a package which can help alot with this

```shell
npm i react-markdown
```
Implementation: 

  ```tsx
  {/* RETRUN IN MARKUP FORMAT */}
  <ReactMarkdown 
    components={{
      pre: ({ node, ...props }) => (
          <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
          <pre {...props} />
          </div>
      ),
      code: ({ node, ...props }) => (
          <code className="bg-black/10 rounded-lg p-1" {...props} />
      )
    }} 
    className="text-sm overflow-hidden leading-7"
  >
    {message.content || ""}
  </ReactMarkdown>
  ```


<!--  heading container closed -->
</details>
<br/><br/>

### Image Generation
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

started creating skeletons for the below and developed accordingly 

#### Created the `constants.tsx`
<details>
<summary> Click here to expand: </summary>
<br>

1. I created a new TypeScript file named constants.ts inside the image folder of the routes directory under dashboard.

2.  I imported the required modules by adding the following line at the beginning of the file:

```ts
import * as z from "zod";
```

3. I defined the form schema using Zod, which validated the form data for the image. It included the following fields:
  - `prompt`: A required string field with a minimum length of 1 character, used for the photo prompt.
  - `amount`: An optional string field with a minimum length of 1 character, used for the number of photos.
  - `resolution`: An optional string field with a minimum length of 1 character, used for the resolution of the photos.
```ts
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Photo prompt is required",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});
```

4. I defined the options for the amount field, which were displayed in a dropdown in the form. The options included the number of photos users could select, each represented as an object with value and label properties:
```ts
export const amountOptions = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  // etc.
];
```

5.  I defined the options for the resolution field, which were displayed in another dropdown in the form. The options represented different image resolutions, each represented as an object with value and label properties:

```ts
export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  // etc.
];
```

</details>
<br/><br/>

#### Created `page.tsx`
<details>
<summary> Click here to expand: </summary>
<br>

1.  I imported the required modules and components

2.  I defined the initial state using the `useState` hook to store the generated photos in the photos state variable.
```tsx
const [photos, setPhotos] = useState<string[]>([]);
```

3.  I set up the form using react-hook-form by creating a form instance with the useForm hook. The form had fields for prompt, amount, and resolution, and I used `zodResolver` to validate the form data against the `formSchema`:
```ts
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    prompt: "",
    amount: "1",
    resolution: "512x512"
  }
});
```

4.  I defined the options for the amount and resolution fields, which were used in dropdowns in the form. The options were stored in the `amountOptions` and `resolutionOptions` arrays

5.  I implemented the onSubmit function to handle form submission. It performed the following steps:
    - Reset the photos state to an empty array.
    - Extracted the form values from the form instance.
    - Made an API call using axios.post to the /api/image endpoint with the form values.
    - Retrieved the image URLs from the API response and stored them in the photos state.
    - Reset the form to its default values.
    <br><br>
    - In case of an error during API call, logged the error to the console.
    - I used the router from next/navigation to refresh the page after the form submission, ensuring that the generated images were displayed.

6. Finally for the render,:
   -  The input section, the same as the code/conversation generator with the exception of added form controls to handle the resolution and amount of images.
   -  The output section displayed the loading spinner when isLoading was true, an empty state message when no images were generated, and the generated images using the Card and Image components from shadcn.

</details>
<br/><br/>

#### Created the api call - `api/images/routes.tsx`
<details>
<summary> Click here to expand: </summary>
<br>

I created a new TypeScript file named route.ts inside the image folder of the api directory & imported the required modules and components.

I initialized a new Configuration object with the apiKey provided in the environment variable process.env.OPENAI_API_KEY.

I created an instance of OpenAIApi using the previously created configuration.

I exported an asynchronous function named POST, which handles POST requests to the /api/image endpoint. Inside the POST function, I ;
   - extracted the userId and the request body from the req object using destructuring.
   - extracted the prompt, amount, and resolution from the request body using default values.
   - checked for user authentication by verifying the existence of userId using auth() from @clerk/nextjs. If the user is not authenticated, I returned a NextResponse with the status code 401 (Unauthorized).
   - ensured that the apiKey is configured. If it is not available, I returned a NextResponse with the status code 500 (Internal Server Error) and a message stating that the OpenAI API key is not configured.
   - validated that the prompt, amount, and resolution fields are present in the request. If any of them are missing, I returned a NextResponse with the status code 400 (Bad Request) and an appropriate error message.
    <br>
   - Then called the openai.createImage() method with the provided prompt, amount, and resolution to generate the required images from the OpenAI API.
   - Finally, I returned a JSON response with the data received from the OpenAI API.

In case of an error during the process, I caught the error, logged it to the console with a specific tag, and returned a NextResponse with the status code 500 (Internal Server Error) and a generic "Internal Error" message.

</details>
<br/><br/>

#### `Updated teh next.config.js` 
<details>
<summary> Click here to expand: </summary>
<br>

- simply just added the domain for the images received from openAI

```js
const nextConfig = {
    images: {
        domains: [
            "oaidalleapiprodscus.blob.core.windows.net",
        ]
    }
}
```

</details>
<br/><br/>


<!--  heading container closed -->
</details>
<br/><br/>

### Music & Video Generation (ReplicateAI)
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>


#### Step 1: Setting up an Account with Replicate
I went to the Replicate website and signed up for an account.

#### Step 2: Getting the API Keys and Adding them to the .env File

After logging in to the Replicate dashboard, I navigated to the API section to generate my API keys.

I added the REPL_API_KEY and REPL_PROJECT_ID to the .env file:


#### Step 3: Setting Up Spend Limits
In the Replicate dashboard, I configured my spend limits to prevent unexpected usage costs.

#### Step 4: Installing the Replicate Package into the Project
Installing the replicate package into the project
```shell
npm i replicate
```


#### Step 5: Setting Up the Route Skeleton for Music/Video Route
Inside the app/api directory, I created a new TypeScript file for the music and video route, such as video/route.ts and music/route.ts

I set up the basic structure of the route file:


#### Step 6: Setting Up the API Using Replicate Documentation

I referred to the Replicate API documentation to understand the endpoints and payloads required for music or video generation.

I implemented the necessary API call using the replicate package

I customized the model and other options as per the Replicate API documentation for music or video generation.

I handled the response and returned the generated music or video data as needed.


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
 

##

