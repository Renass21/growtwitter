import styled from "styled-components";
import { Tweet } from "./Tweet.";
import perfil from '../assets/MARCAÇAO_FOTO_PERFIL.svg'


const StyledMain = styled.main`
    display: block;
    flex: 1 1 0%;
    background-color: black;
    overflow: auto;
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    h1 {
        border: 1px solid white;
        font-size: 1.5rem;
        padding: 0.5rem;
    }
`
const Main = () => {
    return(
        <StyledMain >
            <h1>Página inicial</h1>
            <Tweet profilePhoto={perfil}
            name="Renato dos Santos"
            userName="Renass21"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX"
            userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX"
            userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX" userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX" userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX" userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX"
            userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX" userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />
            <Tweet profilePhoto={perfil}
            name="XXXXX"
            userName="XXXXXXXXXXXXX"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta."
            />

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam quasi in officia? Id ipsam nemo consequuntur! Autem nobis facilis ullam esse ducimus maiores veritatis dolore, at quo? Doloribus, dicta.</p>
            </div>
        </StyledMain>
    )
}

export default Main;