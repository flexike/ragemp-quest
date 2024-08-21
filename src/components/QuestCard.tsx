import './questcard.sass'
import bagIcon from "../assets/bagIcon.png";
import questBgCup from "../assets/quest-bg-cup.svg";

interface QuestCardProps {
    questName: string
    questDescription: string
    questStatus: 'available' | 'done' | 'current' | 'disabled'
    questImagePath: string
    questProgress: {
        current: number
        total: number
    }
    questRewards: Rewards[]
}

type Rewards = {
    exp?: number
    money?: number
    items: {
        imagePath: string
        rarity: 'blue' | 'yellow' | 'purple' | 'red'
    }[]
}

function QuestCard({questName, questDescription, questStatus, questImagePath, questProgress, questRewards}: QuestCardProps) {

    console.log(`Quest Rewards: ${questRewards}`)


    return (
        <div className="quest-wrapper">
            <div className="quest-card-container">
                <div className="quest-card-header">
                    <h3>{questName}</h3>
                    <h4>{questProgress.current}<span>/{questProgress.total}</span></h4>
                </div>
                <div className="quest-card-main">
                    <p>{questDescription}</p>
                </div>
                <div className="quest-card-footer">

                    {
                        questStatus === "available" ?
                            <div className="btns-wrapper">
                                <button className={`btn quest-available`}>Розпочати</button>
                            </div>

                        : questStatus === "done" ?
                             <div className="btns-wrapper">
                                <button className={`btn quest-done`}>Виконано</button>
                             </div>

                        : questStatus === "current" ?
                             <div className="btns-wrapper">
                                 <button className={`btn`}>В процесі</button>
                             </div>

                        : questStatus === "disabled" ?
                             <div className="btns-wrapper">
                                  <button className={`btn quest-disabled`}>Недоступно</button>
                             </div>
                             : null
                    }

                    <div className="quest-rewards-wrapper">

                        {
                            questStatus === "disabled" ?
                                null
                                :
                            <>
                            {
                                questRewards ?
                                    questRewards.map((questRew) => {
                                        return (
                                            <div className="first-rewards-wrapper">
                                                <div className="first-rewards-EXP">+{questRew.exp} EXP</div>
                                                <div className="first-rewards-MON">${questRew.money}</div>
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                                <div className="second-rewards-wrapper">
                                    {
                                        questRewards ?

                                            questRewards.map((questRew) => {
                                                return (
                                                    <div className={`second-rewards-item ${questRew.items.rarity}`}>
                                                        <img src={bagIcon} alt="itemIcon"
                                                             className="rewards-item-picture"/>
                                                        </div>
                                                )
                                            })

                                            // <div className={`second-rewards-item `}>
                                            //     <img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>
                                            // </div>
                                            : null
                                    }

                                    {/*<div className={`second-rewards-item`}>*/}
                                    {/*<img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>*/}
                                    {/*</div>*/}
                                    {/*<div className={`second-rewards-item ${"blue"}`}>*/}
                                    {/*<img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>*/}
                                    {/*</div>*/}
                                    {/*<div className={`second-rewards-item ${"purple"}`}>*/}
                                    {/*<img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>*/}
                                    {/*</div>*/}


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