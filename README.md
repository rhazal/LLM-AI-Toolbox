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

<br>

#### Step 2: Getting the API Keys and Adding them to the .env File

After logging in to the Replicate dashboard, I navigated to the API section to generate my API keys.

I added the REPL_API_KEY and REPL_PROJECT_ID to the .env file:

I customized the model and other options as per the Replicate API documentation for music or video generation.

<br>

#### Step 3: Setting Up Spend Limits
In the Replicate dashboard, I configured my spend limits to prevent unexpected usage costs.

#### Step 4: Installing the Replicate Package into the Project
Installing the replicate package into the project
```shell
npm i replicate
```
<br>

#### Step 5: Setting Up the Route Skeleton for Music/Video Route
Inside the app/api directory, I created a new TypeScript file for the music and video route, such as video/route.ts and music/route.ts

I set up the basic structure of the route file:

<br>

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


## 5.  API Limiter - Functionality & UI
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>



### Setting up Prisma and PlanetScale
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>


<strong>Installing Prisma into the project</strong>

Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.

```shell
npm i -D prisma
npx prisma init
```

<strong>Setting up an account with Planet Scale</strong>

PlanetScale is the world’s most advanced serverless MySQL platform

```shell
npm i @prisma/client
```

  -  creating a database
  -  configure to a prisma 
  -  get the database url (into the .env file)
  -  Update the scheme.prisma file 



-  creating a new file prismadb.ts in the lib folder
   -  preventing multiple prisma clients initialized in the dev environment 
   -  creating a model for our user api limit in the shcema.prisma 
    ```prisma
    model UserApiLimit {
      id        String      @id @default(cuid())
      userId    String   @unique
      count     Int      @default(0)
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
    }
    ```
  -  pushing this to the db with
  ```shell
  npx prisma db push
  ```
  - adding the types into the project with
  ```shell
  npx prisma generate
  ```
   - Checking the data in the db with
    ```shell
    npx prisma studio
    ```






<!--  heading container closed -->
</details>
<br/><br/>




### Protecting the maximum count in the project
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>Creating a `constants.ts` file</strong>

   - setting the limit to 5 
  ```ts
  export const MAX_FREE_COUNTS = 5;
  ```
   - adding the regularly used tools and lucide-react icons into this file too 

<br><br>

<strong>Creating an `api-limit.ts` file in the `/libs folder`;</strong>

1.  Imported Dependencies: I began by importing the necessary dependencies

2.  Implemented incrementApiLimit Function: 
    - I proceeded to define the incrementApiLimit function, which was responsible for increasing the API usage count for a specific user. 
    - To ensure the user was signed in, I used auth() to check their authentication status. 
    - Once confirmed, I retrieved the user's API usage count from the database using prismadb.userApiLimit.findUnique(). 
    - If the user existed in the database, I incremented their count by 1 using prismadb.userApiLimit.update(). 
    - For new users, I created a new entry with a count of 1 using prismadb.userApiLimit.create().

3.  Implemented checkApiLimit Function: 
    - Next, I defined the checkApiLimit function, which was responsible for checking if a user was within the free API usage limit. 
    - Similar to the incrementApiLimit function, I first checked if the user was signed in using auth(). 
    - Once confirmed, I retrieved the user's API usage count from the database using prismadb.userApiLimit.findUnique(). 
    - If the user did not exist in the database or their count was less than MAX_FREE_COUNTS, which represented the maximum allowed free counts, I returned true, indicating that the user was within the free limit. 
    - Otherwise, I returned false, indicating that the user had exceeded the free limit.


<br>
<br>

<strong>Updating all the API calls to make use of api-limits</strong>

Into all API Tools:  Conversation, Code , Video , Audio & Image api calls

Imorting the functions from `api-limits.ts`;
```tsx
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
```

<br>

Inside the POST(request):
```tsx
  //CHECK"S & INCREASING COUNT 
  export async function POST(req:Request) {
    try{

      //previouse code 

        const freeTrial = await checkApiLimit();
        //const isPro = await checkSubscription();
        if (!freeTrial) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }

        //api call

        //increaese the api limit 
        await incrementApiLimit();

      //remaining code
```

<!--  heading container closed -->
</details>
<br/><br/>


### Building the Front-end Interface for Api limit tracker 
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>Adding a new action to the `lib/api-limits.ts`</strong>

1. *Imported Dependencies:* <br>I imported `auth` from `@clerk/nextjs` and `prismadb` from `@/lib/prismadb`.

2. *Defined the Function:* <br>I created the `getApiLimitCount` function with the `async` keyword.

3. *Retrieved User ID:*<br>Using `auth()`, I obtained the `userId` of the authenticated user.

4. *Checked User Authentication:* <br>To ensure the user was authenticated, I checked for the presence of `userId`. If it wasn't available, I returned 0.

5. *Fetched User API Limit:* <br> Using `prismadb.userApiLimit.findUnique()`, I retrieved the user's API limit based on their `userId`.

6. *Handled User Not Found:* <br> In case the user was not found in the database, I returned 0.

7. *Returned API Usage Count:* <br> Finally, if the user was found, I returned the `count` property from the `userApiLimit` object, representing the API usage count.

