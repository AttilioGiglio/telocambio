import React from 'react';
// import ReactDOM from 'react-dom';
import { SendEmail } from '../config/api.js'
import {useForm} from 'react-hook-form';
import Header from './../layouts/Header'
import Footer from './../layouts/footer/Footer2'
import { APIS } from './../config/config'
import './RegisterLoginContacto.sass';
import Swal from 'sweetalert2'
export default function Contacto() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const dataFormat = {
            "email": APIS.ADMINEMAIL,
            "subject": `Email de Telocambio de ${data.username} ${data.lastname}`,
            "body": `
                <h1>Email de contacto</h1>
                <p>nombre: <strong>${data.username}</strong></p>
                <p>apellido: <strong>${data.lastname}</strong></p>
                <p>email: <strong>${data.email}</strong></p>
                <p>mensaje: <strong>${data.body}</strong></p>
            `
        }
        SendEmail(dataFormat).then((res) => {
            console.log('funciona email', res)
            Swal.fire({
                title: 'Listo',
                text: 'Su email ha sido enviado',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
        })
        .catch((err) => {
            console.log('error de email',err);
            Swal.fire({
                title: 'Error',
                text: 'Hemos tenido un problema enviando su email',
                icon: 'error',
                confirmButtonText: 'Listo'
              })

        })
    }

    return (
        <div>
            <Header />
            <div className="Contacto">
                <div className="container">
                    <div id="contact-row" className="row justify-content-center align-items-center">
                        <div id="contact-column" className="col-md-6">
                            <div id="contact-box" className="col-md-12">
                                <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="form is-light" action="" method="post">
                                    <h3 className="text-center text-info">Contacto</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Nombre:</label><br />
                                        <input type="text" name="username"  className="form-control" ref={register({required: 'Nombre requerido'})}/>
                                        {errors.username && <p className="badge badge-danger ml-2">{errors.username.message}</p>}
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname" className="text-info">Apellido:</label><br />
                                        <input type="text" name="lastname"  className="form-control" ref={register({required: 'Apellido requerido'})}/>
                                        {errors.lastname && <p className="badge badge-danger ml-2">{errors.lastname.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-info">Email:</label><br />
                                        <input type="text" name="email" className="form-control" 
                                        ref={register({required: 'email requerido'})}
                                        />
                                        {errors.email && <p className="badge badge-danger ml-2">{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="text-info">Mensaje:</label><br />
                                        <input type="text" name="body"  className="form-control" ref={register({required: 'mensaje requerido'})} />
                                        {errors.body && <p className="badge badge-danger ml-2">{errors.body.message}</p>}
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-md">
                                        Enviar
                                    </button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Contacto />, rootElement);


