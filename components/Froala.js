import React from "react";

const Froala = (props) => {
  React.useEffect(() => {
    var editor = new FroalaEditor(
      "#froalaEditorElement",
      {
        events: {
          contentChanged: function () {
            props.onChange(editor.html.get());
          },
          "image.beforeUpload": function (images) {
            if (images.length) {
              var reader = new FileReader();
              reader.onload = (e) => {
                this.image.insert(
                  e.target.result,
                  null,
                  null,
                  this.image.get()
                );
              };
              reader.readAsDataURL(images[0]);
            }
            this.popups.hideAll();
            return false;
          },
          "video.beforeUpload": function (video) {
            let videoURL = `http://localhost:3000/test.webm`;
            let videoTag = `<video width="640" height="480" src="${videoURL}" controls>Your browser does not support the video tag.</video>`;
            this.video.insert(videoTag);
            this.popups.hideAll();
            return false;
          },
        },
      },
      function () {
        this.html.set(props.value);
      }
    );
  }, []);

  return <textarea id="froalaEditorElement"></textarea>;
};

export default Froala;
