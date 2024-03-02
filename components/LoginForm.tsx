"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import { loginUserSchema, loginUserType } from "@/types";
import Spinner from "./Spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginUserType>({
    reValidateMode: "onChange",
    resolver: zodResolver(loginUserSchema),
  });

  async function loginHandler(data: loginUserType) {
    const { email, password } = data;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(response);

      if (response?.error) {
        toast(response.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      reset();
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-10">Login...</h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(loginHandler)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors && (
                <span className="text-rose-700">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              {errors && (
                <span className="text-rose-700">
                  {errors.password?.message}
                </span>
              )}
              <label className="label">
                <Link href="/signup" className="label-text-alt">
                  Don&apos;t have an account?{" "}
                  <span className="link link-hover">Signup</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {isSubmitting && <Spinner />}
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
