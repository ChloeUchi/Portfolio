import './Preloader.css';

const Preloader: React.FC = () => {

    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        <span data-text-preloader="W" className="letters-loading">W</span>
                        <span data-text-preloader="E" className="letters-loading">E</span>
                        <span data-text-preloader="L" className="letters-loading">L</span>
                        <span data-text-preloader="L" className="letters-loading">L</span>
                        <span data-text-preloader="&nbsp;" className="letters-loading">&nbsp;</span>
                        <span data-text-preloader="C" className="letters-loading">C</span>
                        <span data-text-preloader="O" className="letters-loading">O</span>
                        <span data-text-preloader="M" className="letters-loading">M</span>
                        <span data-text-preloader="E" className="letters-loading">E</span>
                    </div>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
