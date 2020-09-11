import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto Desenvolvido por: {'João Soares'}
        <a className='px-2 hover:underline' href='https://www.linkedin.com/in/jo%C3%A3o-soares-45363bb7/'>Linkedin</a> / {' '}
        <a className='px-2 hover:underline' href='https://github.com/JoaoBatiistadeSousaSoares'>GitHub</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div >
    </div>
  )
}
export default Footer