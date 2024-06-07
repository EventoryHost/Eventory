import React from 'react'
import { Categories } from './(components)/categories'
import {Featured} from "./(components)/featured"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Categories/>
        <Featured/>
    </div>
  )
}

export default page