import './questcard.sass'
import bagIcon from "../assets/bagIcon.png";
import questBgCup from "../assets/quest-bg-cup.svg";
import {createLogger} from "vite";

interface QuestCardProps {
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

function QuestCard({name, description, status, imagePath, progress, rewards}: QuestCardProps) {

    function BeautyMon(mon: any) {
        mon = mon.toString()
        let formattedMon = ""
        for (let i = mon.length - 1; i >= 0; i--) {
            formattedMon = mon[i] + formattedMon

            if ((mon.length - i) % 3 === 0 && i !== 0) {
                formattedMon = "." + formattedMon
            }
        }
        return formattedMon
    }

    return (
        <div className="quest-wrapper">
            <div className="quest-card-container">
                <div className="quest-card-header">
                    <h3>{name}</h3>
                    <h4>{progress.current}<span>/{progress.total}</span></h4>
                </div>
                <div className="quest-card-main">
                    <p>{description}</p>
                </div>
                <div className="quest-card-footer">

                    {
                        status === "available" ?
                            <div className="btns-wrapper">
                                <button className={`btn quest-available`}>Розпочати</button>
                            </div>

                        : status === "done" ?
                             <div className="btns-wrapper">
                                <button className={`btn quest-done`}>Виконано</button>
                             </div>

                        : status === "current" ?
                             <div className="btns-wrapper">
                                 <button className={`btn`}>В процесі</button>
                             </div>

                        : status === "disabled" ?
                             <div className="btns-wrapper">
                                  <button className={`btn quest-disabled`}>Недоступно</button>
                             </div>
                             : null
                    }

                    <div className={`quest-rewards-wrapper ${status === "current" ? "" : "gapQ"}`}>

                        {
                            status === "disabled" ?
                                null
                                :
                            <>
                            {
                                rewards ?
                                            <div className="first-rewards-wrapper">
                                                <div className="first-rewards-EXP">+{rewards.exp} EXP</div>
                                                <div className="first-rewards-MON">${BeautyMon(rewards.money)}</div>
                                            </div>
                                    : null
                            }

                            <div className="second-rewards-wrapper">
                            {
                                 rewards.items ? (
                                     rewards.items.sort((a, b) => {
                                         const rarityOrder = {
                                             "blue": 1,
                                             "yellow": 2,
                                             "purple": 3,
                                             "red": 4
                                         }
                                         return rarityOrder[a.rarity] - rarityOrder[b.rarity]
                                     }).map((item, index) => {
                                     return (
                                         <div key={index} className={`second-rewards-item ${item.rarity}`}>
                                             <img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>
                                         </div>
                                     )
                                    }
                                  )
                                ): null
                            }
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <img src={questBgCup} alt="QuestCupBGicon" className="quest-background-icon"/>
        </div>
    );
}

export default QuestCard;