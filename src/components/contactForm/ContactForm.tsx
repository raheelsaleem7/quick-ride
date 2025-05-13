'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
// Define the form schema with Zod
const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.'
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.'
    }),
    phone: z.string().min(10, {
        message: 'Name must be at least 2 characters.'
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.'
    })
});
export default function ContactForm() {
    // Initialize the form with React Hook Form and Zod resolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            phone: ''
        }
    });
    // Define the submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically send the form data to your API
        console.log(values);
        // Show success message
        toast("Message sent!,We'll get back to you as soon as possible.");
        // Reset the form
        form.reset();
    }
    return (
        <div className="w-full  dark:bg-gray-950">
            <h2 className="text-[black]] text-[32px] font-[500] mb-4">Leave us a message</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="your.email@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter phone number" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormDescription>Please provide details about your inquiry.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    );
}
