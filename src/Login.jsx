import React from 'react'
import Input from './LoginComponents/Input'

const Login = () => {
  return (
    <div className='flex flex-col p-2 w-full h-full justify-center items-center p-x'>
       <form className='lg:flex flex-wrap p-4 gap-y-3 border '>
            <Input css={`bg-slate-400 px-2 placeholder:text-xs`}/>
            <Input css={`bg-red-400 px-2 placeholder:text-xs`}/>
            <Input css={`bg-blue-400 px-2 placeholder:text-xs`}/>
           
       </form>
    </div>
  )
}

export default Login