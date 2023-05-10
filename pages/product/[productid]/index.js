import { useRouter } from 'next/router'

function ProductDetail(){
    const router=useRouter()
    const productid=router.query.productid
    return (
        <>
            <h1>Detail about product {productid}</h1>
        </>
    )
}

export default ProductDetail