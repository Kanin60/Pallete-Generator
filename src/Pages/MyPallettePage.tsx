import Button from "../components/Button/Button"





export const MyPallettePage = () => {

    return(
        <>
        <h1>Her er MypallettePage</h1>
        <Button text='set active' actionType="setActive"/>
        <Button text='delete' actionType="delete"/>
        </>
    )
}