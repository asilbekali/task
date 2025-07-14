import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-[1280px]  mx-auto py-5 flex items-center justify-between">
            <Link href={"/"}>
                <Image
                    src={"/full-logo.svg"}
                    alt="site logo"
                    width={243}
                    height={32}
                />
            </Link>

            <nav className="flex items-center justify-center gap-[10] text-white text-[17px]">
                <div className="flex gap-[30px]">
                    <Link className="cursor-pointer " href={"/marcetplace"}>
                        Marketplace
                    </Link>
                    <Link className="cursor-pointer " href={"/rankings"}>
                        Rankings
                    </Link>
                    <Link className="cursor-pointer " href={"/walet"}>
                        Connect a wallet
                    </Link>
                </div>
                <button className="flex gap-[12] cursor-pointer rounded-[20px] bg-[#A259FF] w-[152px] h-[60] justify-center items-center">
                    <Image
                        src={"/user.svg"}
                        alt="user logo"
                        width={20}
                        height={20}
                    />
                    <Link href={"/login"}>Sign Up</Link>
                </button>
            </nav>
        </header>
    );
};

export default Header;
