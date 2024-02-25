import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className="text-2xl">
          Want to learn more about cooking?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these recipes with 100 different countries. Watch and learn from professionals from the industry. Meet chef Gordon Ramsay with his unique recipes. Visit us..
        </p>
        <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
          <a href='https://www.google.ru' target='_blank' rel='noopener noreferrer'>
            100 Cooking recipes
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img src='https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg'/>
      </div>
    </div>
  )
}
