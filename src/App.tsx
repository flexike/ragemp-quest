import { useState } from 'react'
import './App.sass'
import QuestCardOption from "./components/QuestCardOption.tsx";
import everyDayQuestOptionON from './assets/everyDayQuestOptionON.svg'
import everyDayQuestOptionOff from './assets/everyDayQuestOptionOff.svg'
import startingQuestOptionON from './assets/startingQuestOptionON.svg'
import startingQuestOptionOFF from './assets/startingQuestOptionOFF.svg'
import questBgCup from './assets/quest-bg-cup.svg'


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

                                <div className="quest-wrapper">
                                    <div className="quest-card-container">
                                        <div className="quest-card-header">
                                            <h3>Quest Name</h3>
                                            <h3>EXP/MAX_EXP</h3>
                                        </div>
                                        <div className="quest-card-main">
                                            <h5>QUEST DESCRIPTION</h5>
                                        </div>
                                        <div className="quest-card-footer">
                                            btn, EXP+MONEY, Items
                                        </div>
                                    </div>
                                    <img src={questBgCup} alt="QuestCupBGicon" className="quest-background-icon" />
                                </div>

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
