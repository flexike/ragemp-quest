import style from './questcardoption.module.sass'

interface questCardInterface {
    questOptionName: string,
    questOptionSVGoff: string,
    questOptionSVGon: string,
    selected: boolean,
    onClick: () => void;  // Add this line to the interface
}


function QuestCardOption({
                             questOptionName,
                             questOptionSVGoff,
                             questOptionSVGon,
                             selected,
                             onClick,
                         }: questCardInterface) {

    return (
        <div className={`${style.questMainHeaderQuestOption} ${selected ? style.selected : ""}`} onClick={onClick}>
            <div className={style.questOptionTitleWrapper}>

                <img src={selected ? `${questOptionSVGon}` : `${questOptionSVGoff}`} alt="SVGIcon"/>

                {questOptionName}
            </div>
        </div>
    );
}

export default QuestCardOption;