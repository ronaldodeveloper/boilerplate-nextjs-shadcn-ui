"use client";
import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
    iconeName?: string
    iconeDirection?: string
    variante?: string 
}

function Button( { children , iconeName, iconeDirection, variante, ...props} : ButtonProps ) {
    return (
        <button
            className={`${styles.button} ${styles[variante || '']} ${!children && styles.buttonIconOnly}`}
            {...props}>
                 { iconeName && iconeDirection === 'left' && <span className={`icones ${iconeName}`}></span> }
                  { children}
                 { iconeName && iconeDirection === 'right' && <span className={`icones ${iconeName}`}></span> }
        </button>
    )
}
export default Button;