	module.exports = {
			entry : __dirname+'/main.js', // we write the code here(ES2015 or Es2016)
			output : {
			path : __dirname,
			filename : 'index.js'// output should be here(ES5)
	},
	devServer : {
				inline: true, // if there are any file changes rebuild and re-render everything
				port : 3333 // server will run at port number 3333
	},
	module : {
				loaders : [
							{
								test : /.js$/,
								exclude : /node_modules/,
								loader : 'babel-loader',
								query : {
										presets : ['es2015']
										}
							}
						]
			}
	}