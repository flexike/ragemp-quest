import style from './questcard.module.sass'
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
        <div className={style.questWrapper}>
            <div className={style.questCardContainer}>
                <div className={style.questCardHeader}>
                    <h3>{name}</h3>
                    <h4>{progress.current}<span>/{progress.total}</span></h4>
                </div>
                <div className={style.questCardMain}>
                    <p>{description}</p>
                </div>
                <div className={style.questCardFooter}>

                    {
                        status === "available" ?
                            <div className={style.btnsWrapper}>
                                <button className={`${style.btn} ${style.questAvailable}`}>Розпочати</button>
                            </div>

                        : status === "done" ?
                             <div className={style.btnsWrapper}>
                                <button className={`${style.btn} ${style.questDone}`}>Виконано</button>
                             </div>

                        : status === "current" ?
                             <div className={style.btnsWrapper}>
                                 <button className={`${style.btn}`}>В процесі</button>
                             </div>

                        : status === "disabled" ?
                             <div className={style.btnsWrapper}>
                                  <button className={`${style.btn} ${style.questDisabled}`}>Недоступно</button>
                             </div>
                             : null
                    }

                    <div className={`${style.questRewardsWrapper} ${status === "current" ? "" : `${style.gapQ}`}`}>

                        {
                            status === "disabled" ?
                                null
                                :
                            <>
                            {
                                rewards ?
                                            <div className={style.firstRewardsWrapper}>
                                                <div className={style.firstRewardsEXP}>+{rewards.exp} EXP</div>
                                                <div className={style.firstRewardsMON}>${BeautyMon(rewards.money)}</div>
                                            </div>
                                    : null
                            }

                            <div className={style.secondRewardsWrapper}>
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
                                         <div key={index} className={`${style.secondRewardsItem} ${style[item.rarity]}`}>
                                             <img src={bagIcon} alt="itemIcon" className={style.rewardsItemPicture}/>
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
            <img src={questBgCup} alt="QuestCupBGicon" className={style.questBackgroundIcon}/>
        </div>
    );
}

export default QuestCard;