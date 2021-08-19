import React from "react";
import axios from 'axios';
class  ImageUpload extends React.Component {
  constructor(props){
    super(props);
    this.state={
        selectedFiles:null
    }
}
multipleFileChangedHandler = (event) => {
    this.setState({
     selectedFiles: event.target.files
    });
    console.log( event.target.files );
   };
   multipleFileUploadHandler = () => {
    const data = new FormData();
    let selectedFiles = this.state.selectedFiles;
  // If file selected
    if ( selectedFiles ) {
     for ( let i = 0; i < selectedFiles.length; i++ )
      {
      data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
     }
     for (var value of data.values()) {
      console.log(value);
   }
   axios({
    method: "post",
    url: "https://act-backend.herokuapp.com/api/photo1",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  })
  
    .then(function (response) {
      //handle success
      console.log(response);
      alert("Files are uploaded successfully !")
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
      }}
 


  render(){
  return (
    <div>
      <div className="flex justify-center mt-8 ">
        <div className="max-w-2xl rounded-lg shadow-xl ">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              File Upload
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Attach a file to MBA
                  </p>
                </div>
                <input type="file" multiple 
                onChange={this.multipleFileChangedHandler} className="opacity-0" />
              </label>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <button 
            onClick={this.multipleFileUploadHandler} className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue:900 shadow-xl">
              Add Books to MBA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default ImageUpload;
