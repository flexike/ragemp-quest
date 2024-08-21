import './questcardoption.sass'

interface questCardInterface{
    questOptionName: string
    questOptionSVGoff: string
    questOptionSVGon: string
}


function QuestCardOption({questOptionName, questOptionSVGoff, questOptionSVGon}: questCardInterface) {

    const isActive: boolean = false

    return (
        <div className="quest-main-header-quest-option">
            <div className="quest-option-title-wrapper">

                <img src={isActive ?`${questOptionSVGon}` : `${questOptionSVGoff}`} alt="SVGIcon"/>

                {questOptionName}
            </div>
        </div>
    );
}

export default QuestCardOption;