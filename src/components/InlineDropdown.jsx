'use client';
import { Dropdown } from 'flowbite-react';
import { HiCake, HiPencil, HiDesktopComputer, HiUserAdd } from 'react-icons/hi';

export default function InlineDropdown() {
  return (
    <Dropdown
      inlines
      label="First Projects"
    >
      <Dropdown.Item icon={HiDesktopComputer} className='text-black hover:text-indigo-600' href='https://andradeparrah.github.io/landingPageProject/' target='_blank' >
        Landing
      </Dropdown.Item >
      <Dropdown.Item icon={HiPencil} className='text-black hover:text-indigo-600' href='https://andradeparrah.github.io/theCrudProyect/crud.html' target='_blank'>
        CRUD
      </Dropdown.Item>
      <Dropdown.Item icon={HiUserAdd}  className='text-black hover:text-indigo-600' href='https://forescast-api-team5.netlify.app/' target='_blank'>
        Team Project
      </Dropdown.Item>
      <Dropdown.Item icon={HiCake} className='text-black hover:text-indigo-600' href='https://sparkly-kulfi-104ba8.netlify.app/' target='_blank'>
        FireBase APP
      </Dropdown.Item>
    </Dropdown>
  )
}