import Style from './footer.module.scss';

export const Footer = () => {
    return (
        <>
            <footer className={Style.footer}>
                <h4>Colorizer Palette Generator - Created by Mike Montgomery</h4>
                <p>Made possible by colormind.io palette API</p>
            </footer>
        </>
    );
}
