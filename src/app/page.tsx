import React from 'react'
import { Categories } from './(components)/categories'
import { Featured } from "./(components)/featured"
import Feed from './(components)/Feed'
import Sectiontwo from './(components)/sectiontwo'


type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Feed />
      <Sectiontwo />
      <Categories />
      <Featured />
    </div>
  )
}

export default page