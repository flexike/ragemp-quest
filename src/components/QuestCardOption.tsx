import './questcardoption.sass'

interface questCardInterface{
    questOptionName: string
    questOptionSVGoff: string
    questOptionSVGon: string
    questOptionQuests: object
}


function QuestCardOption({questOptionName, questOptionSVGoff, questOptionSVGon, questOptionQuests}: questCardInterface) {

    const isActive: boolean = false
    return (
        <div className="quest-main-header-quest-option">
            <div className="quest-option-title-wrapper">
                {
                isActive ?
                <img src={questOptionSVGon} alt="SVGIcon"/>
                :
                <img src={questOptionSVGoff} alt="SVGIcon"/>
                }
                {questOptionName}
            </div>
        </div>
    );
}

export default QuestCardOption;