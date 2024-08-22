import style from './App.module.sass'
import {Key, SetStateAction, useEffect, useState} from 'react'
import QuestCardOption from "./components/QuestCardOption.tsx";
import QuestCard from "./components/QuestCard.tsx";

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
    }


    return (
        <section className={style.questSection}>
            <div className={style.questContainer}>
                <header className={style.questHeader}>Menu None</header>
                <div className={style.questBlock}>
                    <aside className={style.questBlockAside}>Aside None</aside>
                    {
                        data ?
                            <main className={style.questBlockMain}>
                                <header className={style.questMainHeader}>

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

                            <div className={style.questDesk}>

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
                        <main className={style.questNoQuest}>NO QUESTS</main>
                }
            </div>
        </div>
    </section>
  )
}

export default App
