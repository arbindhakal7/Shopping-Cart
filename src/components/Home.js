import { CartState } from '../context/context'

const Home = () => {
    const { state : { products },
    } = CartState()

    return <div className='home'>
        <div className='prductContainer'>
        {products.map((prod) => {
        return <span>{prod.name}</span>
        })}
        </div>
    </div>

}

export default Home