import Image from "next/image";
const HeroSection= () =>{
    return(
    
        <div className=" text-center w-full h-[700] ">
            <div className="w-full h-14 bg-gray-200">
                <h3 className="text-xl">Hello Nike App</h3>
                <p className="text-xs pt-2 ">Download the app to acess everything Nike.
                     <button><b><u>Get Your App</u></b></button></p>

            </div>
            <div className="w-full h-[977px]">
                <Image src="/Image.png" alt="image" height={100} width={100} className="w-full h-[500px]"/>
                    <div className="w-full h-[229px] pt-7 items-center">
                        <h6 className="text-xs font-semibold">First Look</h6>
                        <h2 className="text-2xl font-bold pt-2">NIKE AIR MAX PULSE</h2>
                        <p className="text-xs pt-2 ">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                        —designed to push you past your limits and help you go to the max.</p>
                        <button className="bg-black rounded-2xl text-white mt-4 text-xs px-2 py-2 ">
                            Notify Me</button> <button className="bg-black rounded-2xl text-white mt-4 text-xs px-2 py-2 ">Shop Air Max</button>
                    </div>
            </div>
        </div>


 
    );
}
export default HeroSection;