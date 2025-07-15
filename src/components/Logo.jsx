import Image from "next/image";

const Logo = () => {
    return <Image
        className="rounded-xl"
        src="/kj-logo.png"
        alt="KJ logo"
        width={180}
        height={38}
        priority
    />
}
export default Logo