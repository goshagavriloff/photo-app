import React from 'react'
import { useNavigate } from 'react-router-dom';



import shareVideo from '../assets/share.mp4';
import logo from '../assets/logo_light.png';

const Login = () => {
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    navigate('/');
  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/80 backdrop-brightness-75'>
          

          <section class="">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
      <div className='p-5'>
            <img src={logo} width="300px" alt='logo' />
          </div>
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Личный кабинет
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Ваш email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="">Запомнить меня</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Забыли пароль?</a>
                  </div>
                  <button type="submit" class="w-full text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Войти</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Нет аккаунта? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Зарегистрироваться</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

        </div>
      </div>
    </div>
  )
}

export default Login