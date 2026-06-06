// page.tsx (version finale)
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative font-sans">
      
      <div className="fixed top-0 left-0 w-full h-[75vh] flex flex-col text-white -z-10">
      

        <header className="relative flex justify-between items-center p-8 z-10">
          <div className="text-2xl font-bold tracking-widest">Gabriel S.</div>
          <nav className="space-x-8 text-sm uppercase tracking-widest hidden md:block">
            <a href="#" className="hover:underline underline-offset-4">Projects</a>
            <Link className="hover:underline underline-offset-4" href="/aboutme">About Me</Link>
            <a href="https://www.linkedin.com/in/gabriel-savatte/" target="_blank" className="hover:underline underline-offset-4">LinkedIn</a>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
          </nav>
        </header>

        <div className="relative flex-grow flex items-center justify-center text-center p-4 z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-wide">
              Hello and welcome! I am studying <br className="hidden md:block" />
              Computer Science at the École Supérieure<br className="hidden md:block" />
              d'Ingénieurs de Rennes (ESIR), concentrating in <span className="underline underline-offset-8">Information Systems</span>.
            </h1>
            <p className="text-lg md:text-xl font-light mt-8 tracking-wide">
              Take a look at my work through the tabs :D
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white min-h-screen text-black shadow-[0_-10px_30px_rgba(0,0,0,0.1)] mt-[75vh] pb-24">
        

      </div>

    </main>
  );
}