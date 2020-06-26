import React from 'react'
export default function ChoicePublish({name, product}) {
    return (
        <div>
            <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby="choiceModal" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Que quieres ofrecer?</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                            <div >Elige entre tus publicaciones o oferece algo nuevo</div>
                            
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <div className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target={`#listpublishModal${product.id}`}>Tus Publicaciones</div>
                                    </div>
                                    <div className="col">
                                        <div className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target={`#newpublishModal${product.id}`}>Subir nueva</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
