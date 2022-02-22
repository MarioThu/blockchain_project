const Input = ({placeholder,name,type,value,handleChange}) => {
    return(
    <input
        placeholder = {placeholder}
        name = {name}
        type = {type}
        value = {value}
        onChange = {(e) => handleChange(e,name)}
        className = "my-2 w-full rounded-lg text-white bg-transparent white-glassmorphism p-2 border-none outline-none"
    />
    )
}
const handleChange = () => {

}
const Welcome =() =>{
    const connectWallet = () => {
        
    }
    const sendEth = () => {

    }
    return(
        <welcome className ="flex w-full justify-center items-center">
            <div className = "flex flex-1 flex-col w-full justify-center items-center" >
                <h1 className = "text-white text-3xl  sm:text-5xl">
                    test transactions
                </h1>
                <button type ="button" onClick={connectWallet} className = "flex flex-row my-5 justify-center p-3 bg-[#2952e3] rounded-full">
                    <p className ="text-white text-base font-semibold">Connect Wallet</p>
                </button>
            </div>
            <div className = "flex w-1/4 flex-col justify-start items-center my-5 blue-glassmorphism">
                <Input placeholder="Address To" name="adressTo" type="text"></Input>
                <Input placeholder="Amount ETH" name="amount_eth" type="text"></Input>
                <button type="button" onClick={sendEth} className = "flex flex-row my-5 justify-center p-3 bg-[#2952e3] rounded-full">
                    <p className ="text-white text-base font-semibold">
                        Send Ethereum
                    </p>
                </button>
            </div> 
        </welcome>
    )

}
export default Welcome;