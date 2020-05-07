const isProduction = process.env.NODE_ENV === 'production';

let clientConfig = {};
// TODO: make this better! this just sends all data to the client... which is fine as none of this actually needs to be secret... but when it does, make this happen at build time

clientConfig['nodePort'] = 6565;
clientConfig['nodeServer'] = isProduction ? 's.enhughesiasm.com' : 'localhost';
clientConfig['nodeProtocol'] = isProduction ? 'https' : 'http';
clientConfig['recaptchaSiteKey'] = isProduction
	? '6LeoBsgUAAAAAN9yL0uxns-G4Jvl1q2wQz1Ld2cX'
	: '6Lf_CMgUAAAAAPLAjc_8rZ_hO7xGZ6PK9ldjjCVr';

export default clientConfig;
