import React, {Component} from 'react';
import HomeHeader from "../../components/HomePage/Header/Header";
import PreFooter from '../../components/shared/PreFooter/PreFooter';
import Footer from "../../components/shared/Footer/Footer";
import Respuesta from '../../components/HomePage/Respuesta/Respuesta';

class RespuestaHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    componentDidMount() {
        var errorD = [];
        errorD['message'] ='No hay datos para procesar';
        var ref_payco = (this.props.location.search!=='') ? this.props.location.search.split('=')[1]:this.setState({isLoaded: true,error:errorD});

        fetch("https://secure.epayco.co/validation/v1/reference/" + ref_payco)
          .then(res => {
              return res.json()})
          .then(
            (result) => { 
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
     }

    render(){
        const { error, isLoaded, items } = this.state;
        var ans = null;
         if (error) {
                 ans = <div className="row "><div className='alert alert-danger center-block' role="alert"><h4 className="alert-heading">Error:{error.message}</h4></div></div>
             }else{
                 ans = <div className="row"><Respuesta ans={items}/></div>

             }
                   
            return(
                <div id="container" className="home_page">
                    <HomeHeader empty={true}/>
                    <div className="boxed">
                        <div className="container-fluid">
                        {ans}
                        <PreFooter></PreFooter>
                        <Footer></Footer>
                        </div>
                    </div>
                </div>
            )
    }
}


export default RespuestaHome;