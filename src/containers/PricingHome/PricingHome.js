import React, {Component} from 'react';
import HomeHeader from "../../components/HomePage/Header/Header";
import PreFooter from '../../components/shared/PreFooter/PreFooter';
import Footer from "../../components/shared/Footer/Footer";
import Pricing from '../../components/HomePage/Pricing/Pricing';
import postscribe from 'postscribe';
import boton from "../../assets/img/boton.png";

class PricingHome extends Component{

    componentDidMount() {
        var boton2 = boton;
      postscribe('#mydiv', '<form><script src="https://checkout.epayco.co/checkout.js"class="epayco-button"data-epayco-key="ae022d333e2690638eaea6447d8796ba"data-epayco-tax="85500"data-epayco-tax-base="450000"data-epayco-amount="535500"data-epayco-name="Dólar SET-FX | Trimestral"data-epayco-description="Dólar SET-FX | Trimestral"data-epayco-currency="cop"data-epayco-country="co"data-epayco-test="false"data-epayco-external="true"data-epayco-button="'+boton2+'"></script></form>');
      postscribe('#mydiv2', '<form><script src="https://checkout.epayco.co/checkout.js"class="epayco-button"data-epayco-key="ae022d333e2690638eaea6447d8796ba"data-epayco-tax="171000"data-epayco-tax-base="900000"data-epayco-amount="1071000"data-epayco-name="Dólar SET-FX | Semestral"data-epayco-description="Dólar SET-FX | Semestral"data-epayco-currency="cop"data-epayco-country="co"data-epayco-test="false"data-epayco-external="true"data-epayco-button="'+boton2+'"></script></form>');
      postscribe('#mydiv3', '<form><script src="https://checkout.epayco.co/checkout.js"class="epayco-button"data-epayco-key="ae022d333e2690638eaea6447d8796ba"data-epayco-tax="342000"data-epayco-tax-base="1800000"data-epayco-amount="2142000"data-epayco-name="Dólar SET-FX | Anualidad"data-epayco-description="Dólar SET-FX | Anualidad"data-epayco-currency="cop"data-epayco-country="co"data-epayco-test="false"data-epayco-external="true"data-epayco-button="'+boton2+'"></script></form>');

  }
    render(){
        return(<div id="container" className="home_page">
            <HomeHeader empty={true}/>
            <div className="boxed">
                <div className="container-fluid">
                    <div className="row">
                        <Pricing />
                    </div> 
                <PreFooter></PreFooter>
                <Footer></Footer>
                </div>
            </div>
            
        </div>);
    }
}


export default PricingHome;