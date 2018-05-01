import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';



	ReactDOM.render(
			<ImagesUploader
				url="/upload" 
				optimisticPreviews
				multiple={false}
				onLoadEnd={(err) => {
					if (err) {
						console.error(err);
					}
				}}
				label="Upload a picture"
				/>,document.getElementById("app")
		);


