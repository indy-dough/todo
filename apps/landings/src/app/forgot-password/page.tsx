import Link from 'next/link';

import { Button, Input } from '@todo/idl';

export default function ForgotPassword() {
  return (
    <div className="container max-w-screen-xl mx-auto my-32">
      <h1 className="text-center text-2xl font-bold">Forgot your password?</h1>

      <div className="max-w-[350px] mx-auto pt-6">
        <form>
          <div>
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <Input id="email" className="mt-2" autoFocus />
          </div>
          <Button className="w-full mt-4" type="submit">
            Send password reset link
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
