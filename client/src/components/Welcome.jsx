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
const WelcomeCategory = ({name,type}) =>{
    return(
    <welcomecategory>
        <h1 className="text-4xl ">
            {name}
        </h1>
        <ul  className="text-white md:flex  flex-row space-x-2 items-center flex-initial">
            {["Artist1","Artist2","Artist3"].map((item,index)=>(
                <ArtistShortCuts key={item+index} name={item}/>
            ))}
        </ul>

    </welcomecategory>
    )
}
const ArtistShortCuts = ({name}) =>{
    return(
        <artistshortcut className="bg-primary">
            <div>
                <h1 className="px-4 text-2xl ">
                    {name}
                </h1>
            </div>
        </artistshortcut>
    )

}
const Welcome = () =>{
    return(
        <welcome>
            <div className="bg-secondary py-32 px-5 ml-20 mr-20 my-10">
                <WelcomeCategory name = "Trending Artists"> </WelcomeCategory>
            </div>
            <div className="bg-secondary px-20 py-20 ml-20 mr-20 my-10">
                <WelcomeCategory name = "Newest Artists"> </WelcomeCategory>
            </div>
            <div className="bg-secondary px-20 py-20 ml-20 mr-20 my-10">
                <WelcomeCategory name = "Popular Artists"> </WelcomeCategory>
            </div>
        </welcome>
    )

}
export default Welcome;