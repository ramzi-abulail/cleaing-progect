import React from 'react';
import img6 from '../img/img6.jpg';

function HeroSection() {
  return (
    <div>
     
     <section class="bg-white dark:bg-gray-900">
    <div class="flex flex-row mx-20  px-4 border border-black">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class=" mb-4  md:text-5xl text-black">the clean is easy with us </h1>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={img6} alt="mockup"/>
        </div>                
    </div>
</section>



    </div>
  );
}

export default HeroSection;
