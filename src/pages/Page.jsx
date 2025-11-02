import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

import { PreparationTime } from "../components/Time/PreparationTime"
import { Ingredients } from "../components/Ingredients/Ingredients"
import { Instructions } from "../components/Instructions/Instructions"
import { Nutrition } from "../components/Nutrition/Nutrition"

import omeletteImage from "../img/image-omelette.jpeg"

import { prepTime } from "../data/prepTime"
import { ingredientItem } from "../data/ingredientItem"
import { instructions } from "../data/instructions"
import { nutritionList } from "../data/nutritionList"

const omeletteImg = omeletteImage

export const Page = () => {
    return(
        <>
            <div className="container">
                <header>
                    < Header omelette={omeletteImg} />
                </header>
                <main>
                    < PreparationTime times={prepTime} />
                    < Ingredients items={ingredientItem} />
                    < Instructions instruction={instructions} />
                    < Nutrition nutritionsList={nutritionList} />
                </main>
                <footer>
                    < Footer />
                </footer>
            </div>
        </>
    )
}