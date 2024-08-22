import {Key, SetStateAction, useEffect, useState} from 'react'
import './App.sass'
import QuestCardOption from "./components/QuestCardOption.tsx";
import QuestCard from "./components/QuestCard.tsx";

import everyDayQuestOptionON from './assets/everyDayQuestOptionON.svg'
import everyDayQuestOptionOff from './assets/everyDayQuestOptionOff.svg'
import startingQuestOptionON from './assets/startingQuestOptionON.svg'
import startingQuestOptionOFF from './assets/startingQuestOptionOFF.svg'
import DataFromServ from './data.json'

interface DataInterf {
    name: string;
    quests: QuestInterf[];
}

type QuestInterf = {
    name: string;
    description: string;
    status: 'available' | 'done' | 'current' | 'disabled'
    imagePath: string;
    progress: {
        current: number;
        total: number;
    };
    rewards: Rewards
}

type Rewards = {
    exp?: number
    money?: number
    items: {
        imagePath: string
        rarity: 'blue' | 'yellow' | 'purple' | 'red'
    }[]
}


function App() {

    const [data, setData] = useState<DataInterf[] | null>(null)
    const [currentOption, setCurrentOptions] = useState(0)

    useEffect(() => {
        fetchData()
    }, []);

    function fetchData() {
        setData(DataFromServ)
    }

    function optionHandler(inx: number){
        setCurrentOptions(inx)
        console.log("currentOption",currentOption, "CARDINDEX", inx)
    }


    return (
        <section className="quest-section">
            <div className="quest-container">
                <header className="quest-header">Menu None</header>
                <div className="quest-block">
                    <aside className="quest-block-aside">Aside None</aside>
                    {
                        data ?
                            <main className="quest-block-main">
                                <header className="quest-main-header">

                                {
                                        data?.map((questOptionFrData, index) => {
                                            return(
                                                <QuestCardOption
                                                    key = {questOptionFrData.name}
                                                    questOptionName = {questOptionFrData.name}
                                                    questOptionSVGoff = {`${startingQuestOptionOFF}`}
                                                    questOptionSVGon = {`${startingQuestOptionON}`}
                                                    selected = {currentOption === index}
                                                    onClick={() => optionHandler(index)}
                                                />
                                            )
                                        })
                                }



                            </header>

                            <div className="quest-desk">

                                {
                                        data?.map((questsCardFrData, index) => {
                                           if(currentOption === index) {
                                               return questsCardFrData.quests.map((quest) => (
                                                       <QuestCard
                                                           key={quest.name}
                                                           name={quest.name}
                                                           description={quest.description}
                                                           status={quest.status}
                                                           imagePath={quest.imagePath}
                                                           progress={quest.progress}
                                                           rewards={quest.rewards}
                                                       />
                                                   )
                                               )
                                           }
                                        })
                                }

                            </div>

                        </main>
                        :
                        <main className="quest-no-quest">NO QUESTS</main>
                }
            </div>
        </div>
    </section>
  )
}

export default App