<br>

>Now have to run this action inside a server component so that I can pass it into the sidebar(which is a client side component)

<strong>In the `app/(dashboard)/layouts.tsx` file;</strong>
- getting the apiCount 
```tsx
const apiLimitCount = await getApiLimitCount();
```
- passing it into the `<SideBar />` component;
```tsx
<Sidebar apiLimitCount={apiLimitCount/>
```
<br><br>

In the `components\sidebar.tsx` file;
-  create an interface to accept the apiLimitCount as a prop
-  inject the prop `apiLimiCount` along with the interface
-  Creating a new component to display the count (called `<FreeCounter />`)

<br><br>

<strong>Creating a new component called `<FreeCounter />` - passing in `apiLimitCount` ;</strong>

```shell
npx shadcn-ui@latest add progress
```

1. *File Creation*: <br> I started by creating a new file named `free-counter.tsx` inside the `components` folder.

2. *Import Dependencies*: <br> Next, I imported the necessary dependencies, including React hooks and various components from the project's UI library, as well as the constant `MAX_FREE_COUNTS` from the `constants` file.

3. *Interface Definition*: <br> I defined an interface called `FreeCounterProps` to describe the props that the `FreeCounter` component would receive. Specifically, it had a `apiLimitCount` property of type number.

4. *Functional Component*: <br> Using the `FreeCounterProps` interface, I created the functional component `FreeCounter`. Within this component, I destructured the `apiLimitCount` prop.

5. *Hydration Trick*: <br> To prevent hydration issues, I used the `useState` and `useEffect` hooks. I created a state variable called `mounted` and set it to `true` after the component was mounted.

6. *Conditional Rendering*: <br> I implemented a conditional rendering check using an `if` statement. It allowed me to render the component contents only when the `mounted` state was `true`. Otherwise, I returned `null`.

7. *Rendering Component Contents*: <br> Inside the `return` statement, I structured the UI by rendering the `Card`, `CardContent`, `Button`, `Progress`, and `Zap` components, along with the necessary content.

8. *Component Export*: <br> Finally, I exported the `FreeCounter` component to make it accessible for use in other parts of the application.




<!--  heading container closed -->
</details>
<br/><br/>


<!--  SECTION container closed -->
</details>
<br/><br/>



## 6.  Premium/Pro Modal UI 
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### <strong>Creating new hook:  `use-pro-modal.ts`; </strong>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>Give us global state controls to open and close the modal;
>Requires a state management tool, I have chosen to use zustand again:
>As this app doesnt have massive requirements for state control.
>created a `zustand` store to manage the modal state, allowing other components to easily interact with the modal and control its visibility.

```shell
npm i zustand 
```

1. *Zustand Store*: <br> I used the `zustand` library to create a store called `useProModalStore`. This store manages the state for the `ProModal` component, including whether it is open or closed.

2. *Interface Definition*: <br> I defined an interface called `useProModalStore`, which describes the shape of the state managed by the store. It consists of two properties: `isOpen` (a boolean indicating whether the modal is open) and two functions `onOpen` and `onClose` (to open and close the modal, respectively).

3. *Store Creation*: <br> I used the `create` function from `zustand` to initialize the store. The `create` function takes a function as its argument, which receives a `set` function as its parameter.

4. *State Management*: <br> Inside the `create` function, I used the `set` function to manage the state of the store. The initial state is defined with `isOpen` set to `false`.

5. *Event Handlers*: <br> I defined two event handler functions, `onOpen` and `onClose`, which use the `set` function to update the `isOpen` state. When `onOpen` is called, it sets `isOpen` to `true`, and when `onClose` is called, it sets `isOpen` to `false`.

6. *Store Export*: <br> Finally, I exported the `useProModal` store, making it available for use in other parts of the application. Components can access the state and functions provided by this store to manage the visibility of the modal.



<!--  heading container closed -->
</details>
<br/><br/>

### <strong>Creating a provider for the modal in components folder: `modal-provider.tsx` ;</strong>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>created a `ModalProvider` component that takes care of rendering the `ProModal` component once it is mounted. This ensures that the modal is only shown when the component is ready and avoids potential issues with rendering in SSR (Server-Side Rendering) environments.

1. *Modal Provider*: <br> I created a `ModalProvider` component responsible for rendering the `ProModal` component, which is used to display a modal in the application.

2. *"use client"*: <br> The component starts with the `"use client"` import, indicating that it is used in the client-side of the application.

3. *State Management*: <br> Inside the `ModalProvider`, I used the `useState` hook to manage the state of `isMounted`.<br> This state determines whether the component is mounted or not.

4. *Mounting Detection*: <br> I used the `useEffect` hook with an empty dependency array to detect when the component is mounted.<br> When the component mounts, the `isMounted` state is set to `true`.

5. *Conditional Rendering*: <br> Before rendering the `ProModal` component, there's a conditional check to ensure the component is mounted (`isMounted === true`). <br>If it is not mounted, `null` is returned, effectively preventing rendering until the component is mounted.

