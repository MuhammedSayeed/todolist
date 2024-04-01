import { InputHTMLAttributes, Ref, forwardRef } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input ref={ref} className='border-[1px] text-black border-gray-300 shadow-lg focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg px-3 py-3 text-md w-full bg-transparent mb-2'
      {...rest}
    />
  )
})

export default Input