import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"
import "../Footer/footer.css"

export default function Footer() {
    
    return (
        <div className='containerFooter'>
            <MDBFooter bgColor='light'className='text-center text-lg-start text-muted footerStyle'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{alignItems: "center"}}>
                    <div className='me-5 d-none d-lg-block'>
                        <p>Seguinos en nuestras redes sociales!!!</p>
                    </div>

                    <div >
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </Link>
                    </div>
                </section>

                <section /* className='' */>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon fab icon="pagelines" className="me-3" />
                                    SucuRex
                                </h6>
                                <p>
                                    Somos un emprendimiento familiar que a traves de los años se dejo llevar por su amor a las plantas, cada planta es una vida, dale vida a tu hogar!!!
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
                                <p>
                                    <Link to="/" className='text-reset'>
                                        Home
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Plantas de interior" className='text-reset'>
                                        Plantas de interior
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Plantas de exterior" className='text-reset'>
                                        Plantas de exterior
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Macetas" className='text-reset'>
                                        Macetas
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Insumos" className='text-reset'>
                                        Insumos
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Decoracion" className='text-reset'>
                                        Decoracion
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Calle Falsa 123, Springfield
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    SucuRex@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> 11-56423456
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright:
                    <Link className='text-reset fw-bold' to='/'>
                        SucuRex.com
                    </Link>
                </div>
            </MDBFooter>
        </div>
    );
} 
/* function Footer() {
    return (
        <>
        <hr />
            <div className="container" style={{position:"absolute", bottom: "0"}}>
                <footer className="py-2 my-2">
                    <p className="text-center text-muted">© 2022 Via France Limited</p>
                </footer>
            </div>
        </>
    );
} */
/* export default Footer; */