6. *ProModal Component*: <br> After the conditional check, the `ProModal` component is rendered. The `ProModal` component likely handles displaying the modal content and its functionality.


<!--  heading container closed -->
</details>
<br/><br/>

### <strong>Creating the: `pro-modal.tsx` ;</strong>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>created a `ProModal` component that provides users with the option to upgrade to a premium subscription. The modal displays the available premium tools and allows users to initiate the subscription process by clicking the "Upgrade" button.

1. *ProModal Component*: <br> I created a `ProModal` component that is used to display a subscription upgrade dialog to users.

2. *"use client"*: <br> The component starts with the `"use client"` import, indicating that it is used in the client-side of the application.

3. *State Management*: <br> Inside the `ProModal`, I used the `useState` hook to manage the state of `loading` <br> indicates whether the subscription button is in a loading state or not.

4. *Subscription Function*: <br> I defined the `onSubscribe` function, which is called when the user clicks the "Upgrade" button.<br> This function sends a request to the `/api/stripe` endpoint to initiate the subscription process using Axios.<br> If successful, the user is redirected to the returned URL.

5. *Dialog Component*: <br> The `ProModal` component utilizes the `Dialog` component from the `@/components/ui/dialog` module.<br> The dialog displays the subscription details to the user.

6. *Dialog Header*: <br> The dialog header contains the title "Upgrade to Genius" with a "pro" badge indicating the premium subscription.

7. *Dialog Description*: <br> The dialog description section displays a list of available tools with corresponding icons and a checkmark indicating they are part of the premium package. <br> The list of tools is dynamically generated from the `tools` constant.

8. *Dialog Footer*: <br> The dialog footer contains the "Upgrade" button, which calls the `onSubscribe` function when clicked. The button is also disabled when the `loading` state is `true`.

<!--  heading container closed -->
</details>
<br/><br/>

### <strong>Implementing the pro-modal around the app</strong>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

-  Firstly, updated and imported the `<ModalProvider />` into the root `layout.tsx` 

-  Added an onClick funciton to the `SideBar` -> `FreeCounter` -> Button, that will open the Modal

-  Every time we hit a 403 error (limit reached on API calls)
I very cleverly put an if statement into all the api calls that will give a status of error 403
```tsx
if (!freeTrial) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }
```

- Now just have to update the variouse routs catch blocks to open the modal if encountering status: 403 in all the AI TOOLS.

  Specifically at the `app\(dashboard)\(routes)\(EACH API TOOL)\page.tsx`;

  ```tsx
  //adding the imports
  import { useProModal } from "@/hooks/use-pro-modal";
  import toast from "react-hot-toast";

  //calling the useProModal inside the functional component
  const proModal = useProModal();
  
  //then in the onSubmit button - catch block 
  catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  ```
<!--  heading container closed -->
</details>
<br/><br/>


### <strong>Catching a bug:  Forgot to pass api-counter into mobilesidebar </strong>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

> This looks like prop drilling an to an extent it is, however take into cosideration the effort to create a state management tool for this project.  As well as having to navigate server/client side components.

Inside the `navbar` component:
  passing in the api counter into the navbar
  ```tsx
  const apiLimitCount = await getApiLimitCount();

  //...
  <MobileSidebar apiLimitCount={apiLimitCount} />
  ```

Inside the `mobile-sidebar.tsx` component:
   - creating an interface to receive the apiLimitCounter
   - receiving the api-counter as props
   - pass into the Sidebar component (already set up to receive the props - inface required)
  ```tsx
  <Sidebar apiLimitCount={apiLimitCount} />
  ``` 




<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>
 

## 7.  Stripe Integration
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### Setting up Stripe
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>



<strong>Account setup; </strong>

- signed in to my dashboard

- Created a new store and located my publishable and secret key, injected into the .env

- Importing the stripe package into the project
  ```shell
  npm i stripe
  ```

<br><br>

<strong> Instantiating stripe in `lib/stripe.ts`</strong>

>responsible for setting up the necessary infrastructure to integrate Stripe: - creates a new instance of the Stripe class, - passing the Stripe secret key from the environment variables - and additional configuration options.

```ts
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});

```

<br><br>

<strong> creating a `userSubscription` modal in prisma:</strong>

Before we get going, I created a `userSubscription` modal in the `schema.prisma`

Responsible for storing all the customers data required to work with stripe 


```prisma
model UserSubscription {
  id        String      @id @default(cuid())
  userId    String   @unique
  stripeCustomerId       String?   @unique @map(name: "stripe_customer_id")
  stripeSubscriptionId   String?   @unique @map(name: "stripe_subscription_id")
  stripePriceId          String?   @map(name: "stripe_price_id")
  stripeCurrentPeriodEnd DateTime? @map(name: "stripe_current_period_end")
}
```

Followed by:
-  Adding the types to our project
    ```shell
    npx prisma generate
    ```

- Pushing modal to the prisma db
  ```shell
  npx prisma db push
  ```

- Check everything worked in the studio 
  ```shell
  npx prisma stuido
  ```

<!--  heading container closed -->
</details>
<br/><br/>


### Setting up route for stripe - <em>backend API endpoint</em>
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

