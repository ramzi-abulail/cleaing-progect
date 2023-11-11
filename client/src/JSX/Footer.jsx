import React from 'react'
import logo from '../img/logo.png'

function Footer() {
    return (
        <div>
            <footer class="bg-blue-500 dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="./">
                                <img src={logo} class="h-24 mr-3" alt="Logo" />

                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                                <ul class="text-white dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/ramzi-abulail" class="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/ramzi-abulail" class="hover:underline">Linkedin</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="./" class="hover:underline">Cleanex Clean</a>. All Rights Reserved.
                        </span>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer