import { Button, NextLinkButton } from '@todo/idl';

export default function Index() {
  return (
    <div className="container max-w-screen-xl mx-auto my-32">
      <h1 className="text-center text-5xl font-bold">
        Bear your tasks with ease
      </h1>
      <p className="text-center max-w-[494px] mx-auto mt-2 text-lg font-light">
        Dashboard, cards, authentication. Some examples built using the
        components. Use this as a guide to build your own.
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <NextLinkButton secondary href="/sign-in">
          Sign in
        </NextLinkButton>
        <Button>Download</Button>
      </div>
    </div>
  );
}
