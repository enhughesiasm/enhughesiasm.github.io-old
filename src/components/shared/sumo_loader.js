// import React from 'react';

// export default class SumoLoader extends React.Component{

// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			sumoLoaded: false
// 		};
// 	}

// 	componentDidMount(){
// 		console.log('NH: oops, stray sumoloader...');
// 		if(false && document.getElementById('sumoLoader') == null && !this.state.sumoLoaded){
// 			const s = document.createElement('script');
// 			s.type='text/javascript';
// 			s.async = true;
// 			s.setAttribute('id', 'sumoLoader');
// 			let inlineScript = document.createTextNode('(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId=\'9bfaeb7d9450db870dce2fb26243022ed906a8e8dd644ec833adbb9c4d9a4036\';v.parentNode.insertBefore(j,v)})(window,document,\'script\',\'//load.sumo.com/\')');
// 			s.appendChild(inlineScript);

// 			this.setState({sumoLoaded: true});
// 			document.body.appendChild(s);
// 		}
// 	}

// 	render(){
// 		return (null);
// 	}

// }