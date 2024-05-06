import Link from 'next/link';

import { Button, Input } from '@todo/idl';

export default function SignIn() {
  return (
    <div className="container max-w-screen-xl mx-auto my-32">
      <h1 className="text-center text-2xl font-bold">Sign in to continue</h1>

      <div className="max-w-[350px] mx-auto pt-6">
        <form>
          <div>
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <Input id="email" className="mt-2" autoFocus />
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label
                className="text-sm leading-none font-medium"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <Input id="password" className="mt-2" />
            <Link
              className="text-sm leading-none text-zinc-500 font-light hover:underline"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full mt-4" type="submit">
            Sign in
          </Button>
        </form>

        <div className="pt-6 text-center text-sm text-zinc-500 font-light">
          Don't have an account?{' '}
          <Link href="/sign-up" className="underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
