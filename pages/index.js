import { useSession, signIn, signOut } from "next-auth/react"
import { Nav } from '@/components/Nav';

export default function Home() {

  const { data: session } = useSession()
  if(!session){
    return (
      // <div className='bg-blue-900 w-screen h-screen flex justify-center items-center'>
      // // <div className='text-center w-full'>
        <button className=' bg-white text-black px-3 py-1 rounded-md' onClick={()=>signIn('google')}>Sign in with GOOGLE</button>
      // </div>
    // </div>
  );
}
return(
  <div className='flex min-h-screen h-screen '>
      <Nav/>
      {/* <div className='bg-white flex-grow m-2 rounded-md p-4 text-stone-950'> */}
        Logged in as {session.user.email}
      {/* <button className=' bg-white text-black px-3 py-1 rounded-md' onClick={()=>signOut()}>Sign Out</button> */}
    {/* </div> */}
  </div>
)
}
