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
    <welcomecategory className="flex flex-col bg-secondary py-16 px-5 mx-20 my-10">
        <h1 className="text-4xl ">
            {name}
        </h1>
        <div className ="flex h-8 "/>
        <div className="text-white md:flex  flex-row space-x-2 items-center flex-initial overflow-x-auto">
            {["Artist1","Artist2","Artist3","Artist4","Artist5","Artist6","Artist7","Artist8","Artist9"].map((item,index)=>(
                <ArtistShortCuts key={item+index} name={item}/>
            ))}
        </div>
    </welcomecategory>
    )
}
const ArtistShortCuts = ({name}) =>{
    return(
        <div className="bg-primary rounded-md border-4 border-solid flex-col min-w-min" onClick={openArtist}>
            <div className="bg-primary w-80 h-80">
                Bild
            </div>
            <h1 className="px-6 text-4xl w-80">
                {name}
            </h1>
        </div>
    )
    const openArtist = () =>{
        
    }

}
const Welcome = () =>{
    return(
        <welcome>
            <WelcomeCategory name = "Trending Artists"> </WelcomeCategory>
            <WelcomeCategory name = "Newest Artists"> </WelcomeCategory>
            <WelcomeCategory name = "Popular Artists"> </WelcomeCategory>            
        </welcome>
    )

}
export default Welcome;