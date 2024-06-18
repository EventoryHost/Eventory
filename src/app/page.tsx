import React from 'react'
import { Categories } from './(components)/categories'
import { Featured } from "./(components)/featured"
import  {Partner}  from './(components)/partner'
import Works from './(components)/works'
import Hero from './(components)/hero'
import { Horizontal } from './(components)/horizontal'


type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <Partner/>
      <Works/>
      <Categories />
      <Featured />
    </div>
  )
}

export default page