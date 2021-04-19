import React from "react";
import classes from "./Respuesta.css";
import visa from "../../../assets/img/visa.svg";
import american from "../../../assets/img/amex.svg";
import master from "../../../assets/img/mastercard.svg";
import dinner from "../../../assets/img/diners.svg";
import pse from "../../../assets/img/pse.png";
import others from "../../../assets/img/others.svg";

const Respuesta = ({ans}) => {
	var html = null;
	var color = '';
	var tarjeta = null;
	if (ans['data']!==undefined) {

		if (ans.data.x_respuesta==='Aceptada') {
			color = 'alert alert-success';
		}else{
			color = 'alert alert-danger';
		}

		if (ans.data.x_franchise==='AM') {
			tarjeta = american;
		}else if(ans.data.x_franchise==='DC'){
			tarjeta = dinner;
		}else if(ans.data.x_franchise==='MC'){
			tarjeta = master;
		}else if(ans.data.x_franchise==='VS'){
			tarjeta = visa;
		}else if(ans.data.x_franchise==='PSE'){
			tarjeta = pse;
		}else{
			tarjeta = others;
		}
		html =(  
			<div >
	        	<div className={color} role="alert">
				  <h4 className={["alert-heading", classes.centrado].join(' ')}>Estado transacción : {(ans.data.x_response_reason_text!==undefined) ? ans.data.x_response_reason_text.split('-')[1]:'Error llave vencida'}</h4>
				</div>
				<div className="col-12">
					<div className={["col-12", classes.derecha, classes.fecha ].join(' ')}>
						<p><strong>Fecha : </strong>{ans.data.x_fecha_transaccion}</p>
					</div>
					<div className={["col-12", classes.centrado, classes.referencia ].join(' ')}>
						<p><strong>Referencia de pago : {ans.data.x_transaction_id}</strong></p>
					</div>
				</div>
				<div className="col-12">
					<div className="card text-center">
					  <div className="card-header">
					    Medio de pago
					  </div>
					  <div className="card-body">
					    <div className={["card mb-3", classes.tamCard, classes.noBorder].join(' ')}>
						  <div className="row no-gutters">
						    <div className="col-md-4">
						      <img src={tarjeta} className={["card-img", classes.imgothers].join(' ')} alt="othersCard"/>
						    </div>
						    <div className={["col-md-5", classes.textCard].join(' ')}>
						      <div className="card-body">
						        <p className="card-text">{ans.data.x_transaction_state}.</p>
						        <p className="card-text">{ans.data.x_cardnumber}.</p>
						      </div>
						    </div>
						  </div>
						</div>
					  </div>
					</div>
				</div>
				<div className="col-12">
					<div className="card text-center">
					  <div className="card-header">
					    Resumen de compra
					  </div>
					  <div className={["card-body", classes.izquierda ].join(' ')}>
					    <p>
					    	<strong>Numero de factura : </strong>{ans.data.x_id_factura} <br />
					    	<strong>Descripcion : </strong>{ans.data.x_description} <br />
					    	<strong>Total compra : $</strong>{ans.data.x_amount_base} <br />
					    	<strong>Impuesto : $</strong>{ans.data.x_tax} <br />
					    	<strong>Total pagado : $</strong>{ans.data.x_amount} <br /> 
					    </p>
					  </div>
					</div>
				</div>
				<div className={["col-5 center-block", classes.boton ].join(' ')}>
					<a href="/" className="btn btn-block btn-primary btn-lg">Finalizar</a>
				</div>
			</div>
        )
	}
    return(
    	<section className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content center-block">
        {html}
        </section>
    )
}

export default Respuesta;
