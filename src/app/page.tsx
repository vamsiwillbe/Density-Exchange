import Image from 'next/image'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Header section */} 
        <header className="text-center flex items-center justify-between w-full">
          <div className="flex items-center flex-grow"> {/* Group left-aligned items */}
            <Link href="/profile" className="ml-4">
              Profile
            </Link>
            <Link href="/timetable" className="ml-4">
              Time table
            </Link>
            <Link href="/reminders" className="ml-4">
              Reminders
            </Link>
          </div>
          
          <div className="flex items-center mx-2"><img src="/header_logo.png" alt="Header Logo" className="w-16 h-16 mr-2" /></div>
          <div className="header-right flex items-center ml-auto" >
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="primary">
                Sign Up
              </Button>
              <Button variant="outlined" color="primary">
                Sign Up
              </Button>
            </Stack>
          </div>
        </header>
        {/* 8:4 grid dash board */} 
        {/* cards noting services we offer - card animation  */} 
        {/* 4:8 grid information poster  */} 
        {/* stepper - "what other say about us" */}
        {/* some note with quotes  */} 
        {/* footer - logo ,contact information logo   */}   

      </div>
    </main>
  )
}
