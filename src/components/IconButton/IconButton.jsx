import classes from './iconButton.module.css'

const IconButton = ({icon, onClick, label}) => {
    return(
        <>
        <button onClick={onClick} className={classes.iconButton}>
            <img src={icon} alt="" />
            <label>{label}</label>
        </button>
        </>
    )
}

export default IconButton