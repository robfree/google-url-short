/**
 * Modulo que contiene clases para el uso de Google API Url short
 * La refencia de API se puede consultar en:
 *    https://developers.google.com/url-shortener/v1/?hl=es
 *
 * @module googleShort
 * @author Roberto Serrano Diaz-Grande
 *
 */
var googleShort = googleShort || {};

/**
 * 'API_KEY_GOOGLE' constante con la API Key de Google
 * @property API_KEY_GOOGLE
 * @type  String
 * @static
 * @final
 *
 */
googleShort.API_KEY_GOOGLE = 'YOUR API KEY';

/**
 * Retorna el la url lista para obtener información de un enlace corto
 * @method get
 * @static
 * @throws {Error} Nuevo Error
 * @example
 *    googleShort.get('shortUrl', 'projection');
 * @since 0.5.0
 */
googleShort.get = function(shortUrl, projection) {
  return 'https://www.googleapis.com/urlshortener/v1/url?key=' + googleShort.API_KEY_GOOGLE + '&shortUrl=' + shortUrl + "&projection=" + projection;
}

/**
 * Retorna un objeto con las propiedades: parametros a enviar al servidor,
 *  y el enlace para la petición
 * @class insert
 * @constructor
 * @param shortUrl {String} El enlace que se desea cortar
 *
 */
googleShort.insert = function (longUrl) {

  var re = new RegExp("^http");

  if (!re.test(longUrl)) {
    throw 'Url no valida: Ej http://www.site.com';
  }
  /**
   * Continene los parametros para enviar
   * @property parametros
   * @type JSON
   */
  var parametros = JSON.stringify({ longUrl: longUrl }, null, '\t');
  /**
   * Contiene el enlace listo para la peticion
   * @property enlace
   * @type String
   */
  var enlace = 'https://www.googleapis.com/urlshortener/v1/url?key=' + googleShort.API_KEY_GOOGLE;

  return {
      parametros: parametros,
      enlace: enlace
  };
}
