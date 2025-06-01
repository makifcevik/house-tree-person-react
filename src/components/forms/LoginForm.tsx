import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import ROUTES from "@/routes/routes";

const loginSchema = z.object({
  email: z.string().email("Invalid email!"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const TEXT_LOC = "formPages.";

type LoginFormData = z.infer<typeof loginSchema>;

function LoginForm() {
  const { t } = useTranslation();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // TODO: Add login logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {/* Email field */}
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

        {/* Password field */}
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
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button Login */}
        <Button type='submit' className='w-full'>
          {t(TEXT_LOC + "login")}
        </Button>

        <div className='flex-grow border-t border-gray-dark'></div>

        {/* Signup link */}
        <div className='text-center text-sm'>
          {t(TEXT_LOC + "CTAToSignup")}{" "}
          <Link to={ROUTES.SIGNUP} className='text-primary font-bold hover:underline'>
            {t(TEXT_LOC + "signup")}
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
