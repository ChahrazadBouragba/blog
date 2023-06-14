import AestheticPicture from "./AestheticPicture"
import Images from "./Images"
import Quotations from './Quotes'
import Aesthetic from './Aesthetic'

export default function Post() {
    return (
        <>
            <div>
           
                {/* <Images numberOfImages={1}/> */}
                <Quotations numberOfQuotes={1}/>
                <Aesthetic numberOfImages={3}/>
                this is another one
     <AestheticPicture  numberOfPictures={2}/>
     this is another one
     <AestheticPicture  numberOfPictures={2}/>
            </div>
            <div>
            {/* <AestheticPicture  numberOfPictures={6}/> */}
            {/* <Images numberOfImages={1}/> */}
            <Quotations numberOfQuotes={1}/>
            <Aesthetic numberOfImages={5}/>
            </div>
        </>
    )
}