In the `app\api\stripe\route.ts`

>the `GET` function serves as a backend API endpoint for handling user subscriptions. It checks if the user already has a Stripe subscription and creates the appropriate session for the user, allowing them to manage or initiate a subscription for the "AI Toolbox Pro" with unlimited AI generations.


1. *GET Function*: <br>defined a `GET` function that handles the server-side logic for creating and managing Stripe subscriptions.

2. *Auth and User*: <br> The function imports `auth` and `currentUser` from `@clerk/nextjs` to authenticate the user making the request and fetch the current user data.

3. *Authorization Check*: <br> The function checks if there is a valid `userId` and a corresponding `user`. If not, it returns a "Unauthorized" response with a status code of 401.

4. *Stripe Subscription Check*: <br> The function then queries the `prismadb` to find a subscription associated with the current `userId`.

5. *Billing Portal or Checkout Session*: <br> <strong>If a Stripe subscription exists</strong> (`userSubscription.stripeCustomerId` is present)<br>- the function creates a billing portal session using Stripe's `billingPortal.sessions.create`. <br>This allows the user to manage their subscription and cancel if needed. The URL for the billing portal session is returned in the response.<br>
<br>
<strong>If there is no existing Stripe subscription</strong><br> - the function creates a new checkout session using Stripe's `checkout.sessions.create`. <br>This creates a new subscription for the user with a price of $20 (in USD) per month for "AI Toolbox Pro" with unlimited AI generations. <br>The URL for the checkout session is returned in the response.

1. *Metadata*: <br> Both the billing portal session and checkout session include the `userId` as metadata, which can be useful for tracking the user's subscription status. <br> This is also important to for post checkout-session if the user completes the transaction.

2. *Error Handling*: <br> The function includes error handling and logs any Stripe-related errors to the console.




<!--  heading container closed -->
</details>
<br/><br/>

### Setting up server-side webhook handler for Stripe events
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

#### `HELP GETTING STRIPE-WEBHOOK SETUP + RUNNING FOR DEV-ENV:`
<details>
<summary> Click here to expand: </summary>
<br>

 [usefule video](https://www.youtube.com/watch?v=jJu8vQH7hLY&ab_channel=Code180)


1.  Dashboard>Webhooks>Test in Local env<br><br>
2.  Download the Stripe CLI, navigate too (via terminal) <br><br>
3.  Run the stripe.exe. :  
    ```powershell
    .\stripe.exe
    ```
4.  Login to the cli:  ./stripe login
       - (should return your pairing code & a link - follow the link )
       - (allow access in browser - terminal should update with Done!)<br><br>
5. You should see login seciton turn green at step 1<br><br>
6. Then forward events to the webhook
    ```powershell
    ./stripe listen --forward-to localhost:3000/api/webhook
    ```

    <em>note to update accordingly, this is where my webhook is located</em>
7. You should get:
    - Ready! + you webhook signing secret 
  <br><br>
1.  Copy the webhook into your .env file - STRIPE_WEBHOOK_SECRET
   
2. Keep the terminal open while developing 

</details>
<hr>
<br/><br/>

>This `POST` function allows your server to handle incoming Stripe webhook events and update the `prismadb.userSubscription` table accordingly. It ensures that your application remains synchronized with Stripe's billing and subscription events.

1. *POST Function*: <br> This function is a server-side webhook handler for processing incoming Stripe events.

2. *Request Body and Signature*: <br> The function receives a `POST` request with the Stripe webhook payload in the request body. <br> It also retrieves the Stripe signature from the request headers.

3. *Verify Event*: <br> The function verifies the authenticity of the Stripe webhook event using the Stripe SDK's `webhooks.constructEvent` method. <br> If the verification fails, it returns a response with a status code of 400, indicating a webhook error.

4. *Event Handling*: <br> The function then processes different types of Stripe events based on the event type.

5. *checkout.session.completed Event*: <br> If the event type is "checkout.session.completed", the function retrieves the subscription details from the Stripe event, including the `userId` from the session's metadata.<br> It then creates a new record in the `prismadb.userSubscription` table to store the user's subscription information, including the `userId`, `stripeSubscriptionId`, `stripeCustomerId`, `stripePriceId`, and `stripeCurrentPeriodEnd`.

6. *invoice.payment_succeeded Event*: <br> If the event type is "invoice.payment_succeeded", the function retrieves the subscription details and updates the corresponding record in the `prismadb.userSubscription` table with the latest `stripePriceId` and `stripeCurrentPeriodEnd`.

7. *Successful Response*: <br> The function returns a response with a status code of 200, indicating that the webhook event has been successfully processed.

8. *Error Handling*: <br> If there is an error in processing the webhook events or database operations, the function returns an appropriate response with an error message.





<!--  heading container closed -->
</details>
<br/><br/>

### Implementing te stripe checkout around the app
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>The `onSubscribe` function (upgrade button) in `components\pro-modal.tsx` </strong>

>The `onSubscribe` function is essential for initiating the subscription process with Stripe and handling potential errors during the process. This function is responsible for handling the subscription process when the user clicks on the "Upgrade" button.


1. *Asynchronous Operation*: <br>The function is defined as an asynchronous function with the `async` keyword, allowing it to use `await` to wait for the API response.

2. *State Management*: <br>The function uses the `setLoading` function to set the `loading` state to `true` before making the API call. This is likely used to show a loading spinner or disable the "Upgrade" button during the API call.

3. *Stripe API Call*: <br>The function uses `axios.get` to make a `GET` request to the `/api/stripe` endpoint. This endpoint is responsible for handling the subscription process on the server-side.

4. *Response Handling*: <br>If the API call is successful, it retrieves the response data containing the `url` property, which represents the URL to redirect the user for subscription completion.

5. *Redirection*: <br>The function uses `window.location.href` to redirect the user to the `url` received from the API response. This takes the user to the Stripe checkout page for subscription.

6. *Error Handling*: <br>If an error occurs during the API call, the function catches the error in the `catch` block and displays a toast message with the error message "Something went wrong."

7. *Finally Block*: <br>The `finally` block is used to set the `loading` state back to `false`, ensuring that the loading state is updated correctly, regardless of whether the API call succeeds or fails.



```tsx
//making stripe api call 
const onSubscribe = async () => {
  try {
    setLoading(true);
    
    const response = await axios.get("/api/stripe");

    window.location.href = response.data.url;
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
}
```

>Note to self:  had an error with the db - somehow the npx prisma db push only half worked (literally)
>Had to reset and push again
>I think I may have been starting to run the dev server at the same time and it got cut off halfway

<!--  heading container closed -->
</details>
<br/><br/>




### Bug Fix:  Authentication issue - Middleware.tsx
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>The error: </strong>  
in the development console:

>INFO: Clerk: The request to /api/webhook is being redirected because there is no signed-in user, and the path is not included in `ignoredRoutes` or >`publicRoutes`. To prevent this behavior, choose one of:
>
>1. To make the route accessible to both signed in and signed out users, add "/api/webhook" to the `publicRoutes` array passed to authMiddleware
>2. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", "/api/webhook"]` to authMiddleware
>3. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of 
>redirecting unless a route is included in publicRoutes
>
>For additional information about middleware, please visit https://clerk.com/docs/nextjs/
>This log only appears in development mode, or if `debug: true` is passed to authMiddleware)

