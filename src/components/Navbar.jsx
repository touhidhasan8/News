import Link from "next/link";
import userImage from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xl font-bold">

                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/about"}>About</NavLink>
                    <NavLink href={"/career"} >Career</NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href={"/login"}
                        className="bg-amber-300 px-3 py-1 rounded-lg"
                    >LogIn
                    </Link>

                    <Image
                        className="rounded-full"
                        src={userImage}
                        width={35}
                        height={35}
                        alt="user"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;