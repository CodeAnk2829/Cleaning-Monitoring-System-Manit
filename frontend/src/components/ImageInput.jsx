function CustomFileInput({ SetSelectedFile, selectedfile }) {
    const filesizes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
  
    const InputChange = (e) => {
      let images = [];
      for (let i = 0; i < e.target.files.length; i++) {
        images.push(e.target.files[i]);
        let reader = new FileReader();
        let file = e.target.files[i];
        reader.onloadend = () => {
          SetSelectedFile((preValue) => {
            return [
              ...preValue,
              {
                id: e.target.files[i].name,
                filename: e.target.files[i].name,
                fileimage: reader.result,
                datetime:
                  e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
                filesize: filesizes(e.target.files[i].size),
              },
            ];
          });
        };
        if (e.target.files[i]) {
          reader.readAsDataURL(file);
        }
      }
    };
  
    const DeleteSelectFile = (id) => {
      if (window.confirm("Are you sure you want to delete this Image?")) {
        const result = selectedfile.filter((data) => data.id !== id);
        SetSelectedFile(result);
      } else {
        // alert('No');
      }
    };
  
    return (
      <>
        <div className="kb-file-upload image">
          <label htmlFor="image">Image</label>
          <div className="file-upload-box">
            <input
              type="file"
              id="fileupload"
              className="file-upload-input"
              onChange={InputChange}
              multiple
              required
            />
            <span>
              Drag and drop or{" "}
              <span className="file-link">Choose your files</span>
            </span>
          </div>
        </div>
        <div className="mb-3">
          {selectedfile.map((data, index) => {
            const { id, filename, fileimage, datetime, filesize } = data;
            return (
              <div className="file-atc-box" key={id}>
                {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                  <div className="file-image">
                    {" "}
                    <img src={fileimage} alt="" />
                  </div>
                ) : (
                  <div className="file-image">
                    <i className="far fa-file-alt"></i>
                  </div>
                )}
                <div className="file-detail">
                  <h6>{filename}</h6>
                  <p></p>
                  <p>
                    <span>Size : {filesize}</span>
                    <span className="ml-2">Modified Time : {datetime}</span>
                  </p>
                  <div className="file-actions">
                    <button
                      type="button"
                      className="file-action-btn"
                      onClick={() => DeleteSelectFile(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  
  export default CustomFileInput;
  