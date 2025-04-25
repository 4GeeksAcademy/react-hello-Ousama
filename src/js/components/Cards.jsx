import React from "react";

const Cards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 m-4">
      <div className="col">
        <div className="card h-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/BMW_507.jpg/330px-BMW_507.jpg" className="card-img-top" alt="Foto Bmw 507" />
          <div className="card-body d-flex flex-column justify-content-between"> 
            <h5 className="card-title">BMW 507</h5>
            <p className="card-text">Roadster elegante y exclusivo de los años 50, símbolo de lujo y deportividad.</p>
            <a href="https://es.wikipedia.org/wiki/BMW_507">
              <button className="btn btn-primary" type="button">Más información</button>
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://carsales.pxcrush.net/carsales/cars/private/1gs3104ykj1fgxj4ysgx7da4g.jpg?pxc_method=fitfill&pxc_bgtype=self&pxc_size=720,480" className="card-img-top" alt="Foto Bmw M3 E30" />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">BMW M3 E30</h5>
            <p className="card-text">Turismo de competición homologado para carretera, icónico por su rendimiento.</p>
            <a href="https://es.wikipedia.org/wiki/BMW_E30">
              <button className="btn btn-primary" type="button">Más información</button>
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BMW_S1000_RR_Studio.JPG/500px-BMW_S1000_RR_Studio.JPG" className="card-img-top" alt="Foto Bmw S1000RR" />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">BMW S1000RR</h5>
            <p className="card-text">Superbike de alto rendimiento, referente por su potencia, tecnología y diseño aerodinámico.</p>
            <a href="https://en.wikipedia.org/wiki/BMW_S1000RR">
              <button className="btn btn-primary" type="button">Más información</button>
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://static.motor.es/fotos-jato/bmw/uploads/bmw-ix-67a8f94d7bea5.jpg" className="card-img-top" alt="Foto BMW IX" />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">BMW IX</h5>
            <p className="card-text">SUV eléctrico innovador que fusiona lujo moderno, tecnología avanzada y sostenibilidad.</p>
            <a href="https://es.wikipedia.org/wiki/BMW_iX">
              <button className="btn btn-primary" type="button">Más información</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;