"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";


import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { formSchema } from "./constants";



const MusicPage = () => {
    const router = useRouter();
    const [music, setMusic] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: ""
        }
      });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined);

            //api call
            const response = await axios.post('/api/music', values);   

            //set the message 
            setMusic(response.data.audio);
            
            //reset the form back to default 
            form.reset();
            
        } catch (error: any) {
            //🎯 TODO:  add a 'Pro' subscription model -for prem users
            console.log(error);
        } finally {
            router.refresh();
        }
    }

    return ( 
        <div>

            <Heading
                title="Music Generation"
                description="Turn your prompt into music"
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10"
            />

            
            <div className="px-4 lg:px-8">

                {/* INPUT SECTION */}
                <div>
                    <Form {...form}>
                    <form 
                      onSubmit={form.handleSubmit(onSubmit)} 
                      className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                    >
                        <FormField 
                          name="prompt"
                          render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input 
                                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                      disabled={isLoading} 
                                      placeholder="Jazzy piano solo" 
                                      {...field}
                                    />
                                </FormControl>
                            </FormItem>
                          )}
                        />
                        <Button 
                          className="col-span-12 lg:col-span-2 w-full" 
                          type="submit" 
                          disabled={isLoading} 
                          size="icon"
                        >
                            Generate
                        </Button>

                      </form>
                    </Form>
                </div>

                {/* OUTPUT SECTION */}
                <div className="space-y-4 mt-4">
                    
                    {/* Loading Conditional */}
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex flex-col items-center justify-center bg-muted">
                          <Loader />
                          <div className="flex justify-center text-sm text-center text-gray-400">
                            A cold start can take a few minutes to start up & generate
                          </div>
                        </div>
                    )}
                    
                    {/* Empty Chat Conditional */}
                    {!music && !isLoading && (
                        <Empty label="No prompts given"/>
                    )}

                    {/* Music Generation */}
                    {music && (
                      <audio controls className="w-full mt-8">
                        <source src={music} />
                      </audio>
                    )}

                    
                </div>

            </div>

        </div>
     );
}
 
export default MusicPage;