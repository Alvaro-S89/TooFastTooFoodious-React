import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import client from '../utils/axios'



const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const finalTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(finalTotal)
    }, [order])

    const getCategories = async () => {
        try {
            const response = await client('/api/categories')
            setCategories(response.data.data)
            setCurrentCategory(response.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getCategories()
    }, [])
    


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

    const handleAddOrder = ({category_id, ...product}) => {

        if(order.some(orderRep => orderRep.id === product.id)) {
            const updateOrder = order.map( orderRep => orderRep.id === product.id ? product : orderRep)
            setOrder(updateOrder)
            toast.success('Pedido modificado')
        } else {
            setOrder([...order, product])
            toast.success('Agregado al pedido')
        }
    }

    const handleEditQuantity = id => {
        const editProductQuantity = order.filter(product => product.id === id)[0]
        setProduct(editProductQuantity)
        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const editedCart = order.filter(product => product.id !== id)
        setOrder(editedCart)
        toast.success('Eliminado del pedido')
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
            handleSetProduct,
            order,
            handleAddOrder,
            handleEditQuantity,
            handleDeleteProduct,
            total
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