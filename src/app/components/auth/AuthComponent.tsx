import { Button, Input, Tab, Tabs } from '@nextui-org/react';
import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { LuTicket } from "react-icons/lu";
import Image from 'next/image';
import singupimage from "../../../../public/Singupimage.png"
import loginimage from "../../../../public/03.png"


const AuthComponent = () => {
    const [activeTab, setActiveTab] = useState<string>("sing-up");

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex w-full flex-row justify-center items-center">
            {/* Content left forms */}
            <div className="contentLeft flex w-[547px] h-[600px] flex-col justify-center items-center">
                <div className="flex max-w-full flex-col justify-start items-center w-[424px] h-[497px] bg-transparent py-5">
                <Tabs
                    variant="solid"
                    color="warning"
                    size="lg"
                    classNames={{
                    tabList:
                        "p-0 w-full relative bg-[#1c1c1c] rounded-[10px] text-[#fffffff]",
                    tab: "max-w-fit",
                    cursor: "w-full rounded-[10px]",
                    tabContent:
                        "px-4 w-full group-data-[selected=true]:text-[#000000] text-[#fffffff]",
                    }}
                    aria-label="Tabs variants"
                    /* selectedKey={selected} */
                    onSelectionChange={(key) => setActiveTab(key as unknown as string)}
                >
                    <Tab className="px-2" key="sing-up" title="Sing up">
                    <div className="flex flex-col justify-center items-center w-[424px] h-[480px]">
                        <form className="flex flex-col gap-8 h-[300px]">
                        <div className="boxSearch w-[390px] flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg bg-[#ffffff]">
                            <Input
                            isRequired
                            placeholder="Enter your name"
                            type="text"
                            isClearable
                            classNames={{
                                input: ["text-black/90 dark:text-white/90"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "rounded-t-lg",
                                    "px-2",
                                    "rounded-b-none",
                                    "!cursor-text",
                                ],
                            }}
                            />
                        </div>
                        
                        <div className="boxSearch w-[390px] flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg bg-[#ffffff]">
                        
                            <Input
                            isRequired
                            placeholder="Email"
                            type="email"
                            isClearable
                            classNames={{
                                input: ["text-black/90 dark:text-white/90"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "rounded-t-lg",
                                    "px-2",
                                    "rounded-b-none",
                                    "!cursor-text",
                                ],
                            }}
                            />
                        </div>
                        <div className="boxSearch w-[390px] flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg bg-[#ffffff]">
                            <Input
                            isRequired
                            placeholder="Enter your password"
                            endContent={
                                <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                                >
                                {isVisible ? (
                                    <FaRegEyeSlash className="text-base text-default-400 pointer-events-none" />
                                ) : (
                                    <FaRegEye className="text-base text-default-400 pointer-events-none" />
                                )}
                                </button>
                            }
                            classNames={{
                                input: ["text-black/90 dark:text-white/90"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "rounded-t-lg",
                                    "px-2",
                                    "rounded-b-none",
                                    "!cursor-text",
                                ],
                            }}
                            type={isVisible ? "text" : "password"}
                            />
                        </div>
                        
                        <div className="flex gap-2 justify-end">
                            <Button fullWidth endContent={<AiOutlineMail />} className="bg-[#F0B90B] rounded">
                            Register with yoour Email
                            </Button>
                        </div>

                        <p className="text-center text-xs">
                            For any questions, reach out to support@Quickbetdmovies.com
                        </p>
                        </form>
                    </div>
                    </Tab>
                    <Tab className="px-2" key="login" title="Log in">
                    <div className="flex flex-col justify-center items-center w-[424px] h-[480px] ">
                        <form className="flex flex-col gap-8 p-4">
                        <p className="text-center text-sm">
                            We love having you back
                        </p>
                        <div className="boxSearch w-[390px] flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg bg-[#ffffff]">
                        
                            <Input
                            isRequired
                            placeholder="Email"
                            type="email"
                            isClearable
                            classNames={{
                                input: ["text-black/90 dark:text-white/90"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "rounded-t-lg",
                                    "px-2",
                                    "rounded-b-none",
                                    "!cursor-text",
                                ],
                            }}
                            />
                        </div>
                        <div className="boxSearch flex flex-wrap md:flex-nowrap mb-6 md:mb-0 rounded-t-lg bg-[#1c1c1c]">
                            <Input
                            isRequired
                            placeholder="Enter your password"
                            endContent={
                                <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                                >
                                {isVisible ? (
                                    <FaRegEyeSlash className="text-base text-default-400 pointer-events-none" />
                                ) : (
                                    <FaRegEye className="text-base text-default-400 pointer-events-none" />
                                )}
                                </button>
                            }
                            classNames={{
                                input: ["text-black/90 dark:text-white/90"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "rounded-t-lg",
                                    "px-2",
                                    "rounded-b-none",
                                    "!cursor-text",
                                ],
                            }}
                            type={isVisible ? "text" : "password"}
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button fullWidth endContent={<LuTicket />} className="bg-[#F0B90B] rounded">
                            Continue
                            </Button>
                        </div>
                        <p className="text-center text-xs">
                            For any questions, reach out to suppert@Quickbetdmovies.com
                        </p>
                        </form>
                    </div>
                    </Tab>
                </Tabs>
                </div>
            </div>
            {/* Content information rigth */}
            <div className="contentRight flex w-[547px] h-[600px] flex-col justify-center items-center bg-[#1c1c1c] p-0 rounded-tr-xl rounded-br-xl">
                {activeTab === "sing-up" && (
                <div className="singUpImage flex flex-col justify-start items-center w-[424px] h-[100%] overflow-hidden">
                    <div className="contText flex flex-col justify-center items-center pt-7 gap-6">
                        <h1 className="text-center text-4xl">
                            Welcome to Quickbet<br />
                            Movies!
                        </h1>
                        <p className="text-center mt-2">
                            🎬 Ready to unlock a universe of cinematic <br />
                            delights? Sign up now and start your journey with <br />
                            us!
                        </p>
                    </div>
                    <div className="contImage  flex   overflow-hidden">
                        <Image src={singupimage} alt="Logo"></Image>
                    </div>
                </div>
                )}
                {activeTab === "login" && (
                <div className="loginImage flex flex-col justify-start items-center w-[424px] h-[100%]">
                    <div className="contText flex flex-col justify-center items-center gap-6 pt-7 ">
                        <h1 className="text-center text-4xl">
                            Welcome back to <br />
                            Quickbet Movies!
                        </h1>
                        <p className="text-center mt-2">
                            🍿 Ready to dive into the world of unlimited <br />
                            entertainment? Enter your credentials and let the <br />
                            cinematic adventure begin!
                        </p>
                    </div>
                    <div className="contImage  flex   overflow-hidden">
                        <Image
                            className='bg-transparent'
                             src={loginimage} alt="Logo"></Image>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default AuthComponent;