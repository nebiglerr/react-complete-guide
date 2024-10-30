export default function Tabs({ children ,buttons,ButtonsContainers='menu'}) {
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