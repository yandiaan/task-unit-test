'use client';
import { useTranslations } from '@/app/_hooks/langHooks';
import React from 'react';
import cx from 'classnames';

export default function CommentCount({count}) {
    const {commentCount} = useTranslations();
  return (
    <h1 className={cx(
        "text-2xl relative w-fit font-bold mb-10",
        "before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-1/2 before:h-1 before:bg-black dark:before:bg-white")}
        >
            {commentCount} : {count}
        </h1>
  )
}
