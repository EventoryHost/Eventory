import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <div className='w-full flex my-7 flex-col justify-center items-center'>
        <div className='w-full md:px-0 px-4 flex flex-col items-center justify-center py-5'>
            <div className='md:w-[50%] flex flex-col gap-6'>
                <h1 className='text-4xl font-bold text-center'>Let&apos;s address your concerns</h1>
                <p className='text-center'>Got questions or concerns? Let us help you out! We're here to clear up any doubts and provide the answers you need.</p>
            </div>
            <form className='bg-[#D5D6E9] lg:min-w-[35%] md:min-w-[50%] min-w-[90%] mt-7 gap-5 rounded-xl flex flex-col items-center justify-center py-5 px-4'>
                <label htmlFor="text" className='self-start'>Full Name</label>
                <input type="text" className='w-full rounded-lg p-4'/>
                <label htmlFor="text" className='self-start'>Email</label>
                <input type="text" className='w-full rounded-lg p-4'/>
                <label htmlFor="text" className='self-start'>Message</label>
                <textarea rows={7} className='w-full rounded-lg p-4'/>
                <button className='rounded-xl w-full p-4 text-white bg-[#2E3192]'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form