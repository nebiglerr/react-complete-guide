export default function Tabs({ children ,buttons,ButtonsContainers}) {
//const ButtonsContainers = buttonsContainer;
    return (
        <>
            <ButtonsContainers>
               {buttons}
            </ButtonsContainers>
            {children}
        </>
    );
}