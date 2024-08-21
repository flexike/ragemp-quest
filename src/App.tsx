import { useState } from 'react'
import './App.sass'
import QuestCardOption from "./components/QuestCardOption.tsx";
import everyDayQuestOptionON from './assets/everyDayQuestOptionON.svg'
import everyDayQuestOptionOff from './assets/everyDayQuestOptionOff.svg'
import startingQuestOptionON from './assets/startingQuestOptionON.svg'
import startingQuestOptionOFF from './assets/startingQuestOptionOFF.svg'
import QuestCard from "./components/QuestCard.tsx";


function App() {
    const [data, setData] = useState<any>([])

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

                                <QuestCardOption
                                    questOptionName = "Початкові"
                                    questOptionSVGoff = {`${startingQuestOptionOFF}`}
                                    questOptionSVGon = {`${startingQuestOptionON}`}
                                    questOptionQuests = {{}}
                                />

                                <QuestCardOption
                                    questOptionName = "Щоденні"
                                    questOptionSVGoff = {`${everyDayQuestOptionOff}`}
                                    questOptionSVGon = {`${everyDayQuestOptionON}`}
                                    questOptionQuests = {{}}
                                />

                            </header>

                            <div className="quest-desk">

                                <QuestCard
                                    questName="Назва Квесту"
                                    questDescription = "Розколоти 3 палети патиків на бригаді"
                                    questStatus = "current"
                                    questImagePath = ""
                                    questProgress = {{current: 0, total: 3000 }}
                                    questRewards = {{
                                        exp: 1250,
                                        money: 5000000,
                                        items: {
                                            imagePath: 'string',
                                            rarity: 'blue'
                                        }
                                    }}
                                />

                                <QuestCard
                                    questName="Назва Квесту"
                                    questDescription = "Розколоти 3 палети патиків на бригаді"
                                    questStatus = "available"
                                    questImagePath = ""
                                    questProgress = {{current: 0, total: 3000 }}
                                    questRewards = {{
                                        exp: 1250,
                                        money: 5000000,
                                        items: {
                                            imagePath: 'string',
                                            rarity: 'purple'
                                        }
                                    }}
                                />

                                <QuestCard
                                    questName="Назва Квесту"
                                    questDescription = "Розколоти 3 палети патиків на бригаді"
                                    questStatus = "done"
                                    questImagePath = ""
                                    questProgress = {{current: 0, total: 3000 }}
                                    questRewards = {{
                                        exp: 1250,
                                        money: 5000000,
                                        items: {
                                            imagePath: 'string',
                                            rarity: 'red'
                                        }
                                    }}
                                />

                                <QuestCard
                                    questName="Назва Квесту"
                                    questDescription = "Розколоти 3 палети патиків на бригаді"
                                    questStatus = "disabled"
                                    questImagePath = ""
                                    questProgress = {{current: 0, total: 3000 }}
                                    questRewards = {{
                                        exp: 1250,
                                        money: 5000000,
                                        items: {
                                            imagePath: 'string',
                                            rarity: 'yellow'
                                        }
                                    }}
                                />

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
