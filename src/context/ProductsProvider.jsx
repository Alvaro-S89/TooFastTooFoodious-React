import { createContext, useState } from 'react'
import { categories as dbCategories } from "../data/categories"


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [categories, setCategories] = useState(dbCategories)
    const [currentCategory, setCurrentCategory] = useState(categories[0])

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setCurrentCategory(category)
    }

    return(
        <ProductsContext.Provider 
        value={{
            categories,
            currentCategory,
            handleClickCategory
        }}
        >
            {children}
        </ProductsContext.Provider>
    )

}

export {
    ProductsProvider
}
export default ProductsContext