<br><br>

<strong>The reason for this: </strong>

It's trying to go to our webhook correctly however it's telling us we are not authenticated and giving us a 401 error.
Which generally means, (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.

The developer console gave some really good advice and reminded me why I am getting this error, I forgot to add the webhook route into the publicRoute.

<br><br>

<strong>The solution:  </strong>

Just as the developer console said:
>To make the route accessible to both signed in and signed out users, add "/api/webhook" to the `publicRoutes` array passed to authMiddleware

So, in the `middleware.ts`:

- simply need to add our webhook to our public routes.

```ts
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"]
});
```

>Testing things again and it seems to be working.
>Got a 404 error only because I have set the return url to take the user to the xxx/settings page and I have not yet createed that
>However, dev console gave no errors and checking the prisma db and the user has been created.  Success!!!
<!--  heading container closed -->
</details>
<br/><br/>


### Creating a little helper function/util - check status of subscription
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

Creating a `lib/subscriptions.ts`

>The `checkSubscription` function is useful for verifying whether the current user has a valid subscription, which can be used for access control or displaying subscription-related content or features within the application.

1. *checkSubscription Function*: <br> This function is responsible for checking the subscription status of the current user.

2. *Asynchronous Operation*: <br> The function is defined as an asynchronous function with the `async` keyword, allowing it to use `await` for database queries.

3. *User Authentication*: <br> The function uses the `auth` function from `@clerk/nextjs` to obtain the authenticated user's information, including the `userId`.

4. *Check for User Authentication*: <br> If the `userId` is not available (user is not authenticated), the function returns `false`, indicating that the user does not have an active subscription.

5. *Database Query*: <br> The function uses `prismadb.userSubscription.findUnique` to query the database and retrieve the user's subscription details.

6. *Check for User Subscription*: <br> If the `userSubscription` is not available (no subscription entry found for the user), the function returns `false`, indicating that the user does not have an active subscription.

7. *Subscription Validity Check*: <br> The function checks whether the `stripeCurrentPeriodEnd` date (end of the current subscription period) plus one day (`DAY_IN_MS`) is greater than the current date (`Date.now()`). This check ensures that the subscription is still valid and has not expired.

8. *Return Value*: <br> The function returns `true` if the user has an active and valid subscription. Otherwise, it returns `false`.




<!--  heading container closed -->
</details>
<br/><br/>


### Creating route/page for settings
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>Creating the new route `app\(dashboard)\(routes)\settings\page.tsx`;</strong>

<details>
<summary> Click here to expand: </summary>
<br>

>The `SettingsPage` component provides users with information about their subscription plan and allows them to manage their account settings. Depending on their subscription status, they can access different features or take actions such as upgrading to a Pro plan or managing their current subscription.

1. *SettingsPage Component*: <br> This component represents the settings page of the application.

2. *Asynchronous Operation*: <br> The component uses the `async` keyword to make an asynchronous call to `checkSubscription`.

3. *Importing Dependencies*: <br> The component imports necessary dependencies, including the Lucide React icon component (`Settings`), the custom `Heading` component, `SubscriptionButton` component, and the `checkSubscription` function from `@/lib/subscription`.

4. *Subscription Status Check*: <br> The component calls the `checkSubscription` function to determine if the current user has a valid subscription. <br> The `await` keyword is used to wait for the asynchronous operation to complete.

5. *Render Content*: <br> The component renders the settings page content inside a `div` element.

6. *Heading Component*: <br> The component uses the custom `Heading` component to display the page title, description, and an icon (the Settings icon from Lucide React).

7. *Subscription Status Display*: <br> The component displays a message indicating whether the user is on a Pro plan or a free plan, based on the value of the `isPro` variable.

8. *SubscriptionButton Component*: <br> The component renders the `SubscriptionButton` component, passing the `isPro` value as a prop. <br>The `SubscriptionButton` component is responsible for rendering the appropriate button based on the user's subscription status.

</details>
<br/><br/>



<strong>creating the new component `components\subscription-button.tsx`;</strong>

<details>
<summary> Click here to expand: </summary>
<br>

>The `SubscriptionButton` component is used in the `SettingsPage` component (as seen in the previous code snippet) to allow users to manage their subscription or upgrade to a Pro plan, depending on their current subscription status.

1. *SubscriptionButton Component*: <br> This component represents a button that allows the user to manage their subscription or upgrade to a Pro plan based on their subscription status.

2. *Importing Dependencies*: <br> The component imports necessary dependencies, including `axios` for making API calls, `useState` to manage component state, `Zap` icon from Lucide React, and `toast` from react-hot-toast for displaying error messages.

3. *State Management*: <br> The component uses the `useState` hook to manage the loading state of the button.

4. *onClick Function*: <br> The component defines an `onClick` function to handle the button click event. <br>When the button is clicked, this function makes an API call using `axios` to `/api/stripe` to get the URL for subscription management or upgrade. <br>The user is then redirected to the returned URL using `window.location.href`.

5. *Button Rendering*: <br> The component renders a `<Button>` component with the appropriate variant (either "default" or "premium") based on the `isPro` prop.<br> If `isPro` is true, the button text will be "Manage Subscription," and if it's false, the text will be "Upgrade." <br>Additionally, if `isPro` is false, a `<Zap>` icon will be displayed next to the button text.

6. *Loading State and Disabled Prop*: <br> The button is disabled and shows a loading state while the API call is in progress (controlled by the `loading` state).

</details>
<br/><br/>

<!--  heading container closed -->
</details>
<br/><br/>


### BUG FIX:  Enabling the customer Portal for Test mode
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

<strong>The error: </strong>  
in the development console:

>[STRIPE_ERROR] StripeInvalidRequestError: You can’t create a portal session in test mode until you save your customer portal settings in test mode at https://dashboard.stripe.com/test/settings/billing/portal.
>    at StripeError.generate (webpack-internal:///(sc_server)/./node_modules/stripe/esm/Error.js:22:20)
>    at res.toJSON.then._Error_js__WEBPACK_IMPORTED_MODULE_0__.StripeAPIError.message (webpack-internal:///(sc_server)/./node_modules/stripe/esm/RequestSender.js:102:82)        
>    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {     
>  type: 'StripeInvalidRequestError',
>  raw: {
>    message: 'You can’t create a portal session in test mode until you save your customer portal settings in test mode at https://dashboard.stripe.com/test/settings/billing/portal.',
>    request_log_url: 'https://dashboard.stripe.com/test/logs/req_4MCyG4JckpYwPs?t=1689939254',

<br><br>

<strong>The reason for this: </strong>

Stripe doesn't know if you have given the permissions for testing this in the development mode.
This helps prevent accidently arraiving on this page.

Therefore need to check the settings and enable it first.

<br><br>

<strong>The solution:  </strong>

You can follow the link given in the error message:  https://dashboard.stripe.com/test/settings/billing/portal
Alternativly, you can go Dashboard and search settings>billing>customer portal

Then activate the test link button - refresh the app and try again 

<!--  heading container closed -->
</details>
<br/><br/>


### Updating the app for premium users
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>


#### <strong> Updating the upgrade button / generation count <strong>
<!--small container open -->
<details>
<summary> Click here to expand: </summary>
<br>

In the `components\free-counter.tsx`

- updating interface with an isPro
- passing as props into the app, false by default 
- create an if staement that returns null
  ```tsx
  if (isPro) {
    return null;
  }
  ```
 
 <br><br>

 In the `components\sidebar.tsx`

- updating interface with an isPro
- passing as props into the app, false by default
- passing the isPro into the free-counter component
  ```tsx
  <FreeCounter
    isPro={isPro}
    apiLimitCount={apiLimitCount} 
  />
  ```

<br><br>

In the `app\(dashboard)\layout.tsx`

- calling the `checkSubscription()` 
    ```tsx
    const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
      const isPro = await checkSubscription();
    ```
- passing into the `<Sidebar isPro={isPro} ... />`

<br><br>

Doin the exact same pattern as above with both the:
- `components\mobile-sidebar.tsx`
- `components\navbar.tsx`



<!-- small container closed -->
</details>
<br/><br/>


#### <strong> Updating the AI Tools API calls to allow more if user is premium <strong>
<!--small container open -->
<details>
<summary> Click here to expand: </summary>
<br>

For all the AI TOOLS API call will need to update the code with the following

>  ✅ Conversation <br>
>  ✅ Code Generaton <br>
>  ✅ Audio Generation <br>
>  ✅ Video Generation <br>
>  ✅ Music Gerneration <br>


- add the `checkSubscription` function into the file;
  ```tsx
  import { checkSubscription } from "@/lib/subscription";
  ```

- in the checks, check if user is subscribed/premium user;
  ```tsx
  const isPro = await checkSubscription();
  ```

- amed the the incrementApiLimit function to only run if not a prem user;
  ```tsx
  if (!isPro) {
      await incrementApiLimit();
  }
  ```


<!-- small container closed -->
</details>
<br/><br/>



<!--  heading container closed -->
</details>
<br/><br/>

<!--  SECTION container closed -->
</details>
<br/><br/>


## 8.  Error Handeling & adding Customer-Support bot 
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>

### Error handeling with react-hot-toast notifs
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

- Import the hot-toast package
  ```shell
  npm i react-hot-toast
  ```

-  Created a `toaster-provider.tsx`
    ```tsx
    "use client";

    import { Toaster } from "react-hot-toast"

    export const ToasterProvider = () => {
      return <Toaster />
    };
    ```


-  Added the `<ToasterProvider />` above the children in the `app\layout.tsx`

-  Replace all the .catch - console.logs with toast error instead

> I actually have already been doing this, however I had forgotten to create the provider and pass it into the layout.tsx
> So all my erros have already been written using the hot-toast-format


<!--  heading container closed -->
</details>
<br/><br/>


### Customer Support-bot with Crisp
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

#### <strong> Setting up CRISP </strong>

- Created an account with [Crisp Chat](https://crisp.chat/en/)
  - signed in and made an account
  - saved the HTML head section - will need the data 
  - dashboard explore and find the documentation 

- Installing the sdk into the project
    ```shell
    npm i crisp-sdk-web
    ```

<br><br>


#### <strong> Creating a a `crisp-chat.tsx` component </strong>

```tsx
"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("USE CRISP WEBSITE ID");
  }, []);

  return null;
};
```

<br><br>


#### <strong> Creating a a `crisp-provider.tsx` component and adding to `app/layout.tsx` </strong>


created the `crisp-provider.tsx`
```tsx
"use client";

import { CrispChat } from "@/components/crisp-chat";

export const CrispProvider = () => {
  return <CrispChat />
};
```

<br><br>

Add just above the `body` in the `app/layout.tsx`
```tsx
 <html lang="en">
  <CrispProvider />
  <body className={inter.className}>
```
<br>

✅ That's it, all setup - there are some integrations such as AI or bots - for now I am not going to import anything like that 

<!--  heading container closed -->
</details>
<br/><br/>



<!--  SECTION container closed -->
</details>
<br/><br/>
 

## 9.  Creating Landing Page
<!-- SECTION container open -->
<details>
<summary> Click here to expand: </summary>
<br>


### `app\(landing)\layout.tsx`
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>The `LandingLayout` component is designed to wrap the content of the landing page and apply consistent styling, such as the background color and width limitations. It allows the landing page's content to be centered and scrollable when necessary, providing a clean and visually appealing layout.

1. *LandingLayout Component*: <br> This component represents a layout wrapper for the landing page.

2. *Component Props*: <br> The component takes a single prop named `children`, which is of type `React.ReactNode`. <br>This prop represents the content that will be rendered inside the layout.

3. *Main Container*: <br> The component returns a `<main>` element with a custom CSS class name "h-full bg-[#111827] overflow-auto". This sets the main container's background color to a dark gray (#111827) and allows it to scroll if the content overflows.

4. *Content Container*: <br> Inside the main container, there's a `<div>` element with the CSS classes "mx-auto max-w-screen-xl h-full w-full". <br>This container centers the content horizontally within the page (using `mx-auto`) and limits its maximum width to `max-w-screen-xl`. The `h-full` and `w-full` classes ensure that the container takes up the full height and width of its parent, making sure the content is contained within the viewport.

5. *Rendering Children*: <br> The `children` prop is rendered inside the content container. <br>The content passed to the `LandingLayout` component will be inserted here.




<!--  heading container closed -->
</details>
<br/><br/>


### `components\landing-navbar.tsx`
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>The `LandingNavbar` component is designed to provide a clean and responsive navigation experience for the landing page. It dynamically shows the "Get Started" button based on the user's authentication status, encouraging users to take the appropriate action based on whether they are signed in or not.


1. *LandingNavbar Component*: <br> This component represents the navigation bar for the landing page.

2. *Using Next.js Features*: <br> The component imports various Next.js modules and hooks such as `Image`, `Link`, and `useAuth` from `@clerk/nextjs`.

3. *Custom Font*: <br> The component imports the "Montserrat" font using `Montserrat({ weight: '600', subsets: ['latin'] })`.

4. *Navigation Bar*: <br> The component returns a `<nav>` element with the CSS classes "p-4 bg-transparent flex items-center justify-between". <br>This sets the navigation bar's padding, background color as transparent, and arranges its content in a flex container with items aligned at the center and justified between.

5. *Logo and Title*: <br> Inside the navigation bar, there's a link to the home page ("/") with the logo and title of the application. <br>The logo is displayed using the `Image` component and the title is styled with a custom font class and other CSS classes.

6. *Get Started Button*: <br> The navigation bar includes a "Get Started" button, which is conditionally rendered based on the user's authentication status. <br>If the user is signed in (`isSignedIn` is true), the button links to the dashboard ("/dashboard"). <br>Otherwise, it links to the sign-up page ("/sign-up"). <br>The button is styled using the `Button` component with the "outline" variant and a rounded border.





<!--  heading container closed -->
</details>
<br/><br/>

### `components\landing-content.tsx`
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>The `LandingContent` component is designed to showcase user testimonials in an organized and visually appealing grid layout. The testimonials are displayed in a responsive manner, ensuring they look great across various screen sizes.

1. *LandingContent Component*: <br> This component represents the content section on the landing page, specifically showcasing user testimonials.

2. *Testimonials Data*: <br> The component defines an array called `testimonials`, which contains objects representing individual testimonials. <br>Each testimonial object has properties like `name`, `avatar`, `title`, and `description`.

3. *Content Section*: <br> The component returns a `<div>` element with the CSS classes "px-10 pb-20". <br>This sets the content section's horizontal padding and bottom padding.

4. *Testimonials Header*: <br> Inside the content section, there's an `<h2>` element with the CSS classes "text-center text-4xl text-white font-extrabold mb-10". <br>This header displays the text "Testimonials" and is styled to be centered, with large text size and bold font.

5. *Testimonials Grid*: <br> Below the header, there's a `<div>` element with CSS classes that define a grid layout with responsive column numbers: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4". <br>The grid will display one column on small screens, two columns on small to medium screens, three columns on medium to large screens, and four columns on large screens. <br>There is a gap of 4 units between each grid item.

6. *Testimonial Cards*: <br> Inside the grid, the component maps through the `testimonials` array and creates a `Card` component for each testimonial. <br>Each `Card` displays the name, title, and description of the corresponding testimonial. <br>The `Card` component is styled with a dark background color, no border, and white text.





<!--  heading container closed -->
</details>
<br/><br/>

### `components\landing-hero.tsx`
<hr>
<!-- heading container open -->
<details>
<summary> Click here to expand: </summary>
<br>

>The `LandingHero` component effectively showcases dynamic text using the typewriter effect, inviting users to experience the AI tools and encouraging them to sign up for free without requiring a credit card.


1. *LandingHero Component*: <br> This component represents the hero section on the landing page, designed to grab the user's attention and encourage sign-ups.

2. *Typewriter Effect*: <br> The component imports the `TypewriterComponent` from the "typewriter-effect" library. <br>This effect creates an animated typewriter-style text display.

3. *Dynamic Text*: <br> Inside the hero section, there's a `<div>` element with the CSS classes "text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold". <br>This element contains a heading with the text "The Best AI Tool for" and a nested `<div>` with the CSS classes "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600". <br>This nested div displays the typewriter effect with dynamic AI tool names ("Chatbot.", "Photo Generation.", "Blog Writing.", "Mail Writing."). <br>The typewriter effect starts automatically and loops indefinitely.

4. *Subheading*: <br> Below the dynamic text, there's a `<div>` element with the CSS classes "text-sm md:text-xl font-light text-zinc-400". <br>This element displays the subheading text "Create content using AI 10x faster."

5. *Call-to-Action Button*: <br> Below the subheading, there's a `<div>` element containing a `Link` component from Next.js that points to either the dashboard page (if the user is signed in) or the sign-up page (if the user is not signed in). <br>Inside the `Link`, there's a `Button` component with the CSS class "md:text-lg p-4 md:p-6 rounded-full font-semibold" and the text "Start Generating For Free". <br>The button is styled with the premium variant, indicating a premium feature but available for free.

6. *Additional Information*: <br> Below the call-to-action button, there's a `<div>` element with the CSS class "text-zinc-400 text-xs md:text-sm font-normal" that displays the text "No credit card required."




<!--  heading container closed -->
</details>
<br/><br/>

### 
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
 
## 10. Hosting on Vercel
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




hosting from github repo 

adding all env variables 

deploy and check if passed 

Error:  Type error: '"lucide-react"' has no exported member named 'Icon'. Did you mean 'XIcon'?

Solution updat to use the Xicon instead (Icon had been depricated mid project build)



Error:  PrismaClientInitializationError: Prisma has detected that this project was built on Vercel, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the `prisma generate` command during the build process.


Inside the package.json need to add a postinstall command
```shell
"postinstall": "prisma generate"
```