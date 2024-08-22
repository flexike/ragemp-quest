import "./questcard.sass"
import bagIcon from "../assets/bagIcon.png"
import questBgCup from "../assets/quest-bg-cup.svg"

interface QuestCardProps {
  name: string
  description: string
  status: "available" | "done" | "current" | "disabled"
  imagePath: string
  progress: {
    current: number
    total: number
  }
  rewards: Rewards
}

type Rewards = {
  exp?: number
  money?: number
  items: {
    imagePath: string
    rarity: "blue" | "yellow" | "purple" | "red"
  }[]
}

function QuestCard({
  name,
  description,
  status,
  imagePath,
  progress,
  rewards,
}: QuestCardProps) {
  console.log(`Quest Rewards: ${name}`)

  return (
    <div className="quest-wrapper">
      <div className="quest-card-container">
        <div className="quest-card-header">
          <h3>{name}</h3>
          <h4>
            {progress.current}
            <span>/{progress.total}</span>
          </h4>
        </div>
        <div className="quest-card-main">
          <p>{description}</p>
        </div>
        <div className="quest-card-footer">
          {status === "available" ? (
            <div className="btns-wrapper">
              <button className={`btn quest-available`}>Розпочати</button>
            </div>
          ) : status === "done" ? (
            <div className="btns-wrapper">
              <button className={`btn quest-done`}>Виконано</button>
            </div>
          ) : status === "current" ? (
            <div className="btns-wrapper">
              <button className={`btn`}>В процесі</button>
            </div>
          ) : status === "disabled" ? (
            <div className="btns-wrapper">
              <button className={`btn quest-disabled`}>Недоступно</button>
            </div>
          ) : null}

          <div className="quest-rewards-wrapper">
            {status === "disabled" ? null : (
              <>
                {rewards
                  ? rewards.exp
                  : // rewards.map((questRew) => {
                    //     return (
                    //         <div className="first-rewards-wrapper">
                    //             <div className="first-rewards-EXP">+{questRew.exp} EXP</div>
                    //             <div className="first-rewards-MON">${questRew.money}</div>
                    //         </div>
                    //     )
                    // })
                    null}

                <div className="second-rewards-wrapper">
                  {rewards
                    ? rewards.exp
                    : // rewards.map((questRew) => {
                      //     return (
                      //         <div className={`second-rewards-item ${questRew.items.map((c) => {return c.rarity})}`}>
                      //             <img src={bagIcon} alt="itemIcon"
                      //                  className="rewards-item-picture"/>
                      //             </div>
                      //     )
                      // })

                      // <div className={`second-rewards-item `}>
                      //     <img src={bagIcon} alt="itemIcon" className="rewards-item-picture"/>
                      // </div>
                      null}

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
            )}
          </div>
        </div>
      </div>
      <img
        src={questBgCup}
        alt="QuestCupBGicon"
        className="quest-background-icon"
      />
    </div>
  )
}

export default QuestCard
