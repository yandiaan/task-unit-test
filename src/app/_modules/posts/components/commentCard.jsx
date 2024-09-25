import React from 'react'

export default function CommentCard({name, email, body}) {
  return (
    <div className='p-2 w-3/4'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <span className='text-sm italic font-medium dark:text-gray-200'>{email}</span>
        <div className="py-2 px-6 bg-orange-200 mt-2 rounded-lg">
            {body}
        </div>
    </div>
  )
}
