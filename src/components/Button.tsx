import React from 'react'
import WithClasses from '../utils/withClasses'

type Props = {
    children: React.ReactNode,
    className?: string,
    ghost?: boolean
}
const Button: React.FC<Props> = ({children,className,ghost}) => {
    if(ghost){
        return (
        <WithClasses classes={className}>
        <button  className='bg-none text-slate-500 border-b-4 rounded-0 border-brand-blue-medium'>
            {children}
        </button>
      </WithClasses>)
    }else{
        return (
            <WithClasses classes={className}>
                <button  className='font-bold text-white bg-black px-5 py-2 rounded-lg'>
                    {children}
                </button>
            </WithClasses>
        )
   }
}

export default Button