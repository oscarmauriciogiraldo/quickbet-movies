'use client'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {Input} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

const formSchema = z.object({
    input: z.string().min(2).max(30)
})

const SearchComponent = () => {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        input: "",
        },
    })

    const onSubmmitSearch = (values: z.infer<typeof formSchema>) => {
        router.push(`/search/${values.input}`)
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmmitSearch)} className='text-white space-y-1'>
                <FormField control={form.control} name="input" render={({field}) => (
                    <FormItem>
                        <FormControl>
                        <div className="flex  flex-col mt-[40px]">
                            <div className="title">
                                <h3>Search</h3>
                            </div>
                            <div key="underlined" className="boxSearch flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg text-white bg-[#1c1c1c]">
                            <Input
                                key="outside"
                                placeholder="Keywords"
                                variant="underlined"
                                color="primary"
                                classNames={{
                                    input: [
                                        "text-white",
                                    ]
                                }}
                                endContent={
                                <IoSearch className="text-2xl text-gray-500 hover:text-white cursor-pointer flex-shrink-0"/>
                                }
                                {...field}
                            />
                            </div>
                        </div>
                        </FormControl>
                    </FormItem>
                )}/>
            </form>
        </Form>
    );
};

export default SearchComponent;