import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        isFollowing: true,
        userName: "midudev", 
        name: "Miguel Ángel Durán" 
    },
    {
        isFollowing: false,
        userName: "pheralb", 
        name: "Pablo Hernandez" 
    },
    {
        isFollowing: true, 
        userName:"elonmusk",
        name:"Elon Musk" 
    },
    {
        isFollowing: false,
        userName: "fgutierrez", 
        name: "Francisco Gutiérrez Albornoz",
    }
]
export function App(){
    
    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name} = user
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            name={name}
                        />
                    )
                })
            }
        </section>
        
    )
}