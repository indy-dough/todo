import Link from 'next/link';

import { Button, Input } from '@todo/idl';

export default function SignUp() {
  return (
    <div className="container max-w-screen-xl mx-auto my-32">
      <h1 className="text-center text-2xl font-bold">Create an account</h1>

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
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <Input id="password" className="mt-2" />
          </div>
          <Button className="w-full mt-4" type="submit">
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
