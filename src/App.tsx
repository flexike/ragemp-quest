import {Key, useEffect, useState} from 'react'
import './App.sass'
import QuestCardOption from "./components/QuestCardOption.tsx";
import QuestCard from "./components/QuestCard.tsx";
import everyDayQuestOptionON from './assets/everyDayQuestOptionON.svg'
import everyDayQuestOptionOff from './assets/everyDayQuestOptionOff.svg'
import startingQuestOptionON from './assets/startingQuestOptionON.svg'
import startingQuestOptionOFF from './assets/startingQuestOptionOFF.svg'
import DataFromServ from './data.json'
import {createLogger} from "vite";


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
    rewards: Rewards[]
}[]

type Rewards = {
    exp?: number
    money?: number
    items: {
        imagePath: string
        rarity: 'blue' | 'yellow' | 'purple' | 'red'
    }[]
}


function App() {

    const [data, setData] = useState<DataInterf | null>(null)
    const bool: boolean = true

    useEffect(() => {
        fetchData()
    }, []);

    function fetchData() {
        setData(DataFromServ)
        // console.log('Data is received', DataFromServ)
    }


    return (
        <section className="quest-section">
            <div className="quest-container">
                <header className="quest-header">Menu None</header>
                <div className="quest-block">
                    <aside className="quest-block-aside">Aside None</aside>
                    {
                        bool ?
                            <main className="quest-block-main">
                                <header className="quest-main-header">

                                {
                                    data ?
                                        data.map((questOptionFrData: { name: string; }, index: Key | null | undefined) => {
                                            return(
                                                <QuestCardOption
                                                    key = {index}
                                                    questOptionName = {questOptionFrData.name}
                                                    questOptionSVGoff = {`${startingQuestOptionOFF}`}
                                                    questOptionSVGon = {`${startingQuestOptionON}`}
                                                />
                                            )
                                        })
                                    :
                                    null
                                }



                            </header>

                            <div className="quest-desk">

                                {
                                    data ?
                                        data.map((questsCardFrData: any) => {
                                            // console.log('QUESTcardDATA', questsCardFrData.quests)
                                            questsCardFrData.quests.forEach((quest: any) => {
                                                // console.log("QUEST (FOREACH):", quest.rewards, quest.progress)
                                                return (
                                                    <QuestCard
                                                        questName = {quest.name}
                                                        questDescription = {quest.description}
                                                        questStatus = {quest.status}
                                                        questImagePath = {quest.imagePath}
                                                        questProgress = {quest.progress}
                                                        questRewards = {quest.rewards}
                                                    />
                                                )
                                            })
                                        })
                                        :
                                        null
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
