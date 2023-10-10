import { createContext, useState } from 'react'
import { categories as dbCategories } from "../data/categories"


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [categories, setCategories] = useState(dbCategories)
    const [currentCategory, setCurrentCategory] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setCurrentCategory(category)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    return(
        <ProductsContext.Provider 
        value={{
            categories,
            currentCategory,
            handleClickCategory,
            modal,
            handleClickModal,
            product,
            handleSetProduct
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