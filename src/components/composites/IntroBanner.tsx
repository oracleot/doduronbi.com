import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function IntroBanner() {
  return (
    <div
      className={`flex items-center justify-center bg-[var(--light-gray)] min-h-[30rem] lg:min-h-[40rem] rounded-b-[6rem]`}>
      <div className='flex items-center flex-col gap-3'>
        <Avatar className='w-[6rem] h-[6rem]'>
          <AvatarImage src='images/moi.jpeg' alt='@shadcn' />
          <AvatarFallback className='text-[2rem]'>DO</AvatarFallback>
        </Avatar>
        <h1 className='text-3xl md:text-5xl font-orbitron font-medium'>
          Damilola Oduronbi
        </h1>
        <h2 className='text-lg md:text-xl'>
          Software Engineer | Exploring AI & LLMs
        </h2>
        <h3 className='px-4 md:px-0 text-center text-[var(--mid-gray)] max-w-[500px]'>
          <strong>Building scalable, high-performance solutions</strong> with a
          broad tech stack including modern web frameworks, languages, and cloud
          platforms to help businesses innovate and thrive.
        </h3>
      </div>
    </div>
  );
}
