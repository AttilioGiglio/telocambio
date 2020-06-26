import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../Context/AppContext'
import { createSwap, SendEmail } from './../config/api.js';
import Swal from 'sweetalert2'
// import { useForm } from 'react-hook-form';
// import { NAMES, APIS, OPTIONS } from './../config/config.js';
// import { Link } from "react-router-dom";

export default function ListPublish({name, product}) {
    const context = useContext(AppContext);
    const handleSwap = () => {
        const selector = document.querySelector('.selectpublish')
        const data = {
            "oferta_id": selector.value,
            "muestra_id": product.id,
            "done": false
        }
        createSwap(data).then((res) => {
            // dataemail_oferta = {
            //     "email": "patote.gonzalez@gmail.com",
            //     "subject": "email de prueba de heroky",
            //     "body": "hoala"    
            // }
            // dataemail_muestra = {
            //     "email": "patote.gonzalez@gmail.com",
            //     "subject": "email de prueba de heroky",
            //     "body": "hoala"    
            // }
            // SendEmail(dataemail_muestra)

            Swal.fire({
                title: 'Esta Listo',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'success',
                confirmButtonText: 'Listo'
              })
              console.log(res);
            }).catch((err) => {
              console.log(err.status);
              Swal.fire({
                title: 'Ya habia echo esta oferta antes',
                text: 'Espere que la otra persona acepte su trueque',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })

    }
    return (
        <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby="listpublishModal" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Elige entre tus publicaciones</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                            
                                <select className="form-control selectpublish" name="publish">
                                    {
                                        context.products[0].map((product, key) => {
                                            if (product.user_id == context.user[0].id) {
                                                return (
                                                    <option key={key} value={product.id}>{product.name}</option>
                                                )
                                            }
                                        })
                                    }

                                </select>
                            </div>


                        </div>
                    </div>
                    <div className="modal-footer">
                        <div onClick={handleSwap} className="btn btn-primary">Ofrecer la elegida</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
