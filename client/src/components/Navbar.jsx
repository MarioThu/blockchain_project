import logo from '../../../images/CurArt.png'
const NavbarItem = ({title,classProps}) => {
    return(
        <li className ={'mx-4 cursor-pointer ${classProps}' }>
            {title}
        </li>
    );
}
const connectWallet = () => {

}
const Navbar = () => {
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className ="w-32 cursor-pointer" />
            </div> 
            <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                {["Market","Tutorial","Wallets"].map((item,index)=>(
                    <NavbarItem key ={item+index} title={item}/>
                ))}
            </ul>
            <button type ="button" onClick={connectWallet} className = "flex flex-row my-5 justify-center p-3 bg-secondary rounded-full">
                <p className ="text-black text-base font-semibold">
                    Connect Wallet
                </p>
            </button>
        </nav>
    );
}
export default Navbar 