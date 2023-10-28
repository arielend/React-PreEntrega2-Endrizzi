import classes from './footer.module.css'

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <p className={classes.footer__p}>Proyecto <b>Tecno-Tienda</b></p>
            <p className={classes.footer__p}>Curso React - <b>Coderhouse</b> - Comision 58160</p>
            <p className={classes.footer__p}>Desarrollado por <b>ArielEnd</b></p>
        </footer>
    )
}

export default Footer