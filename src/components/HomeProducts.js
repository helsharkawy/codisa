import Product from './Product';
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
import './HomeProducts.css';

const HomeProjects = ({products , homeProducts}) => {
    
    let bestsellersIDs =  homeProducts.length > 0 ? homeProducts[0].bestsellers: [];
    let newarrivalsIDs = homeProducts.length > 0 ?homeProducts[0].newarrivals: [];
    let specialsIDs = homeProducts.length >0 ? homeProducts[0].specials : [];

    function handleTabsItems  (allProducts,itemsIds) {
        // eslint-disable-next-line array-callback-return
        let items= [];
        allProducts.map((product) => {
            for(let i=0 ; i<itemsIds.length ; i++){
                if (product.id === itemsIds[i]){
                    items.push(product);
                }
            }
        });
        return items;
    }

    let bestsellersItems = handleTabsItems(products,bestsellersIDs);
    let newarrivlsItems = handleTabsItems(products,newarrivalsIDs);
    let specialsItems = handleTabsItems(products,specialsIDs);

    function handleTabsPreview (evt,tabId) {
        const tabContent = document.querySelectorAll(".tab");
        const tabLinks = document.querySelectorAll('.tabs-title li');
        for (let i=0 ; i<3 ;i++){
            tabContent[i].style.display='none';
            tabLinks[i].classList.remove('active');
        }
        document.getElementById(tabId).style.display = "block";
        evt.target.classList.add("active");
    }


    return (
        <div className="home-products">
            <div className="container">
                <ul className="tabs-title">
                    <li className="active" onClick={(e) => handleTabsPreview(e,"tab-best")}>Bestsellers</li>
                    <li onClick={(e) =>handleTabsPreview(e,"tab-new")}>New Arrivals</li>
                    <li onClick={(e) => handleTabsPreview(e,"tab-special")}>Specials</li>
                </ul>
                <div className="tabs-content">
                    <div className="tab" id="tab-best" style={{display:'block'}}>
                        <Product allproducts={bestsellersItems} />
                    </div>
                    <div className="tab" id="tab-new" style={{display:'none'}}>
                        <Product allproducts={newarrivlsItems} />
                    </div>
                    <div className="tab" id="tab-special" style={{display:'none'}}>
                        <Product allproducts={specialsItems} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;