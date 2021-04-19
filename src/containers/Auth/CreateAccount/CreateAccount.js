import React,{Component} from 'react';
import swal from 'sweetalert';
import Layout from '../../../components/Auth/Layout';
import classes from './CreateAccount.css';
import {Link} from 'react-router-dom';
import { withFormik, Field } from 'formik';
import axios from 'axios';

class CreateAccount extends Component{
    render(){
        return(
            <Layout register>
                <div className="panel-body">
		            <div className={["mar-ver", "pad-btm", classes.TitleSection].join(' ')}>
		                <h1 className="h3">Crear una nueva cuenta</h1>
		                <p>¡Únete a SET-ICAP | FX!. Vamos a configurar tu cuenta</p>
		            </div>
		            <form onSubmit={this.props.handleSubmit}>
		                <div className="row">
		                    <div className="col-sm-6">
								<div className="form-group">
									<Field type="text" name="firstName" placeholder="Nombre completo" className="form-control" minLength={4} required></Field>
								</div>
								<div className="form-group">
									<Field type="text" name="lastName" placeholder="Apellidos" className="form-control" minLength={3} required></Field>
								</div>
								<div className="form-group">
									<Field type="text" name="enterprise" placeholder="Empresa" className="form-control" minLength={3} required></Field>
								</div>
								<div className="form-group">
									<Field component="select" name="legalPerson" className={["form-control", classes.tamañoForm].join(' ')} required>
										<option value="natural">Persona natural</option>
										<option value="juridica">Persona jurídica</option>
									</Field>
								</div>
								<div className="form-group">
									<Field name="identification" component="select" className={["form-control", classes.tamañoForm].join(' ')} required>
										<option value="C">Cédula</option>
										<option value="N">Nit</option>
									</Field>
								</div>
		                    </div>
		                    <div className="col-sm-6">
								<div className="form-group">
									<Field name="identificationNumber" type="number" min='11111' placeholder="Número de identificación" className="form-control" required></Field>
								</div>
								<div className="form-group">
									<Field name="email" placeholder="Email" className="form-control" type='email' minLength={11} required></Field>
								</div>
								<div className="form-group">
									<Field name="country" type="text" placeholder="País" className="form-control" minLength={3} required></Field>
								</div>
								<div className="form-group">
									<Field name="city" type="text" placeholder="Ciudad" className="form-control" minLength={4} required></Field>
								</div>
								<div className="form-group">
									<Field name="telephone" type="number" placeholder="Teléfono" min='1111111' className="form-control" required></Field>
								</div>
		                    </div>
		                </div>
		                <div className="checkbox pad-btm text-left">
							<label>
							<Field type="checkbox" name="termsandconds" checked={this.props.values.termsandconds} required></Field>
								Acepto <a href="https://set-icap.com/terminos-y-condiciones.pdf" className="btn-link text-bold">Terminos y condiciones.</a>
							</label>
		                </div>
		                <div className="checkbox pad-btm text-left">
							<label>
							<Field type="checkbox" name="termsandconds2" checked={this.props.values.termsandconds2} required></Field>
								Acepto las <a href="https://set-icap.com/Descargas/Política de Tratamiento de Datos Personales Set-Icap FX.pdf" className="btn-link text-bold">políticas</a> y <a href="https://set-icap.com/Descargas/Autorización Tratamiento de Datos personales Set-Icap Fx.pdf" className="btn-link text-bold"> tratamiento de Datos personales.</a>
							</label>
		                </div>
		                <button className="btn btn-primary btn-lg btn-block" type="submit">Registrarse</button>
		            </form>
		        </div>
				<div className="pad-all">
		            <p>¿Ya tienes una cuenta? <Link to="/auth/login/" className="btn-link">Inicia sesión</Link></p>
		        </div>
            </Layout>
        )
    }
}

const handleSubmit = (values, resetForm) => {
	var day = new Date().toISOString().slice(0, 10);
	var d = new Date();
	var convert_day=day+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	const config = {
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded'
		}
	  }
	axios.post('https://hooks.zapier.com/hooks/catch/5088624/o3mrvn8/silent/', {
			"full_name": values.firstName,
			"last_name": values.lastName,
			"identification": values.identificationNumber,
			"email": values.email,
			"enterprise": values.enterprise,
			"country": values.country,
			"type": values.legalPerson,
			"city": values.city,
			"identification_type": values.identification  == 'C'? 'Cédula': 'Nit',
			"cellphone": values.telephone,
			"date": convert_day
		}, config).then(() => {
			swal({
				title: "¡Gracias!",
				text: "Hemos recibido sus datos",
				icon: "success",
			})
			resetForm();
		});
}

const mapPropsToValues = (props) => {
	return {
		firstName : props.firstName || '',
		lastName: props.lastName || '',
		enterprise: props.enterprise || '',
		legalPerson: props.legalPerson || 'natural',
		identification: props.identification || 'C',
		identificationNumber: props.identificationNumber || '',
		email: props.email || '',
		country: props.country || '',
		city: props.city || '',
		telephone: props.telephone || '',
		termsandconds: props.termsandconds || true,
		termsandconds2: props.termsandconds2 || true,
		handleSubmit: handleSubmit
	}
}

export default withFormik({ mapPropsToValues: mapPropsToValues, handleSubmit: (values, {resetForm}) => handleSubmit(values, resetForm) })(CreateAccount)