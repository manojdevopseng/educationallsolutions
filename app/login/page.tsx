import email_icon from '@/app/assets/images/email.png'
import password_icon from '@/app/assets/images/password.png'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='container flex flex-col w-[600px] m-auto mt-2 pb-[30px]'>
      <div className='header flex flex-col items-center gap-[9px] w-full mt-[30px]'>
        <div className='text-blue-900 text-2xl font-bold'>Login</div>
        <div className='underline w-16 h-[6px] bg-[#3c009d] rounded-lg border'></div>
      </div>
      <div className='inputs mt-14 flex flex-col gap-6'>
        <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
          <Image className='mx-8 my-0' src={email_icon} alt='user_icon' />
          <input className=' h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] text-xl border border-blue-500 rounded-lg' type="email" placeholder='Enter Your Email' />
        </div>
        <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
          <Image className='mx-8 my-0' src={password_icon} alt='user_icon' />
          <input className=' h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] text-xl border border-blue-500 rounded-lg' type="password" placeholder='Enter Your Password' />
        </div>
      </div>
      <div className='forgot-password pl-16 mt-7 text-[#797979] text-lg'>Lost Password? <span className='text-[#4c00b4] cursor-pointer hover:text-black'>Click Here!</span></div>
      <div className='submit-container flex gap-8 mx-auto my-[60px]'>
        <div className='submit flex justify-center items-center cursor-pointer w-48 h-14  max-w-[200px]  rounded-full hover:font-medium text-lg border-2 border-blue-500 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90'>
          <Link
            href={'/login'}>
            <h1>Login</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;