import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <main>
      <div className='isolate overflow-hidden p-4 sm:p-8 grid place-items-center'>
        <div
          className='grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:pulse before:rounded-bl-md before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:pulse after:animate-spin-slow after:-z-10
      '
        >
          <h1 className='text-6xl font-bold '>
            <span className='underline decoration-accent-1'>Dark</span> or{" "}
            <span className='underline decoration-accent-2'>Light</span>?
          </h1>
          <ThemeSwitch />
        </div>
      </div>
    </main>
  );
}
