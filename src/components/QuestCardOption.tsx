import './questcardoption.sass'

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
        <div className={`quest-main-header-quest-option ${selected ? "selected" : ''}`}>
            <div className="quest-option-title-wrapper">

                <img src={selected ? `${questOptionSVGon}` : `${questOptionSVGoff}`} alt="SVGIcon"/>

                {questOptionName}
            </div>
        </div>
    );
}

export default QuestCardOption;