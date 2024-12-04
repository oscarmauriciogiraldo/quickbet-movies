'use client'
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link"
import Logo from "../../../../public/Logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import React from "react";
import AuthComponent from "../auth/AuthComponent";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  /* lINKS MENU */
  const navLinks = [{ name: "Popular" }, { name: "Favorites" }];

  return (
    <header className=" sticky flex w-full h-[69px] items-center justify-between px-[40px] py-[10px] bg-black lg:container lg:mx-auto  z-50  top-0">
        {/* Logo and nav container */}
        <div className="flex items-center">
            <div className="flex w-[120px] overflow-hidden">
            <Link href={"/"}>
                <Image src={Logo} alt="Logo" className="cursor-pointer" />
            </Link>
            </div>
            <div className="hidden lg:flex pl-[64px] gap-x-[60px]">
            {navLinks.map((item, index) => (
                <p className=" text-sm cursor-pointer font-normal" key={index}>{item.name}</p>
            ))}
            </div>
        </div>

        <div className="ContentloginButton">
        <div className="flex items-center gap-x-2">
          <Button className="text-current" isIconOnly  variant="light" onPress={onOpen}>
            <FaRegCircleUser  className="text-xl cursor-pointer"  />
          </Button>
          <Modal 
            size="5xl"
            placement="top-center"
            backdrop="transparent"
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  }
                }
              }
            }}
            classNames={{
              /* bg-opacity-50 */
              body: "p-3 bg-[#ffffff]  rounded-[16px] border-white  bg-opacity-10 backdrop-blur-lg",
              base: "border-white bg-transparent",
              closeButton: " hidden ",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  
                  <ModalBody className="relative">
                    <Button className=" absolute text-current m-0 w-[100px]" variant="light" startContent={
                        <IoChevronBackCircleOutline  className="text-xl cursor-pointer"  />
                      } onPress={onClose}>
                      Back
                    </Button>
                    <AuthComponent />
                  </ModalBody>
                  
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
