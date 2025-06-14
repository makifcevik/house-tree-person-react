import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TEXT_LOC = "formPages.";

export function SignupForm() {
  const { t } = useTranslation();
  const signupSchema = z
    .object({
      name: z.string().min(2, t(TEXT_LOC + "nameTooShort")),
      email: z.string().email(t(TEXT_LOC + "invalidEmail")),
      password: z.string().min(8, t(TEXT_LOC + "passwordTooShort")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t(TEXT_LOC + "passwordsDifferent"),
      path: ["confirmPassword"], // Show error on confirmPassword field
    });

  type SignupFormData = z.infer<typeof signupSchema>;

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup data:", data);
    // TODO: Add signup logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        {/* Name Field */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t(TEXT_LOC + "name")}</FormLabel>
              <FormControl>
                <Input placeholder={t(TEXT_LOC + "namePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t(TEXT_LOC + "email")}</FormLabel>
              <FormControl>
                <Input placeholder={t(TEXT_LOC + "emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t(TEXT_LOC + "password")}</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder={t(TEXT_LOC + "passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t(TEXT_LOC + "confirmPassword")}</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder={t(TEXT_LOC + "passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          {t(TEXT_LOC + "signup")}
        </Button>

        <div className='flex-grow border-t border-gray-dark'></div>

        <div className='text-center text-sm'>
          {t(TEXT_LOC + "CTAToLogin")}{" "}
          <Link to='/login' className='text-primary font-bold hover:underline'>
            {t(TEXT_LOC + "login")}
          </Link>
        </div>
      </form>
    </Form>
  );
}
