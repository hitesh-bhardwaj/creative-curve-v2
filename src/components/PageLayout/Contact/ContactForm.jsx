import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Update the ContactForm component
export default function ContactForm () {
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const formSchema = z.object({
        name: z.string().min(1, {message: "Name is required."}),
        email: z.string().min(1, {message: "Email is required."}).email({message: "Enter a vaild email address."}),
        phone: z.string().min(1, {message: "Phone is required."}).min(5, {message: "Enter a valid phone number."}),
        subject: z.string().min(1, {message: "Subject is required."}),
        message: z.string().min(1, {message: "Message is required."}),
        pageURL: z.string(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        pageURL: typeof window !== 'undefined' ? window.location.href : '',
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);

        const formData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            pageURL: data.pageURL,
        };

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json", Accept: "application/json" },
          });

          if (!res.ok) throw new Error("Failed to send message");
            
            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);
        } catch (error) {
            setSubmitting(false);
            setSubmissionError('Error sending email. Please try again later.');
        }
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[2vw] contact-form">
        
        {/* Form fields */}

        <div className="space-y-[-1px]">
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="required relative">
                <FormControl>
                  <Input placeholder="Name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField 
              control={form.control}
              name="email"
              render= {({ field }) => (
                  <FormItem className="required relative">
                      <FormControl>
                          <Input placeholder="Email*" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />

          {/* Number field */}
          <FormField 
              control={form.control}
              name="phone"
              render= {({ field }) => (
                  <FormItem className="required relative">
                      <FormControl>
                          <Input placeholder="Phone*" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />

          {/* Subject field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="required relative">
                <FormControl>
                  <Input placeholder="Subject*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="required relative">
                <FormControl>
                  <Textarea placeholder="Message*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit button */}
        <Button className="rounded-full text-[1.1vw] uppercase text-white font-[400] aeonik px-[2vw] py-[1vw] h-full mobile:text-[3vw] mobile:px-[4vw] mobile:py-[2vw]" type="submit" disabled={submitting}>
            {submitting ? 'sending...' : 'send message'}
        </Button>
        {submissionError && <p className="text-red-500">{submissionError}</p>}
        {submissionSuccess && <p className="text-green-500">Email sent successfully!</p>}
      </form>
    </Form>
  );
}