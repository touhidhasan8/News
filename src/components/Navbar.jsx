"use client";

import Link from "next/link";
import userImage from "@/assets/user.png";
import logoImage from "@/assets/logo.png"
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);

    return (
        <nav className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">


                <div className="text-xl font-bold">
                    <Image
                        className="rounded-full"
                        src={logoImage}
                        width={35}
                        height={35}
                        alt="user"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-4">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/about"}>About</NavLink>
                    <NavLink href={"/career"}>Career</NavLink>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    {open ? <LuX /> : <LuMenu />}
                </button>

                {/* User Section */}
                <div className="hidden md:flex items-center gap-3">
                    {isPending ? (
                        <h1>Loading...</h1>
                    ) : user ? (
                        <>
                            <h2>Hello, {user.name}</h2>
                            <Image
                                className="rounded-full"
                                src={user.image || userImage}
                                width={35}
                                height={35}
                                alt="user"
                            />
                            <button onClick={async () => await authClient.signOut()}>
                                LogOut
                            </button>
                        </>
                    ) : (
                        <Link
                            href={"/login"}
                            className="bg-amber-300 px-3 py-1 rounded-lg"
                        >
                            LogIn
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="flex flex-col gap-4 mt-4 md:hidden">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/about"}>About</NavLink>
                    <NavLink href={"/career"}>Career</NavLink>

                    {isPending ? (
                        <h1>Loading...</h1>
                    ) : user ? (
                        <div className="flex items-center gap-3">
                            <Image
                                className="rounded-full"
                                src={user.image || userImage}
                                width={35}
                                height={35}
                                alt="user"
                            />
                            <button onClick={async () => await authClient.signOut()}>
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <Link
                            href={"/login"}
                            className="bg-amber-300 px-3 py-1 rounded-lg w-fit"
                        >
                            LogIn
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;