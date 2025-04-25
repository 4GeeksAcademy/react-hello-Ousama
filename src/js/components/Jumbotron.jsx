import React from "react";

const Jumbotron = () => {
  return (
    <div className="py-4 mb-4 p-4" style={{ backgroundColor: '#e9f1f5', borderRadius: '10px'}}>
      <div className="container-fluid">
        <h2>BMW 1916</h2>
        <p className="lead">
        Fundada en 1916 como fabricante de motores de avión (BFW), BMW se diversificó tras la Primera Guerra Mundial. En 1923 lanzó su primera motocicleta y en 1929 su primer coche tras adquirir Eisenach. Tras la Segunda Guerra Mundial y su enfoque en la producción bélica, BMW se recuperó con motocicletas y regresó a los automóviles. La década de 1960, con modelos como el 1500, consolidó su reputación por vehículos deportivos y de calidad. Desde entonces, BMW se ha convertido en un fabricante global de vehículos y motores de alta gama, innovando y manteniendo su enfoque en el rendimiento y el "placer de conducir". </p>
        <p className="lead">El predecesor de BMW fue la empresa Rapp Motorenwerke GmbH, fundada en 1913 por Karl Rapp. Cambiaron el nombre en abril de 1917, en primer lugar a BMW GmbH (sociedad limitada) para terminar en BMW AG, un año más tarde tras su conversión en sociedad anónima. El ingeniero Max Friz destacó en la joven empresa por desarrollar en 1917 un motor de avión de alta compresión, gracias a lo cual se pudo reducir la pérdida de prestaciones en las alturas. Esta innovación tuvo tal aceptación que BMW recibió un pedido de 2000 motores por parte de la administración del ejército prusiano. El 17 de junio de 1919 se alcanzó el récord de altura de 9760 metros con un BMW IIIa. El final de la Primera Guerra Mundial y el Tratado de Versalles parecieron ser la fase final de la empresa, ya que el tratado prohibía la fabricación durante 5 años de motores de avión, por aquel entonces el único producto de BMW. En 1922 Camillo Castiglioni, accionista principal de la compañía, abandonó la empresa para irse a Bayerische Flugzeugwerke AG (BFW), llevándose también los derechos de la marca BMW.
        La empresa BFW era originaria de la empresa Gustav-Otto-Flugzeugwerk, que fundó el 7 de marzo de 1916 Gustav Otto, hijo de Nikolaus August Otto, inventor del motor de combustión. El 7 de marzo de 1916 se considera, en la descripción de la historia de la empresa, como fecha oficial de fundación de BMW. Con la salida de Castiglioni, los Bayerische Flugzeugwerke (BFW) darían paso a BMW. La empresa, que se llamaba hasta entonces BMW, cambió de nombre a Süddeutsche Bremsen-AG y después Knorr-Bremse.</p>

        <a href="https://es.wikipedia.org/wiki/BMW">
          <button className="btn btn-outline-dark" type="button">Historia completa</button>
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;