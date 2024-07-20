'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="login flex items-center justify-center min-h-screen bg-gray-100">
      <div className="main-container h-screen grid grid-cols-12 gap-4 lg:gap-[1vw] bg-white rounded-lg p-8">
        {/* Form Section */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center lg:justify-self-center">
          <div className="w-full lg:w-[34.069vw]">
            <div className="px-8">
              <div className="logo">
                <img src="/assets/images/logo.svg" alt="logo" />
              </div>
              <h2 className="font-size-28 font-bold my-6">أهلاً بعودتك</h2>
            </div>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-size-20 font-bold mb-2"
                  htmlFor="username"
                >
                  اسم المستخدم
                </label>
                <input
                  className="shadow appearance-none border border-[#10B0C1] rounded-[10px] w-full py-2 px-3 lg:py-[0.8vw] lg:px-[1vw] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="ادخل اسمك بالكامل"
                />
              </div>
              <div className="mb-6 relative">
                <label
                  className="block text-gray-700 font-size-20 font-bold mb-2"
                  htmlFor="password"
                >
                  كلمة المرور
                </label>
                <input
                  className="shadow appearance-none border border-[#10B0C1] rounded-[10px] w-full py-2 px-3 lg:py-[0.8vw] lg:px-[1vw] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="ادخل كلمة السر"
                />
                <div className="absolute inset-y-0 left-[5px] lg:left-[.6vw] top-[10px] lg:top-[1.8vw] pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    className="focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="font-size-16 w-full bg-[#10B0C1] border border-[#10B0C1] rounded-[10px] hover:opacity-80 text-white font-bold py-2 px-4 lg:py-[.8vw] lg:px-[2vw] focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  تسجيل الدخول
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="flex items-center gap-2 lg:gap-[0.5vw] justify-center text-black border border-[#10B0C1] rounded-[10px] hover:opacity-80 font-bold py-2 px-4 lg:py-[.8vw] lg:px-[2vw] focus:shadow-outline w-full mt-2"
                  type="button"
                >
                  <span> Sign in with Google</span>
                  <span>
                    <img src="/assets/images/icons/google.png" alt="" />
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="flex items-center gap-2 lg:gap-[0.5vw] justify-center text-black border border-[#10B0C1] rounded-[10px] hover:opacity-80 font-bold py-2 px-4 lg:py-[.8vw] lg:px-[2vw] focus:shadow-outline w-full mt-2"
                  type="button"
                >
                  <span> Sign in with Apple</span>
                  <span>
                    <img src="/assets/images/icons/apple.png" alt="" />
                  </span>
                </button>
              </div>
              <div className="mt-4">
                <a
                  className="inline-block align-baseline font-bold font-size-16 text-[#010036]"
                  href="/"
                >
                  ليس لديك حساب؟ اشترك الان
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center">
          <img
            src="/assets/images/auth.png"
            alt="Login "
            className="rounded-lg"
          />
          <div className="font-size-16 flex items-center justify-between gap-3 lg:gap-[1.33vw]">
            <button
              className="flex items-center gap-2 lg:gap-[0.5vw] justify-center text-black border border-[#10B0C1] rounded-[10px] hover:opacity-80 font-bold py-2 px-4 lg:py-[.8vw] lg:px-[2vw] focus:shadow-outline whitespace-nowrap w-full mt-2"
              type="button"
            >
              <span>
                <img
                  className="w-[15px] lg:w-[1.736vw]"
                  src="/assets/images/icons/message.svg"
                  alt=""
                />
              </span>
              <span>طلب مساعدة</span>
            </button>
            <button
              className="flex items-center gap-2 lg:gap-[0.5vw] justify-center text-black border border-[#10B0C1] rounded-[10px] hover:opacity-80 font-bold py-2 px-4 lg:py-[.8vw] lg:px-[2vw] focus:shadow-outline whitespace-nowrap w-full mt-2"
              type="button"
            >
              <span>
                <img
                  className="w-[15px] lg:w-[1.736vw]"
                  src="/assets/images/icons/left-arrow.svg"
                  alt=""
                />
              </span>
              <span>العودة للرئيسية</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
