import styles from './button.module.scss'
interface ButtonProps {
    text: string;
    actionType: '1' | '2' | '3' | '4';
}

function Button({text,actionType}:ButtonProps) {
    const handleClick = () => {
        switch (actionType) {
            case '1':
                console.log('generate clicked');
                break;
                
                case '2':
                console.log('save this clicked');
                break;

                case '3':
                console.log('my palettes clicked');
                break;

                case '4':
                console.log('random palette clicked');
                break;
                default:
                    console.log('default');
                    
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            {text}
        </button>
    )
}
    
   


export default Button