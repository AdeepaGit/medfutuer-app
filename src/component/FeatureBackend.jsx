import React from "react";
import './feature.css';

function FeatureBackend() {
    return (
        <div className="main-content">

            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block  sidebar collapset featureSidebar">

                    <div className="fmenu">Menu</div>

                </nav>

                <main className="col-md-9">
                    <div className="postcontent">
                        <form>
                            <div className="fhedding">Add Featured Posts</div>
                            <input type="text" placeholder="Post Title" className="tile"/>
                            <br />
                            <input type="text" placeholder="Category" className="category" />
                            <br />
                            <textarea placeholder="Post text here" className="textarea"
                            >

                            </textarea>
                            <button className="button">SUBMIT</button>
                        </form>
                    </div>
                </main>
             
            </div>


        </div>
    );
}
export default FeatureBackend;