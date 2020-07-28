const React = require('react');

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div>
        <div className="mainContainer alignCenter">
          <h2>Cómo Pienso</h2>
          <a href="https://commons.wikimedia.org/w/index.php?curid=123075">
            <img
              src={`${baseUrl}img/Portada.jpg`}
              alt="De Adrian Pingstone - Fotografía propia, Dominio público'"
            />
          </a>
          <p>Rumiando algunas ideas</p>
        </div>
      </div>
    );
  }
}

module.exports = Index;
